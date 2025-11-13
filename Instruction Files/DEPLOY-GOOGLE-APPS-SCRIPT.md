# Deploy Google Apps Script for CORS (GitHub Pages)

## Critical: Web App Deployment Settings

For CORS to work from GitHub Pages (`https://odd-even.github.io`), you MUST configure the deployment correctly:

### Step-by-Step Deployment:

1. **Open your Google Apps Script project**
   - Go to script.google.com
   - Open your project

2. **Click "Deploy" → "Manage deployments"**

3. **Click the pencil (✏️) to edit your deployment** (or create a new one)

4. **Configure these settings:**
   - **Execute as**: `Me` (your email address)
   - **Who has access**: `Anyone` ⚠️ **MUST BE "Anyone" (not "Anyone with Google account")**

5. **Click "Deploy"**

6. **Copy the Web App URL** - this is your `GOOGLE_APPS_SCRIPT_URL`

## Why "Anyone" Access is Required:

- Google Apps Script automatically adds CORS headers (`Access-Control-Allow-Origin: *`) ONLY when deployed with "Anyone" access
- "Anyone with Google account" does NOT enable CORS for external origins like GitHub Pages
- Without "Anyone" access, GitHub Pages cannot make requests to your script

## Security Note:

The "Anyone" setting means anyone can call your script, but:
- They can only execute what you've coded in `doGet()` and `doPost()`
- Your API keys are stored securely in Script Properties (not exposed)
- The script only reads/writes your specific Google Sheet
- You control what actions are allowed (e.g., only `generateImageDescription`, no arbitrary code execution)

## Verify CORS is Working:

After deploying with "Anyone" access, test in browser console:

```javascript
fetch('YOUR_WEB_APP_URL?action=generateImageDescription&imageUrl=TEST')
  .then(r => r.json())
  .then(console.log)
  .catch(console.error)
```

If CORS is working, you'll get a JSON response. If not, you'll see a CORS error.

## Troubleshooting:

**Still getting CORS errors?**
1. Make sure you created a NEW deployment version (not just saved the script)
2. Verify "Who has access" is set to "Anyone" (exactly, case-sensitive)
3. Try creating a completely new deployment instead of editing the old one
4. Wait a few minutes for changes to propagate

**Script not found errors?**
- Make sure you're using the Web App URL (not the script editor URL)
- The URL should look like: `https://script.google.com/macros/s/.../exec`

