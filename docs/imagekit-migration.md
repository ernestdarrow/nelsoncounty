# ImageKit Migration & Upload Guide

This document explains how to migrate every listing image in the Nelson County admin panel to ImageKit, and how to re‑run the migration whenever new rows are added.

---

## 1. Prerequisites

| Item | Value |
| --- | --- |
| Sheet tab name | `Nelson County` |
| Script property `IMAGEKIT_PRIVATE_KEY` | *(your ImageKit private key)* |
| Script property `IMAGEKIT_UPLOAD_FOLDER` *(optional)* | `/nelson-county/listings` |
| ImageKit public key | `public_bEXbACd1Av+LMd7EASiu/x25f4o=` |
| ImageKit URL endpoint | `https://ik.imagekit.io/OE` |

> Script properties are managed in Apps Script → Project settings → Script properties.

---

## 2. Google Apps Script Snapshot

Open the Google Sheet → **Extensions → Apps Script**, remove old code, and paste the full script below. Save before running anything.

```javascript
/**
 * Nelson County Admin Panel – Google Apps Script
 */

const LISTINGS_SHEET_NAME = 'Nelson County';

// ---------- ImageKit helpers ----------

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

// ---------- CORS + GET ----------

function doOptions(e) {
  return ContentService.createTextOutput('').setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  try {
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

// ---------- POST handler ----------

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
      throw new Error('Invalid JSON data: ' + parseError.toString());
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
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ---------- Sheet CRUD helpers ----------

/* ... keep existing getData / saveListing / replaceAllListings / deleteListing implementations ... */

// ---------- ImageKit signing endpoint ----------

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

// ---------- One-time migration ----------

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
```

> ⚠️ The `/* … */` sections indicate where you can keep your existing implementations for `getData`, `saveListing`, etc. (paste them in unchanged from your current script).

---

## 3. Running the Migration

1. Save the script (`Ctrl/Cmd + S`).
2. Choose `migrateAllImagesToImageKit` in the function dropdown and click **Run**.
3. Authorize if prompted (first run needs `UrlFetchApp`).
4. Open **View → Logs** to confirm uploads (look for the “Row … image → …” messages).
5. Visit ImageKit → Media Library to verify the new assets.

---

## 4. Rerunning Later

Anytime new listings come in via CSV, run the migration again. URLs already hosted on ImageKit are skipped automatically, so reruns are safe.

---

## 5. Troubleshooting

| Symptom | Fix |
| --- | --- |
| `Sheet "Nelson County" not found` | Update `LISTINGS_SHEET_NAME` to match the tab name. |
| `Missing required columns` | Run `listSheetHeaders()` and adjust the aliases in `findColumn`. |
| `ImageKit upload failed` / `Address unavailable` | Script retries three times. Rerun if a transient error occurs; check logs for the row that failed. |
| Admin upload buttons break | Redeploy the web app (Deploy → Manage deployments → edit → Deploy). |

---

## 6. Quick Checklist

- [ ] Script properties include ImageKit private key (and optional folder).
- [ ] Latest script pasted into Apps Script and saved.
- [ ] Web app re-deployed after changes.
- [ ] `migrateAllImagesToImageKit` run with no errors.
- [ ] ImageKit Media Library contains all listing images.
- [ ] Admin panel “Upload” buttons tested for new listings.

---

Keep this file updated with any tweaks (e.g., new folders, alternate endpoints, notes on throttling). Save a copy before editing if you prefer version control.

