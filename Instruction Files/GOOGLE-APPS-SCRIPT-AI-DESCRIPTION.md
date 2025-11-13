# Google Apps Script - AI Image Description Generator

## 📍 Where to Add the Code in Your Existing Script

### Step 1: Add the AI Description Function

Add this function **after** the `handleImageKitRequest` function (around line where that function ends):

```javascript
// -----------------------------------------------------------------------------
// AI Image Description Generation
// -----------------------------------------------------------------------------

function generateImageDescription(imageUrl) {
  try {
    // Get OpenAI API key from script properties
    const scriptProperties = PropertiesService.getScriptProperties();
    const openaiApiKey = scriptProperties.getProperty('OPENAI_API_KEY');
    
    if (!openaiApiKey) {
      throw new Error('OpenAI API key not configured. Please add OPENAI_API_KEY in Script Properties.');
    }
    
    // Call OpenAI API
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
        'Authorization': 'Bearer ' + openaiApiKey,
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
```

### Step 2: Update Your `doPost` Function

In your `doPost` function, **add this case** right after the `getImageKitUploadParams` check:

```javascript
function doPost(e) {
  try {
    // ... your existing code ...
    
    if (action === 'getImageKitUploadParams') {
      return handleImageKitRequest(data);
    }
    
    // ADD THIS NEW CASE HERE:
    if (action === 'generateImageDescription') {
      if (!data.imageUrl) {
        throw new Error('Missing "imageUrl" field for generateImageDescription action');
      }
      return generateImageDescription(data.imageUrl);
    }
    
    // ... rest of your existing code ...
```

### Step 3: Store OpenAI API Key

1. In Google Apps Script editor, go to **Project Settings** (gear icon in left sidebar)
2. Scroll down to **Script Properties**
3. Click **Add script property**
   - **Property**: `OPENAI_API_KEY`
   - **Value**: Your OpenAI API key (starts with `sk-...`)
4. Click **Save script properties**

---

## 📋 Complete Code Blocks to Add

### Block 1: Add after `handleImageKitRequest` function

```javascript
// -----------------------------------------------------------------------------
// AI Image Description Generation
// -----------------------------------------------------------------------------

function generateImageDescription(imageUrl) {
  try {
    const scriptProperties = PropertiesService.getScriptProperties();
    const openaiApiKey = scriptProperties.getProperty('OPENAI_API_KEY');
    
    if (!openaiApiKey) {
      throw new Error('OpenAI API key not configured. Please add OPENAI_API_KEY in Script Properties.');
    }
    
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
        'Authorization': 'Bearer ' + openaiApiKey,
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
```

### Block 2: Add in `doPost` function

Find this section in your `doPost` function:
```javascript
    if (action === 'getImageKitUploadParams') {
      return handleImageKitRequest(data);
    }
```

Add this right after it:
```javascript
    if (action === 'generateImageDescription') {
      if (!data.imageUrl) {
        throw new Error('Missing "imageUrl" field for generateImageDescription action');
      }
      return generateImageDescription(data.imageUrl);
    }
```

---

## ✅ Summary

1. **Add the `generateImageDescription` function** - Place it after your `handleImageKitRequest` function
2. **Update `doPost`** - Add the new action handler right after `getImageKitUploadParams`
3. **Set API key** - Add `OPENAI_API_KEY` in Script Properties

The function will automatically return:
```json
{
  "success": true,
  "description": "Generated description text..."
}
```

Or on error:
```json
{
  "success": false,
  "error": "Error message here"
}
```

## 🧪 Testing

After adding the code:
1. Save your script
2. Deploy as a new version (if you've deployed before)
3. Upload an image in your admin panel - the description should auto-generate!
