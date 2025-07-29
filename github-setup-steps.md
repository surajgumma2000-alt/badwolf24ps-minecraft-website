# GitHub Integration Setup

## Step 1: Connect Replit to GitHub

1. **In your Replit workspace:**
   - Look for the Version Control icon (git branch symbol) in the left sidebar
   - Click on it to open the Git panel
   - If you see "Create a Git Repo", click it
   - If you see "Connect to GitHub", click that instead

2. **Create Repository:**
   - Repository name: `badwolf24ps-minecraft-website`
   - Description: `BadWolf24PS Minecraft Server Community Website`
   - Make it Public (so Netlify can access it)
   - Click "Create Repository"

3. **Initial Commit:**
   - Add commit message: `Initial commit - BadWolf24PS website ready for deployment`
   - Click "Commit & Push"
   - All your files will be uploaded to GitHub

## Step 2: Connect GitHub to Netlify

1. **Go to your Netlify dashboard** (https://app.netlify.com)
2. **Click "Add new site"** → **"Import an existing project"**
3. **Choose "Deploy with GitHub"**
4. **Authorize Netlify** to access your GitHub repositories
5. **Select your repository** from the list: `badwolf24ps-minecraft-website`

## Step 3: Configure Build Settings

**Build Configuration:**
- **Build command:** `npm run build`
- **Publish directory:** `dist/public`
- **Base directory:** (leave empty)

**Advanced Settings (Optional):**
- **Environment variables:** Add any secrets if needed
- **Node version:** 18 (automatic)

6. **Click "Deploy Site"**

## Step 4: Customize Your URL

1. **After deployment completes:**
   - Go to "Site settings" → "General"
   - Click "Change site name"
   - Enter: `badwolf24ps` (if available)
   - Your URL becomes: `https://badwolf24ps.netlify.app`

## What Happens Next:

✅ **Automatic Deployments:** Every time you push changes from Replit to GitHub, Netlify automatically rebuilds and redeploys your site

✅ **Live Website:** Your site will be accessible at your custom Netlify URL

✅ **Form Handling:** Player feedback forms will automatically work with Netlify's form processing

✅ **SSL Certificate:** Automatic HTTPS security

## Workflow:
1. **Develop** in Replit workspace
2. **Commit & Push** to GitHub when ready
3. **Auto-Deploy** to Netlify within 2 minutes
4. **Live Site** updates automatically

Your BadWolf24PS website will be live with continuous deployment!