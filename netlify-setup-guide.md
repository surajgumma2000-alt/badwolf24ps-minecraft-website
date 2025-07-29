# Step-by-Step Netlify Deployment Guide for BadWolf24PS

## Prerequisites ✅ (Already Done)
- Your website is built and ready in the `dist/public` folder
- `netlify.toml` configuration file is created
- Static files are generated

## Step 1: Create Netlify Account

1. **Go to https://app.netlify.com/signup**
2. **Sign up options:**
   - Use GitHub account (recommended - easier deployment)
   - Use GitLab account
   - Use email address
3. **Choose GitHub** for easiest setup

## Step 2: Deploy Your Site

### Method A: Drag & Drop (Fastest)
1. Go to https://app.netlify.com/drop
2. Open your file manager and navigate to your project
3. Drag the entire `dist/public` folder to the drop zone
4. Wait for upload and deployment
5. Your site will be live at `https://random-name-123.netlify.app`

### Method B: GitHub Integration (Recommended)
1. **Push your code to GitHub first:**
   ```bash
   git add .
   git commit -m "Ready for Netlify deployment"
   git push origin main
   ```

2. **In Netlify Dashboard:**
   - Click "Add new site" → "Import an existing project"
   - Click "Deploy with GitHub"
   - Authorize Netlify to access your repositories
   - Select your repository

3. **Build Settings:**
   - Build command: `npm run build`
   - Publish directory: `dist/public`
   - Click "Deploy site"

## Step 3: Customize Your Site URL

1. **In your Netlify dashboard:**
   - Go to "Site settings" → "General"
   - Click "Change site name"
   - Enter: `badwolf24ps` (if available)
   - Your URL becomes: `https://badwolf24ps.netlify.app`

## Step 4: Set Up Forms (For Feedback)

1. **In Netlify dashboard:**
   - Go to "Forms" section
   - Your feedback form will automatically work
   - You'll receive email notifications when players submit feedback

## Step 5: Custom Domain (Optional - Free)

### Option A: Free EU.org Domain
1. **Register at https://nic.eu.org**
   - Request: `badwolf24ps.eu.org`
   - Wait for approval (1-2 days)

2. **In Netlify:**
   - Go to "Domain settings"
   - Click "Add custom domain"
   - Enter: `badwolf24ps.eu.org`
   - Follow DNS setup instructions

### Option B: Use Netlify Subdomain (Easiest)
- Keep using `badwolf24ps.netlify.app`
- Works immediately, no setup needed

## Step 6: Verify Everything Works

Visit your new website and check:
- ✅ Server information displays correctly
- ✅ Discord link works: `https://discord.gg/Cbvrq283`
- ✅ Server IP shows: `ip-badwolf24ps.aternos:57180`
- ✅ Feedback form submits properly
- ✅ Mobile-friendly design
- ✅ HTTPS certificate (secure padlock icon)

## Your Final URLs

**Development (current):** Your Replit workspace
**Production (new):** `https://badwolf24ps.netlify.app`
**Custom domain (optional):** `https://badwolf24ps.eu.org`

## Troubleshooting

**Build Failed?**
- Check build logs in Netlify dashboard
- Ensure `netlify.toml` is in root directory

**Forms Not Working?**
- Add `data-netlify="true"` to your form tag
- Forms are automatically detected on Netlify

**Site Not Loading?**
- Check publish directory is set to `dist/public`
- Verify `_redirects` file exists for single-page app

## Benefits You Get (Free)

✅ **100GB bandwidth/month**
✅ **Free SSL certificate**
✅ **Global CDN (fast worldwide)**
✅ **Form handling (100 submissions/month)**
✅ **Automatic deployments from GitHub**
✅ **Custom domain support**
✅ **Build previews for changes**

Your BadWolf24PS Minecraft server website will be live and accessible to players worldwide!