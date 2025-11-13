/**
 * ============================================================
 * NELSON COUNTY ADMIN PANEL - GOOGLE APPS SCRIPT
 * ============================================================
 *
 * Full replacement script: paste the entire file, save, redeploy.
 * ============================================================
 */

const LISTINGS_SHEET_NAME = 'Nelson County';

// -----------------------------------------------------------------------------
// ImageKit helpers
// -----------------------------------------------------------------------------

function uploadRemoteImageToImageKit(imageUrl, fileName) {
  if (!imageUrl) return '';
  if (String(imageUrl).startsWith('https://ik.imagekit.io/OE')) return imageUrl;

  const props = PropertiesService.getScriptProperties();
  const privateKey = props.getProperty('IMAGEKIT_PRIVATE_KEY');
  const uploadFolder = props.getProperty('IMAGEKIT_UPLOAD_FOLDER') || '';
  if (!privateKey) throw new Error('IMAGEKIT_PRIVATE_KEY missing in Script Properties.');

  const payload = {
    file: imageUrl,
    fileName: fileName || ('listing-' + Date.now()),
    useUniqueFileName: true
  };
  if (uploadFolder) payload.folder = uploadFolder;

  const options = {
    method: 'post',
    payload: payload,
    headers: { Authorization: 'Basic ' + Utilities.base64Encode(privateKey + ':') },
    muteHttpExceptions: true
  };

  const response = UrlFetchApp.fetch('https://upload.imagekit.io/api/v1/files/upload', options);
  const status = response.getResponseCode();
  if (status >= 200 && status < 300) {
    const json = JSON.parse(response.getContentText());
    return json.url || ('https://ik.imagekit.io/OE' + json.filePath);
  }

  throw new Error('ImageKit upload failed (' + status + '): ' + response.getContentText());
}

function setIfChanged(sheet, rowIndex, colIndex, newValue) {
  const current = sheet.getRange(rowIndex, colIndex).getValue();
  if (current !== newValue) {
    sheet.getRange(rowIndex, colIndex).setValue(newValue);
  }
}

function tryUpload(url, fileName) {
  const maxAttempts = 3;
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return uploadRemoteImageToImageKit(url, fileName);
    } catch (err) {
      Logger.log('Upload failed (' + attempt + '/' + maxAttempts + ') for ' + url + ': ' + err);
      if (attempt === maxAttempts) throw err;
      Utilities.sleep(2000);
    }
  }
}

function listSheetHeaders() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(LISTINGS_SHEET_NAME);
  if (!sheet) {
    Logger.log('Sheet "' + LISTINGS_SHEET_NAME + '" not found.');
    return;
  }
  const values = sheet.getDataRange().getValues();
  if (!values.length) {
    Logger.log('Sheet is empty.');
    return;
  }
  Logger.log('Headers: ' + JSON.stringify(values[0]));
}

// -----------------------------------------------------------------------------
// OPTIONS / GET handlers
// -----------------------------------------------------------------------------

function doOptions(e) {
  return ContentService.createTextOutput('').setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  try {
    if (e && e.parameter && e.parameter.action === 'getImageKitUploadParams') {
      return ContentService
        .createTextOutput(JSON.stringify({
          success: true,
          data: getImageKitUploadParams()
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const result = getData(sheet);
    return ContentService.createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// -----------------------------------------------------------------------------
// POST handler with ImageKit branch
// -----------------------------------------------------------------------------

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    let rawData;
    if (e.postData && e.postData.contents) {
      rawData = e.postData.contents;
    } else if (e.parameter && e.parameter.data) {
      rawData = e.parameter.data;
    } else if (e.postData) {
      rawData = e.postData.getDataAsString();
    }

    if (!rawData) {
      throw new Error('No data received. Make sure you are sending JSON in the request body (e.postData.contents).');
    }

    let data;
    try {
      data = JSON.parse(rawData);
    } catch (parseError) {
      if (typeof rawData === 'string' && rawData.indexOf('action=') === 0) {
        const params = {};
        rawData.split('&').forEach(function(part) {
          const [key, value] = part.split('=');
          params[decodeURIComponent(key)] = decodeURIComponent(value || '');
        });
        data = params;
      } else {
        throw new Error('Invalid JSON data: ' + parseError.toString());
      }
    }

    if (!data || typeof data !== 'object') {
      throw new Error('Data must be a JSON object');
    }

    const action = data.action;
    if (!action) {
      throw new Error('Missing "action" field in request');
    }

    if (action === 'getImageKitUploadParams') {
      return handleImageKitRequest(data);
    }

    // Handle AI image description generation
    if (action === 'generateImageDescription') {
      if (!data.imageUrl) {
        throw new Error('Missing "imageUrl" field for generateImageDescription action');
      }
      return generateImageDescription(data.imageUrl);
    }

    // Handle ImageKit metadata update
    if (action === 'updateImageKitMetadata') {
      if (!data.fileId) {
        throw new Error('Missing "fileId" field for updateImageKitMetadata action');
      }
      if (!data.customMetadata) {
        throw new Error('Missing "customMetadata" field for updateImageKitMetadata action');
      }
      return updateImageKitFileMetadata(data.fileId, data.customMetadata);
    }

    let result;
    if (action === 'saveListing') {
      if (!data.listing) throw new Error('Missing "listing" field for saveListing action');
      result = saveListing(sheet, data.listing);
    } else if (action === 'replaceAllListings') {
      if (!data.listings) throw new Error('Missing "listings" field for replaceAllListings action');
      result = replaceAllListings(sheet, data.listings);
    } else if (action === 'deleteListing') {
      if (!data.listingId) throw new Error('Missing "listingId" field for deleteListing action');
      result = deleteListing(sheet, data.listingId);
    } else {
      result = { success: false, error: 'Unknown action: ' + action + '. Expected: saveListing, replaceAllListings, or deleteListing' };
    }

    return ContentService.createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// -----------------------------------------------------------------------------
// Sheet access helpers (existing logic)
// -----------------------------------------------------------------------------

function getData(sheet) {
  try {
    const values = sheet.getDataRange().getValues();
    if (!values || values.length === 0) {
      return { success: true, listings: [] };
    }

    const headers = values[0];
    const rows = values.slice(1);

    const listings = rows.map((row, index) => {
      const listing = {};
      headers.forEach((header, colIndex) => {
        const value = row[colIndex] || '';
        const headerLower = String(header).toLowerCase().trim();

        if (headerLower === 'id' || headerLower === 'slug') {
          listing.id = String(value || (index + 1));
        } else if (['title', 'name', 'listing name'].includes(headerLower)) {
          listing.name = String(value || '');
        } else if (headerLower === 'type') {
          listing.type = String(value || '');
        } else if (headerLower === 'area') {
          listing.area = String(value || '');
        } else if (headerLower === 'description') {
          listing.description = String(value || '');
        } else if (['detaileddescription', 'detailed description', 'long description'].includes(headerLower)) {
          listing.detailedDescription = String(value || '');
        } else if (['photo', 'image1', 'image 1', 'image url 1'].includes(headerLower)) {
          listing.image1 = String(value || '');
        } else if (['image2', 'image 2', 'image url 2'].includes(headerLower)) {
          listing.image2 = String(value || '');
        } else if (['image3', 'image 3', 'image url 3'].includes(headerLower)) {
          listing.image3 = String(value || '');
        } else if (['external website', 'website', 'url'].includes(headerLower)) {
          listing.website = String(value || '');
        } else if (headerLower === 'phone') {
          listing.phone = String(value || '');
        } else if (headerLower === 'address') {
          listing.address = String(value || '');
        } else if (headerLower === 'amenities') {
          const amenityStr = String(value || '');
          listing.amenities = amenityStr.split(/[,;]/).map(a => a.trim()).filter(a => a);
        } else if (headerLower === 'featured') {
          const featuredVal = String(value || '').toLowerCase();
          listing.featured = featuredVal === 'true' || featuredVal === 'yes' || featuredVal === '1';
        } else {
          listing[header] = String(value || '');
        }
      });
      return listing;
    }).filter(l => l.name);

    return { success: true, listings: listings };

  } catch (error) {
    return { success: false, error: error.toString() };
  }
}

function saveListing(sheet, listing) {
  try {
    const listingId = listing.id;
    const values = sheet.getDataRange().getValues();
    const headers = values[0];
    let rowIndex = -1;

    for (let i = 1; i < values.length; i++) {
      const rowId = String(values[i][0] || '');
      if (rowId === String(listingId)) {
        rowIndex = i + 1;
        break;
      }
    }

    const rowData = [];
    headers.forEach(header => {
      const headerLower = String(header).toLowerCase().trim();
      if (headerLower === 'id' || headerLower === 'slug') {
        rowData.push(listing.id || '');
      } else if (['title', 'name', 'listing name'].includes(headerLower)) {
        rowData.push(listing.name || '');
      } else if (headerLower === 'type') {
        rowData.push(listing.type || '');
      } else if (headerLower === 'area') {
        rowData.push(listing.area || '');
      } else if (headerLower === 'description') {
        rowData.push(listing.description || '');
      } else if (['detaileddescription', 'detailed description', 'long description'].includes(headerLower)) {
        rowData.push(listing.detailedDescription || '');
      } else if (['photo', 'image1', 'image 1', 'image url 1'].includes(headerLower)) {
        rowData.push(listing.image1 || '');
      } else if (['image2', 'image 2', 'image url 2'].includes(headerLower)) {
        rowData.push(listing.image2 || '');
      } else if (['image3', 'image 3', 'image url 3'].includes(headerLower)) {
        rowData.push(listing.image3 || '');
      } else if (['external website', 'website', 'url'].includes(headerLower)) {
        rowData.push(listing.website || '');
      } else if (headerLower === 'phone') {
        rowData.push(listing.phone || '');
      } else if (headerLower === 'address') {
        rowData.push(listing.address || '');
      } else if (headerLower === 'amenities') {
        rowData.push(Array.isArray(listing.amenities) ? listing.amenities.join(', ') : (listing.amenities || ''));
      } else if (headerLower === 'featured') {
        rowData.push(listing.featured ? 'TRUE' : 'FALSE');
      } else {
        rowData.push(listing[header] || '');
      }
    });

    if (rowIndex > 0) {
      sheet.getRange(rowIndex, 1, 1, rowData.length).setValues([rowData]);
    } else {
      sheet.appendRow(rowData);
    }

    return { success: true, message: 'Listing saved successfully' };

  } catch (error) {
    return { success: false, error: error.toString() };
  }
}

function replaceAllListings(sheet, listings) {
  try {
    if (!listings || !Array.isArray(listings) || listings.length === 0) {
      sheet.clear();
      return { success: true, message: 'Sheet cleared' };
    }

    const allHeaders = new Set();
    listings.forEach(listing => {
      Object.keys(listing).forEach(key => allHeaders.add(key));
    });

    const standardHeaders = [
      'id', 'slug', 'title', 'name', 'listing name',
      'type', 'area', 'description', 'detailedDescription',
      'photo', 'image1', 'image 1', 'image url 1',
      'image2', 'image 2', 'image url 2',
      'image3', 'image 3', 'image url 3',
      'external website', 'website', 'url',
      'phone', 'address', 'amenities', 'featured'
    ];

    const headers = [];
    standardHeaders.forEach(h => {
      if (allHeaders.has(h)) {
        headers.push(h);
        allHeaders.delete(h);
      }
    });
    Array.from(allHeaders).forEach(h => headers.push(h));

    sheet.clear();
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);

    const rows = listings.map(listing => {
      return headers.map(header => {
        const headerLower = String(header).toLowerCase().trim();
        let value = listing[header] || listing[headerLower] || '';

        if (headerLower === 'amenities') {
          value = Array.isArray(listing.amenities) ? listing.amenities.join(', ') : String(value);
        } else if (headerLower === 'featured') {
          value = listing.featured ? 'TRUE' : 'FALSE';
        } else {
          value = String(value || '');
        }

        return value;
      });
    });

    if (rows.length > 0) {
      sheet.getRange(2, 1, rows.length, headers.length).setValues(rows);
    }

    return { success: true, message: 'All listings replaced successfully' };

  } catch (error) {
    return { success: false, error: error.toString() };
  }
}

function deleteListing(sheet, listingId) {
  try {
    const idToDelete = String(listingId);
    const values = sheet.getDataRange().getValues();

    for (let i = 1; i < values.length; i++) {
      const rowId = String(values[i][0] || '');
      if (rowId === idToDelete) {
        sheet.deleteRow(i + 1);
        return { success: true, message: 'Listing deleted successfully' };
      }
    }

    return { success: false, error: 'Listing with id "' + listingId + '" not found' };

  } catch (error) {
    return { success: false, error: error.toString() };
  }
}

// -----------------------------------------------------------------------------
// ImageKit signing endpoint
// -----------------------------------------------------------------------------

function getImageKitUploadParams() {
  const props = PropertiesService.getScriptProperties();
  const privateKey = props.getProperty('IMAGEKIT_PRIVATE_KEY');
  const uploadFolder = props.getProperty('IMAGEKIT_UPLOAD_FOLDER') || '';
  if (!privateKey) {
    throw new Error('ImageKit private key not configured in script properties.');
  }

  const token = Utilities.base64EncodeWebSafe(Utilities.getUuid());
  const expire = Math.floor(Date.now() / 1000) + 60;

  const signatureBytes = Utilities.computeHmacSignature(
    Utilities.MacAlgorithm.HMAC_SHA_1,
    token + expire,
    privateKey
  );
  const signatureHex = signatureBytes.map(function(b) {
    const hex = (b & 0xff).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).join('');

  return {
    token,
    expire,
    signature: signatureHex,
    folder: uploadFolder
  };
}

function handleImageKitRequest(request) {
  return ContentService
    .createTextOutput(JSON.stringify({
      success: true,
      data: getImageKitUploadParams()
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

// -----------------------------------------------------------------------------
// AI Image Description Generation
// -----------------------------------------------------------------------------

function generateImageDescription(imageUrl) {
  try {
    const scriptProperties = PropertiesService.getScriptProperties();
    
    // Try Google Gemini first (default, free tier available)
    const geminiApiKey = scriptProperties.getProperty('GEMINI_API_KEY');
    if (geminiApiKey) {
      return generateImageDescriptionWithGemini(imageUrl, geminiApiKey);
    }
    
    // Fallback to OpenAI (if API key is set)
    const openaiApiKey = scriptProperties.getProperty('OPENAI_API_KEY');
    if (openaiApiKey) {
      return generateImageDescriptionWithOpenAI(imageUrl, openaiApiKey);
    }
    
    // If neither API key is configured, return error with helpful message
    throw new Error('No AI API key configured. Please add GEMINI_API_KEY (recommended, free) or OPENAI_API_KEY in Script Properties. Get a free Gemini key at: https://aistudio.google.com/app/apikey');
    
  } catch (error) {
    Logger.log('Error generating image description: ' + error.toString());
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function generateImageDescriptionWithOpenAI(imageUrl, apiKey) {
  const url = 'https://api.openai.com/v1/chat/completions';
  const payload = {
    'model': 'gpt-4o',
    'messages': [
      {
        'role': 'user',
        'content': [
          {
            'type': 'text',
            'text': 'Describe this image in detail for use as an alt text or meta description. Keep it concise (50-150 words), descriptive, and SEO-friendly. Focus on what is visible in the image.'
          },
          {
            'type': 'image_url',
            'image_url': {
              'url': imageUrl
            }
          }
        ]
      }
    ],
    'max_tokens': 200
  };
  
  const options = {
    'method': 'post',
    'headers': {
      'Authorization': 'Bearer ' + apiKey,
      'Content-Type': 'application/json'
    },
    'payload': JSON.stringify(payload),
    'muteHttpExceptions': true
  };
  
  const response = UrlFetchApp.fetch(url, options);
  const status = response.getResponseCode();
  
  if (status >= 200 && status < 300) {
    const responseData = JSON.parse(response.getContentText());
    
    if (responseData.choices && responseData.choices[0] && responseData.choices[0].message) {
      const description = responseData.choices[0].message.content.trim();
      
      return ContentService
        .createTextOutput(JSON.stringify({
          success: true,
          description: description
        }))
        .setMimeType(ContentService.MimeType.JSON);
    } else {
      throw new Error('Unexpected response format from OpenAI API');
    }
  } else {
    const errorText = response.getContentText();
    throw new Error('OpenAI API error (' + status + '): ' + errorText);
  }
}

function generateImageDescriptionWithGemini(imageUrl, apiKey) {
  // Google Gemini API (free tier available)
  const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=' + apiKey;
  
  const payload = {
    'contents': [
      {
        'parts': [
          {
            'text': 'Describe this image in detail for use as an alt text or meta description. Keep it concise (50-150 words), descriptive, and SEO-friendly. Focus on what is visible in the image.'
          },
          {
            'inline_data': {
              'mime_type': 'image/jpeg',
              'data': getImageAsBase64(imageUrl)
            }
          }
        ]
      }
    ],
    'generationConfig': {
      'maxOutputTokens': 200
    }
  };
  
  const options = {
    'method': 'post',
    'headers': {
      'Content-Type': 'application/json'
    },
    'payload': JSON.stringify(payload),
    'muteHttpExceptions': true
  };
  
  const response = UrlFetchApp.fetch(url, options);
  const status = response.getResponseCode();
  
  if (status >= 200 && status < 300) {
    const responseData = JSON.parse(response.getContentText());
    
    if (responseData.candidates && responseData.candidates[0] && responseData.candidates[0].content && responseData.candidates[0].content.parts) {
      const description = responseData.candidates[0].content.parts[0].text.trim();
      
      return ContentService
        .createTextOutput(JSON.stringify({
          success: true,
          description: description
        }))
        .setMimeType(ContentService.MimeType.JSON);
    } else {
      throw new Error('Unexpected response format from Gemini API');
    }
  } else {
    const errorText = response.getContentText();
    throw new Error('Gemini API error (' + status + '): ' + errorText);
  }
}

function getImageAsBase64(imageUrl) {
  try {
    // Fetch image and convert to base64
    const imageResponse = UrlFetchApp.fetch(imageUrl);
    const imageBlob = imageResponse.getBlob();
    return Utilities.base64Encode(imageBlob.getBytes());
  } catch (error) {
    throw new Error('Failed to fetch image for description: ' + error.toString());
  }
}

// -----------------------------------------------------------------------------
// ImageKit Metadata Update
// -----------------------------------------------------------------------------

function updateImageKitFileMetadata(filePathOrId, customMetadata, imageUrl) {
  try {
    const scriptProperties = PropertiesService.getScriptProperties();
    const privateKey = scriptProperties.getProperty('IMAGEKIT_PRIVATE_KEY');
    
    if (!privateKey) {
      throw new Error('IMAGEKIT_PRIVATE_KEY not configured in Script Properties.');
    }
    
    // First, we need to find the file by path to get its fileId
    // ImageKit requires fileId for updating metadata
    let fileId = filePathOrId; // Assume it might already be a fileId
    
    // If it looks like a file path (starts with /), search for the file by path
    if (filePathOrId.startsWith('/')) {
      const searchUrl = 'https://api.imagekit.io/v1/files';
      const searchOptions = {
        method: 'get',
        headers: {
          'Authorization': 'Basic ' + Utilities.base64Encode(privateKey + ':')
        },
        muteHttpExceptions: true
      };
      
      // Search for files with this path
      const searchParams = '?path=' + encodeURIComponent(filePathOrId);
      const searchResponse = UrlFetchApp.fetch(searchUrl + searchParams, searchOptions);
      const searchStatus = searchResponse.getResponseCode();
      
      if (searchStatus >= 200 && searchStatus < 300) {
        const searchResult = JSON.parse(searchResponse.getContentText());
        if (searchResult && searchResult.length > 0 && searchResult[0].fileId) {
          fileId = searchResult[0].fileId;
        } else {
          // Try getting file details directly by path
          // ImageKit might accept path as fileId for some operations
          fileId = filePathOrId;
        }
      }
    }
    
    // Get current file details
    const getUrl = 'https://api.imagekit.io/v1/files/' + encodeURIComponent(fileId) + '/details';
    const getOptions = {
      method: 'get',
      headers: {
        'Authorization': 'Basic ' + Utilities.base64Encode(privateKey + ':')
      },
      muteHttpExceptions: true
    };
    
    const getResponse = UrlFetchApp.fetch(getUrl, getOptions);
    const getStatus = getResponse.getResponseCode();
    
    if (getStatus < 200 || getStatus >= 300) {
      const errorText = getResponse.getContentText();
      throw new Error('Failed to get file details: ' + getStatus + ' - ' + errorText);
    }
    
    const fileDetails = JSON.parse(getResponse.getContentText());
    
    // Get the actual fileId from the response
    if (fileDetails.fileId) {
      fileId = fileDetails.fileId;
    }
    
    // Merge existing customMetadata with new values
    const existingMetadata = fileDetails.customMetadata || {};
    const updatedMetadata = Object.assign({}, existingMetadata, customMetadata);
    
    // Update custom metadata using PATCH
    const patchUrl = 'https://api.imagekit.io/v1/files/' + encodeURIComponent(fileId) + '/details';
    const patchOptions = {
      method: 'patch',
      headers: {
        'Authorization': 'Basic ' + Utilities.base64Encode(privateKey + ':'),
        'Content-Type': 'application/json'
      },
      payload: JSON.stringify({
        customMetadata: updatedMetadata
      }),
      muteHttpExceptions: true
    };
    
    const patchResponse = UrlFetchApp.fetch(patchUrl, patchOptions);
    const patchStatus = patchResponse.getResponseCode();
    
    if (patchStatus >= 200 && patchStatus < 300) {
      return ContentService
        .createTextOutput(JSON.stringify({
          success: true,
          message: 'ImageKit metadata updated successfully',
          fileId: fileId
        }))
        .setMimeType(ContentService.MimeType.JSON);
    } else {
      const errorText = patchResponse.getContentText();
      throw new Error('Failed to update ImageKit metadata: ' + patchStatus + ' - ' + errorText);
    }
    
  } catch (error) {
    Logger.log('Error updating ImageKit metadata: ' + error.toString());
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// -----------------------------------------------------------------------------
// One-time migration (optional helper)
// -----------------------------------------------------------------------------

function migrateAllImagesToImageKit() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(LISTINGS_SHEET_NAME);
  if (!sheet) {
    throw new Error('Sheet "' + LISTINGS_SHEET_NAME + '" not found. Set LISTINGS_SHEET_NAME to the correct tab name.');
  }

  Logger.log('Using sheet: ' + sheet.getName());
  const values = sheet.getDataRange().getValues();
  Logger.log('Row count (including header): ' + values.length);

  if (values.length < 2) {
    Logger.log('No data rows found – nothing to migrate.');
    return;
  }

  const headers = values[0].map(String);
  const findColumn = (aliases) =>
    headers.findIndex(h => aliases.some(a => h.trim().toLowerCase() === a)) + 1;

  const colName   = findColumn(['name', 'listing name', 'title']);
  const colImage1 = findColumn(['image 1', 'image1', 'image url 1', 'photo']);
  const colImage2 = findColumn(['image 2', 'image2', 'image url 2']);
  const colImage3 = findColumn(['image 3', 'image3', 'image url 3']);

  if (colName === 0 || colImage1 === 0) {
    throw new Error('Missing required columns ("Name", "Image 1") in sheet "' + sheet.getName() + '". Run listSheetHeaders() to confirm headers.');
  }

  for (let row = 2; row <= values.length; row++) {
    const name = sheet.getRange(row, colName).getValue();
    const baseFile = name ? name.toLowerCase().replace(/[^a-z0-9]+/g, '-') : 'listing-' + row;

    if (colImage1) {
      const original = sheet.getRange(row, colImage1).getValue();
      if (original && !String(original).startsWith('https://ik.imagekit.io/OE')) {
        const newUrl = tryUpload(original, baseFile + '-image1');
        setIfChanged(sheet, row, colImage1, newUrl);
        Logger.log('Row ' + row + ' image1 → ' + newUrl);
      }
    }
    if (colImage2) {
      const original = sheet.getRange(row, colImage2).getValue();
      if (original && !String(original).startsWith('https://ik.imagekit.io/OE')) {
        const newUrl = tryUpload(original, baseFile + '-image2');
        setIfChanged(sheet, row, colImage2, newUrl);
        Logger.log('Row ' + row + ' image2 → ' + newUrl);
      }
    }
    if (colImage3) {
      const original = sheet.getRange(row, colImage3).getValue();
      if (original && !String(original).startsWith('https://ik.imagekit.io/OE')) {
        const newUrl = tryUpload(original, baseFile + '-image3');
        setIfChanged(sheet, row, colImage3, newUrl);
        Logger.log('Row ' + row + ' image3 → ' + newUrl);
      }
    }

    SpreadsheetApp.flush();
    Utilities.sleep(500);
  }

  Logger.log('ImageKit migration complete!');
}

