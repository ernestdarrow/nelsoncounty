# Google OAuth Setup Guide

## ✅ What's Been Implemented

Your admin panel now uses **Google OAuth** instead of password authentication. This provides:
- ✅ **Real security** - No passwords in code
- ✅ **Industry-standard authentication** - OAuth 2.0
- ✅ **Easy user management** - Just add emails to the authorized list
- ✅ **Google integration** - Works seamlessly with your Google Sheets setup

## 📋 Step-by-Step Setup Instructions

### Step 1: Create Google OAuth Credentials

1. **Go to Google Cloud Console**
   - Visit: https://console.cloud.google.com/
   - Sign in with your Google account

2. **Create or Select a Project**
   - Click the project dropdown at the top
   - Click "New Project" or select an existing project
   - Give it a name (e.g., "Nelson County Admin")

3. **Enable Google Identity API**
   - In the left sidebar, go to **APIs & Services** → **Library**
   - Search for "Google Identity Services API"
   - Click it and click **Enable**

4. **Create OAuth 2.0 Credentials**
   - Go to **APIs & Services** → **Credentials**
   - Click **+ CREATE CREDENTIALS** → **OAuth client ID**
   - If prompted, configure the OAuth consent screen:
     - User Type: **External** (for personal use) or **Internal** (for Google Workspace)
     - App name: "Nelson County Admin Panel"
     - User support email: Your email
     - Developer contact: Your email
     - Click **Save and Continue** through the scopes and test users screens
   
5. **Configure OAuth Client**
   - Application type: **Web application**
   - Name: "Admin Panel" (or any name)
   - **Authorized JavaScript origins:**
     - Add: `http://localhost` (for local testing)
     - Add: `https://yourdomain.com` (replace with your actual domain)
     - Add: `https://yourusername.github.io` (if using GitHub Pages)
   - **Authorized redirect URIs:**
     - Add the same URLs as above
   - Click **Create**

6. **Copy Your Client ID**
   - You'll see a popup with your Client ID
   - It looks like: `123456789-abcdefghijklmnop.apps.googleusercontent.com`
   - **Copy this value** - you'll need it in the next step

### Step 2: Configure Your Admin Panel

1. **Open `index-sheets.html`** in your code editor

2. **Find the OAuth Configuration** (around line 5337)
   ```javascript
   const GOOGLE_OAUTH_CLIENT_ID = 'YOUR_CLIENT_ID.apps.googleusercontent.com';
   ```

3. **Replace with Your Client ID**
   ```javascript
   const GOOGLE_OAUTH_CLIENT_ID = '123456789-abcdefghijklmnop.apps.googleusercontent.com';
   ```
   (Use your actual Client ID from Step 1)

4. **Configure Authorized Emails** (around line 5342)
   ```javascript
   const AUTHORIZED_EMAILS = [
       'ernest@oddplusevenstudio.com',
       // Add more authorized emails here
       'admin@example.com',
       'user@example.com',
   ];
   ```
   - Add all email addresses that should have access
   - Use the **exact** email address (case-sensitive)

### Step 3: Test Locally

1. **Open the admin panel** in your browser
   - For local testing, use a local server: `python3 -m http.server 8000`
   - Then open: `http://localhost:8000/index-sheets.html`

2. **Sign in with Google**
   - Click the "Sign in with Google" button
   - Select your authorized Google account
   - You should be logged in and see the admin panel

3. **Test Unauthorized Access**
   - Log out
   - Try signing in with a different Google account (not in the authorized list)
   - You should see "Access denied" message

### Step 4: Deploy to Production

1. **Update Authorized JavaScript Origins**
   - Go back to Google Cloud Console → Credentials
   - Edit your OAuth client
   - Add your production domain to "Authorized JavaScript origins"
   - Add your production domain to "Authorized redirect URIs"
   - Save

2. **Deploy Your Files**
   - Upload `index-sheets.html` to your hosting (GitHub Pages, Netlify, etc.)
   - Make sure the Client ID is set correctly in the deployed file

3. **Test on Production**
   - Visit your deployed admin panel
   - Sign in with Google
   - Verify it works correctly

## 🔒 Security Best Practices

### Option 1: Keep Emails in Code (Current Setup)
- ✅ Simple and works well
- ⚠️ Authorized emails are visible in the source code
- ✅ Good for small teams or trusted environments

### Option 2: Move Emails to Google Apps Script (Recommended for Production)
For better security, fetch authorized emails from your Google Apps Script:

1. **Add a function to your Apps Script:**
   ```javascript
   function doGetAuthorizedEmails() {
       const authorizedEmails = [
           'ernest@oddplusevenstudio.com',
           'admin@example.com',
       ];
       
       return ContentService
           .createTextOutput(JSON.stringify({emails: authorizedEmails}))
           .setMimeType(ContentService.MimeType.JSON);
   }
   ```

2. **Update your admin panel** to fetch emails on load:
   ```javascript
   let AUTHORIZED_EMAILS = [];
   
   async function loadAuthorizedEmails() {
       try {
           const response = await fetch('YOUR_APPS_SCRIPT_URL?action=getEmails');
           const data = await response.json();
           AUTHORIZED_EMAILS = data.emails;
       } catch (error) {
           console.error('Error loading authorized emails:', error);
           // Fallback to hardcoded list
           AUTHORIZED_EMAILS = ['ernest@oddplusevenstudio.com'];
       }
   }
   ```

## 🐛 Troubleshooting

### "Configuration Required" Error
- **Problem:** Client ID is still set to `YOUR_CLIENT_ID.apps.googleusercontent.com`
- **Solution:** Replace with your actual Client ID from Google Cloud Console

### "Access denied" Even with Authorized Email
- **Problem:** Email not in authorized list or typo
- **Solution:** 
  - Check the email address in the error message
  - Verify it matches exactly (including case) in `AUTHORIZED_EMAILS`
  - Add it to the list if missing

### "Error 400: redirect_uri_mismatch"
- **Problem:** Your domain isn't in authorized redirect URIs
- **Solution:**
  - Go to Google Cloud Console → Credentials
  - Edit your OAuth client
  - Add your exact domain (including `http://` or `https://`) to "Authorized redirect URIs"

### Sign-In Button Not Showing
- **Problem:** Google Identity Services script didn't load
- **Solution:**
  - Check browser console for errors
  - Verify you have internet connection
  - Check if any ad blockers are blocking Google scripts

### Works Locally but Not on Production
- **Problem:** Production domain not in authorized origins
- **Solution:**
  - Add your production domain to "Authorized JavaScript origins" in Google Cloud Console
  - Make sure you're using `https://` for production

## 📚 Additional Resources

- [Google Identity Services Documentation](https://developers.google.com/identity/gsi/web)
- [OAuth 2.0 Best Practices](https://oauth.net/2/)
- [Google Cloud Console](https://console.cloud.google.com/)

## ✅ Checklist

- [ ] Created Google Cloud project
- [ ] Enabled Google Identity Services API
- [ ] Created OAuth 2.0 Client ID
- [ ] Added authorized JavaScript origins
- [ ] Added authorized redirect URIs
- [ ] Updated `GOOGLE_OAUTH_CLIENT_ID` in code
- [ ] Added authorized emails to `AUTHORIZED_EMAILS`
- [ ] Tested locally
- [ ] Deployed to production
- [ ] Tested on production

---

**You're all set!** Your admin panel now uses secure Google OAuth authentication. 🎉

