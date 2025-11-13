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
  // Handle CORS preflight requests
  // Google Apps Script automatically handles CORS when deployed with "Anyone" access
  // Just return empty response - Google will add CORS headers automatically
  return ContentService
    .createTextOutput('')
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  try {
    // Handle ImageKit upload params
    if (e && e.parameter && e.parameter.action === 'getImageKitUploadParams') {
      return ContentService
        .createTextOutput(JSON.stringify({
          success: true,
          data: getImageKitUploadParams()
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Handle AI image description generation via GET
    if (e && e.parameter && e.parameter.action === 'generateImageDescription') {
      const imageUrl = e.parameter.imageUrl;
      if (!imageUrl) {
        return ContentService
          .createTextOutput(JSON.stringify({
            success: false,
            error: 'Missing "imageUrl" parameter'
          }))
          .setMimeType(ContentService.MimeType.JSON)
      }
      // Google Apps Script automatically adds CORS headers when deployed with "Anyone" access
      return generateImageDescription(imageUrl);
    }
    
    // Handle ImageKit metadata update via GET
    if (e && e.parameter && e.parameter.action === 'updateImageKitMetadata') {
      // Prefer fileId if provided (faster and more reliable than searching by path)
      const fileId = e.parameter.fileId || null;
      const filePath = e.parameter.filePath || null;
      
      if (!fileId && !filePath) {
        return ContentService
          .createTextOutput(JSON.stringify({
            success: false,
            error: 'Missing "filePath" or "fileId" parameter'
          }))
          .setMimeType(ContentService.MimeType.JSON)
      }
      
      let customMetadata;
      try {
        customMetadata = JSON.parse(e.parameter.customMetadata || '{}');
      } catch (parseError) {
        customMetadata = { description: e.parameter.customMetadata || '' };
      }
      
      // Use fileId if provided, otherwise use filePath (which will trigger a search)
      const filePathOrId = fileId || filePath;
      // Google Apps Script automatically adds CORS headers when deployed with "Anyone" access
      return updateImageKitFileMetadata(filePathOrId, customMetadata, e.parameter.imageUrl);
    }

    // Default: return listings data
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const result = getData(sheet);
    return ContentService
      .createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
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
      const response = handleImageKitRequest(data);
      // Ensure CORS headers are set
      return ContentService
        .createTextOutput(response.getContent())
        .setMimeType(response.getMimeType())
    }

    // Handle AI image description generation
    if (action === 'generateImageDescription') {
      if (!data.imageUrl) {
        throw new Error('Missing "imageUrl" field for generateImageDescription action');
      }
      const response = generateImageDescription(data.imageUrl);
      // Ensure CORS headers are set
      return ContentService
        .createTextOutput(response.getContent())
        .setMimeType(response.getMimeType())
    }

    // Handle ImageKit metadata update
    if (action === 'updateImageKitMetadata') {
      if (!data.filePath && !data.fileId) {
        throw new Error('Missing "filePath" or "fileId" field for updateImageKitMetadata action');
      }
      if (!data.customMetadata) {
        throw new Error('Missing "customMetadata" field for updateImageKitMetadata action');
      }
      const response = updateImageKitFileMetadata(data.filePath || data.fileId, data.customMetadata, data.imageUrl);
      // Ensure CORS headers are set
      return ContentService
        .createTextOutput(response.getContent())
        .setMimeType(response.getMimeType())
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

    return ContentService
      .createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON)

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        error: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON)
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
    .setMimeType(ContentService.MimeType.JSON)
}

// -----------------------------------------------------------------------------
// AI Image Description Generation
// -----------------------------------------------------------------------------

function generateImageDescription(imageUrl) {
  try {
    const scriptProperties = PropertiesService.getScriptProperties();
    
    // Debug: Log all script properties (without values for security)
    const allProps = scriptProperties.getProperties();
    const propKeys = Object.keys(allProps);
    Logger.log('Available script properties: ' + propKeys.join(', '));
    
    // Try Google Gemini first (default, free tier available)
    const geminiApiKey = scriptProperties.getProperty('GEMINI_API_KEY');
    Logger.log('GEMINI_API_KEY found: ' + (geminiApiKey ? 'Yes (length: ' + geminiApiKey.length + ')' : 'No'));
    
    if (geminiApiKey && geminiApiKey.trim()) {
      Logger.log('Using Gemini API for description generation');
      return generateImageDescriptionWithGemini(imageUrl, geminiApiKey);
    }
    
    // Fallback to OpenAI (if API key is set)
    const openaiApiKey = scriptProperties.getProperty('OPENAI_API_KEY');
    Logger.log('OPENAI_API_KEY found: ' + (openaiApiKey ? 'Yes' : 'No'));
    
    if (openaiApiKey && openaiApiKey.trim()) {
      Logger.log('Using OpenAI API for description generation');
      return generateImageDescriptionWithOpenAI(imageUrl, openaiApiKey);
    }
    
    // If neither API key is configured, return error with helpful message
    const errorMsg = 'No AI API key configured. Please add GEMINI_API_KEY (recommended, free) or OPENAI_API_KEY in Script Properties. Available properties: ' + propKeys.join(', ') + '. Get a free Gemini key at: https://aistudio.google.com/app/apikey';
    Logger.log('ERROR: ' + errorMsg);
    throw new Error(errorMsg);
    
  } catch (error) {
    Logger.log('Error generating image description: ' + error.toString());
    Logger.log('Error stack: ' + (error.stack || 'N/A'));
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
  // Use Gemini 2.5 models (newer, better support)
  // Try these models in order:
  // 1. gemini-2.5-flash (fastest, free tier, supports vision)
  // 2. gemini-2.5-flash-preview (latest preview)
  // 3. gemini-2.5-pro-preview (more capable)
  // 4. Fallback to gemini-1.5-flash (if 2.5 models unavailable)
  
  let url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=' + apiKey;
  
  const payload = {
    'contents': [
      {
        'parts': [
          {
            'text': 'Describe this image in detail for use as an alt text or meta description. Keep it concise (50-150 words), descriptive, and SEO-friendly. Focus on what is visible in the image.'
          },
          {
            'inline_data': {
              'mime_type': detectImageMimeType(imageUrl),
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
  
  // Try the request
  const options = {
    'method': 'post',
    'headers': {
      'Content-Type': 'application/json'
    },
    'payload': JSON.stringify(payload),
    'muteHttpExceptions': true
  };
  
  let response = UrlFetchApp.fetch(url, options);
  let status = response.getResponseCode();
  
  // If 404, try gemini-2.5-flash-preview (latest preview)
  if (status === 404) {
    Logger.log('gemini-2.5-flash not available, trying gemini-2.5-flash-preview...');
    url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=' + apiKey;
    response = UrlFetchApp.fetch(url, options);
    status = response.getResponseCode();
  }
  
  // If still 404, try gemini-2.5-pro-preview (more capable)
  if (status === 404) {
    Logger.log('gemini-2.5-flash-preview not available, trying gemini-2.5-pro-preview...');
    url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro-preview-03-25:generateContent?key=' + apiKey;
    response = UrlFetchApp.fetch(url, options);
    status = response.getResponseCode();
  }
  
  // If still 404, fallback to gemini-1.5-flash (older but stable)
  if (status === 404) {
    Logger.log('Gemini 2.5 models not available, trying gemini-1.5-flash...');
    url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=' + apiKey;
    response = UrlFetchApp.fetch(url, options);
    status = response.getResponseCode();
  }
  
  if (status >= 200 && status < 300) {
    const responseData = JSON.parse(response.getContentText());
    
    if (responseData.candidates && responseData.candidates[0] && responseData.candidates[0].content && responseData.candidates[0].content.parts) {
      const description = responseData.candidates[0].content.parts[0].text.trim();
      
      Logger.log('Gemini description generated successfully, length: ' + description.length);
      return ContentService
        .createTextOutput(JSON.stringify({
          success: true,
          description: description
        }))
        .setMimeType(ContentService.MimeType.JSON);
    } else {
      Logger.log('Unexpected response format: ' + JSON.stringify(responseData));
      throw new Error('Unexpected response format from Gemini API: ' + JSON.stringify(responseData).substring(0, 200));
    }
  } else {
    const errorText = response.getContentText();
    Logger.log('Gemini API error (' + status + '): ' + errorText);
    
    // If all models failed, provide helpful error message
    if (status === 404) {
      throw new Error('Gemini API: No vision models available. Your API key may need the Generative Language API enabled in Google Cloud Console. Visit: https://console.cloud.google.com/apis/library/generativelanguage.googleapis.com');
    }
    
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

function detectImageMimeType(imageUrl) {
  // Detect MIME type from URL or default to image/jpeg
  const urlLower = imageUrl.toLowerCase();
  if (urlLower.includes('.png')) return 'image/png';
  if (urlLower.includes('.webp')) return 'image/webp';
  if (urlLower.includes('.gif')) return 'image/gif';
  if (urlLower.includes('.jpg') || urlLower.includes('.jpeg')) return 'image/jpeg';
  return 'image/jpeg'; // Default
}

// -----------------------------------------------------------------------------
// ImageKit Metadata Update
// -----------------------------------------------------------------------------

function updateImageKitFileMetadata(filePathOrId, customMetadata, imageUrl) {
  try {
    Logger.log('=== updateImageKitFileMetadata called ===');
    Logger.log('filePathOrId: ' + filePathOrId);
    Logger.log('customMetadata: ' + JSON.stringify(customMetadata));
    Logger.log('imageUrl: ' + (imageUrl || 'not provided'));
    
    const scriptProperties = PropertiesService.getScriptProperties();
    const privateKey = scriptProperties.getProperty('IMAGEKIT_PRIVATE_KEY');
    
    if (!privateKey) {
      throw new Error('IMAGEKIT_PRIVATE_KEY not configured in Script Properties.');
    }
    
    // First, check if we already have a valid fileId (not a path)
    // ImageKit requires fileId for updating metadata
    let fileId = null;
    
    // If filePathOrId doesn't start with /, assume it's already a fileId
    if (!filePathOrId.startsWith('/')) {
      fileId = filePathOrId;
      Logger.log('Using provided fileId directly: ' + fileId);
    }
    
    // If it looks like a file path (starts with /), search for the file by path
    if (filePathOrId.startsWith('/')) {
      Logger.log('Searching for file by path: ' + filePathOrId);
      
      // ImageKit API: List files and search by path
      // Try multiple approaches to find the file
      
      // Approach 1: Search using the path query parameter
      const searchUrl = 'https://api.imagekit.io/v1/files';
      const searchOptions = {
        method: 'get',
        headers: {
          'Authorization': 'Basic ' + Utilities.base64Encode(privateKey + ':')
        },
        muteHttpExceptions: true
      };
      
      // Search for files with this exact path
      const searchParams = '?path=' + encodeURIComponent(filePathOrId);
      const fullSearchUrl = searchUrl + searchParams;
      Logger.log('Search URL: ' + fullSearchUrl);
      
      const searchResponse = UrlFetchApp.fetch(fullSearchUrl, searchOptions);
      const searchStatus = searchResponse.getResponseCode();
      const searchText = searchResponse.getContentText();
      
      Logger.log('Search response status: ' + searchStatus);
      Logger.log('Search response: ' + searchText.substring(0, 500));
      
      if (searchStatus >= 200 && searchStatus < 300) {
        try {
          const searchResult = JSON.parse(searchText);
          Logger.log('Search result type: ' + typeof searchResult);
          Logger.log('Search result is array: ' + Array.isArray(searchResult));
          
          // ImageKit returns an object with a 'files' array, not a direct array
          let files = [];
          if (Array.isArray(searchResult)) {
            files = searchResult;
          } else if (searchResult && Array.isArray(searchResult.files)) {
            files = searchResult.files;
          } else if (searchResult && searchResult.fileId) {
            // Single file object
            fileId = searchResult.fileId;
            Logger.log('Found fileId from search (single object): ' + fileId);
          }
          
          // Look through the files array for a matching path
          if (files.length > 0) {
            Logger.log('Found ' + files.length + ' file(s) in search result');
            for (let i = 0; i < files.length; i++) {
              const file = files[i];
              Logger.log('File ' + i + ' path: ' + file.filePath + ', fileId: ' + file.fileId);
              if (file.filePath === filePathOrId || file.filePath === filePathOrId.substring(1)) {
                fileId = file.fileId;
                Logger.log('✅ Found matching fileId: ' + fileId);
                break;
              }
            }
            
            // If no exact match, use the first file (might be the one we want)
            if (!fileId && files[0] && files[0].fileId) {
              fileId = files[0].fileId;
              Logger.log('Using first file from search result: ' + fileId);
            }
          }
          
          if (!fileId) {
            Logger.log('⚠️ No fileId found in search result');
          }
        } catch (parseError) {
          Logger.log('Error parsing search result: ' + parseError.toString());
        }
      } else {
        Logger.log('⚠️ Search failed with status ' + searchStatus);
        Logger.log('Error response: ' + searchText);
      }
      
      // If we still don't have a fileId, we can't proceed
      if (!fileId) {
        throw new Error('Could not find file by path: ' + filePathOrId + '. ImageKit search returned status: ' + searchStatus);
      }
    }
    
    if (!fileId) {
      throw new Error('No fileId available. Cannot proceed with metadata update.');
    }
    
    Logger.log('Using fileId: ' + fileId);
    
    // Get current file details - but first, verify fileId looks valid
    // ImageKit fileIds are typically alphanumeric strings
    if (fileId.includes('/') && fileId.startsWith('/')) {
      // Still looks like a path, not a fileId - this won't work
      throw new Error('Invalid fileId format (still looks like a path): ' + fileId + '. File path search may have failed.');
    }
    
    const getUrl = 'https://api.imagekit.io/v1/files/' + encodeURIComponent(fileId) + '/details';
    Logger.log('Getting file details from: ' + getUrl);
    
    const getOptions = {
      method: 'get',
      headers: {
        'Authorization': 'Basic ' + Utilities.base64Encode(privateKey + ':')
      },
      muteHttpExceptions: true
    };
    
    const getResponse = UrlFetchApp.fetch(getUrl, getOptions);
    const getStatus = getResponse.getResponseCode();
    const getText = getResponse.getContentText();
    
    Logger.log('Get file details status: ' + getStatus);
    Logger.log('Get file details response: ' + getText.substring(0, 500));
    
    if (getStatus < 200 || getStatus >= 300) {
      const errorText = getText;
      Logger.log('❌ Failed to get file details. Status: ' + getStatus + ', Error: ' + errorText);
      
      // If 500 error, it might be an ImageKit internal issue, but also might be invalid fileId
      if (getStatus === 500) {
        throw new Error('ImageKit server error (500). This may indicate an invalid fileId. Original path: ' + filePathOrId + ', Derived fileId: ' + fileId + '. Try re-uploading the image or contact ImageKit support.');
      }
      
      throw new Error('Failed to get file details: ' + getStatus + ' - ' + errorText);
    }
    
    let fileDetails;
    try {
      fileDetails = JSON.parse(getText);
    } catch (parseError) {
      Logger.log('❌ Failed to parse file details response: ' + parseError.toString());
      throw new Error('Invalid JSON response from ImageKit: ' + getText.substring(0, 200));
    }
    
    // Get the actual fileId from the response (should be the same, but verify)
    if (fileDetails.fileId && fileDetails.fileId !== fileId) {
      Logger.log('⚠️ fileId mismatch. Expected: ' + fileId + ', Got: ' + fileDetails.fileId);
      fileId = fileDetails.fileId;
      Logger.log('Updated fileId from file details: ' + fileId);
    }
    
    Logger.log('Current file details:');
    Logger.log('  - description: ' + (fileDetails.description || 'not set'));
    Logger.log('  - customMetadata: ' + JSON.stringify(fileDetails.customMetadata || {}));
    
    // Build the update payload
    // ImageKit has a standard "description" field in addition to customMetadata
    const updatePayload = {};
    
    // If customMetadata contains a description, use it for the standard description field
    // and also keep it in customMetadata for backwards compatibility
    if (customMetadata && customMetadata.description) {
      updatePayload.description = customMetadata.description;
      Logger.log('Setting standard description field: ' + customMetadata.description.substring(0, 100) + '...');
    }
    
    // Merge existing customMetadata with new values
    const existingMetadata = fileDetails.customMetadata || {};
    const updatedMetadata = Object.assign({}, existingMetadata, customMetadata);
    
    // Only include customMetadata if it has values (or if we want to preserve existing)
    if (Object.keys(updatedMetadata).length > 0) {
      updatePayload.customMetadata = updatedMetadata;
    }
    
    Logger.log('Update payload: ' + JSON.stringify(updatePayload));
    
    // Update metadata using PATCH
    const patchUrl = 'https://api.imagekit.io/v1/files/' + encodeURIComponent(fileId) + '/details';
    Logger.log('Patching file metadata at: ' + patchUrl);
    
    const patchOptions = {
      method: 'patch',
      headers: {
        'Authorization': 'Basic ' + Utilities.base64Encode(privateKey + ':'),
        'Content-Type': 'application/json'
      },
      payload: JSON.stringify(updatePayload),
      muteHttpExceptions: true
    };
    
    Logger.log('PATCH payload: ' + JSON.stringify(updatePayload));
    
    const patchResponse = UrlFetchApp.fetch(patchUrl, patchOptions);
    const patchStatus = patchResponse.getResponseCode();
    const patchText = patchResponse.getContentText();
    
    Logger.log('PATCH response status: ' + patchStatus);
    Logger.log('PATCH response: ' + patchText.substring(0, 500));
    
    if (patchStatus >= 200 && patchStatus < 300) {
      Logger.log('✅ ImageKit metadata updated successfully');
      return ContentService
        .createTextOutput(JSON.stringify({
          success: true,
          message: 'ImageKit metadata updated successfully',
          fileId: fileId
        }))
        .setMimeType(ContentService.MimeType.JSON);
    } else {
      const errorText = patchText;
      Logger.log('❌ Failed to update ImageKit metadata. Status: ' + patchStatus + ', Error: ' + errorText);
      throw new Error('Failed to update ImageKit metadata: ' + patchStatus + ' - ' + errorText);
    }
    
  } catch (error) {
    Logger.log('❌ Error updating ImageKit metadata: ' + error.toString());
    Logger.log('Error stack: ' + (error.stack || 'no stack trace'));
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// -----------------------------------------------------------------------------
// Test Function: Check API Key Configuration
// -----------------------------------------------------------------------------

function testApiKeyConfiguration() {
  const scriptProperties = PropertiesService.getScriptProperties();
  const allProps = scriptProperties.getProperties();
  const propKeys = Object.keys(allProps);
  
  Logger.log('=== API KEY CONFIGURATION TEST ===');
  Logger.log('All Script Properties: ' + propKeys.join(', '));
  
  const geminiKey = scriptProperties.getProperty('GEMINI_API_KEY');
  const openaiKey = scriptProperties.getProperty('OPENAI_API_KEY');
  
  Logger.log('');
  Logger.log('GEMINI_API_KEY: ' + (geminiKey ? '✅ FOUND (length: ' + geminiKey.length + ', starts with: ' + geminiKey.substring(0, 5) + '...)' : '❌ NOT FOUND'));
  Logger.log('OPENAI_API_KEY: ' + (openaiKey ? '✅ FOUND' : '❌ NOT FOUND'));
  
  if (!geminiKey && !openaiKey) {
    Logger.log('');
    Logger.log('⚠️ ERROR: No API keys found!');
    Logger.log('Please add GEMINI_API_KEY or OPENAI_API_KEY in Script Properties:');
    Logger.log('1. Click the gear icon (⚙️) → Project Settings');
    Logger.log('2. Scroll to "Script Properties"');
    Logger.log('3. Click "Add script property"');
    Logger.log('4. Property: GEMINI_API_KEY');
    Logger.log('5. Value: Your Gemini API key (starts with AIza...)');
    Logger.log('6. Save');
  } else {
    Logger.log('');
    Logger.log('✅ API key configuration looks good!');
    
    // If Gemini key found, test if it can access models
    if (geminiKey) {
      Logger.log('');
      Logger.log('Testing Gemini API access...');
      try {
        const testUrl = 'https://generativelanguage.googleapis.com/v1beta/models?key=' + geminiKey;
        const testResponse = UrlFetchApp.fetch(testUrl, { muteHttpExceptions: true });
        const testStatus = testResponse.getResponseCode();
        
        if (testStatus === 200) {
          const models = JSON.parse(testResponse.getContentText());
          Logger.log('✅ Gemini API accessible! Available models: ' + (models.models ? models.models.length : 0));
          if (models.models && models.models.length > 0) {
            const modelNames = models.models.map(function(m) { return m.name; }).slice(0, 5);
            Logger.log('Sample models: ' + modelNames.join(', '));
          }
        } else {
          Logger.log('⚠️ Gemini API test failed with status: ' + testStatus);
          Logger.log('Response: ' + testResponse.getContentText().substring(0, 200));
          Logger.log('');
          Logger.log('⚠️ IMPORTANT: The Generative Language API may not be enabled!');
          Logger.log('Enable it here: https://console.cloud.google.com/apis/library/generativelanguage.googleapis.com');
        }
      } catch (testError) {
        Logger.log('⚠️ Error testing Gemini API: ' + testError.toString());
      }
    }
  }
  
  return {
    geminiKey: geminiKey ? 'Found' : 'Not found',
    openaiKey: openaiKey ? 'Found' : 'Not found',
    allProperties: propKeys
  };
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

