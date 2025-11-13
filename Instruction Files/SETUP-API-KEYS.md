# Setup Instructions: AI Image Description API Keys

To enable automatic AI-generated image descriptions, you need to configure an API key in Google Apps Script.

## Quick Setup (Recommended: Google Gemini - Free)

### Step 1: Get a Free Gemini API Key

1. Go to: https://aistudio.google.com/app/apikey
2. Sign in with your Google account
3. Click **"Create API Key"**
4. Copy the API key (starts with `AIza...`)

### Step 2: Add API Key to Google Apps Script

1. Open your Google Apps Script project
2. Click the **gear icon (⚙️)** in the left sidebar (Project Settings)
3. Scroll down to **"Script Properties"** section
4. Click **"Add script property"**
5. Enter:
   - **Property**: `GEMINI_API_KEY`
   - **Value**: Paste your Gemini API key
6. Click **"Save script properties"**

### Step 3: Deploy/Save the Script

1. Click **"Deploy"** → **"Manage deployments"** (or just save the script)
2. If you made changes, you may need to create a new deployment

## Alternative: OpenAI API Key

If you prefer to use OpenAI instead:

1. Go to: https://platform.openai.com/api-keys
2. Sign in or create an account
3. Click **"Create new secret key"**
4. Copy the API key (starts with `sk-...`)

Then in Google Apps Script:
1. Add a script property named `OPENAI_API_KEY`
2. Paste your OpenAI API key as the value

**Note**: OpenAI charges per API call (very affordable - usually $0.01-0.10 per image description). Gemini is free for most use cases.

## Verify Setup

After adding the API key:

1. Upload a test image in the admin panel
2. The description should automatically generate
3. If you see an error, check:
   - The API key is correctly spelled in Script Properties (`GEMINI_API_KEY` or `OPENAI_API_KEY`)
   - The API key is valid (not expired or revoked)
   - The script has been saved/redeployed

## Troubleshooting

**Error: "No AI API key configured"**
- Check that the property name is exactly `GEMINI_API_KEY` or `OPENAI_API_KEY` (case-sensitive)
- Make sure you saved the script property
- Try redeploying the script

**Error: "Gemini API error" or "OpenAI API error"**
- Verify your API key is valid
- For Gemini: Check that the API key hasn't been revoked
- For OpenAI: Check your account has credits/billing set up

**Description not generating**
- Check the browser console (F12) for detailed error messages
- Check Google Apps Script execution logs (Executions tab)
- Verify the image URL is accessible (public URL)

