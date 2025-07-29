# BadWolf24PS Website - Free Deployment Guide

## Option 1: Netlify (Recommended - Easiest)

### Step 1: Get Free Domain
1. Go to **https://eu.org** and register for a free subdomain like `badwolf24ps.eu.org`
2. Or use Netlify's free subdomain: `badwolf24ps.netlify.app`

### Step 2: Deploy to Netlify
1. Go to **https://netlify.com** and sign up (free account)
2. Click "Add new site" → "Import an existing project"  
3. Connect your GitHub account
4. Select this repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist/public`
6. Click "Deploy site"

### Step 3: Connect Custom Domain (Optional)
1. In Netlify dashboard, go to "Domain settings"
2. Add your custom domain (like `badwolf24ps.eu.org`)
3. Follow DNS setup instructions

**Your website will be live at:** `https://badwolf24ps.netlify.app`

## Option 2: GitHub Pages (Simple)

1. Push your code to GitHub repository
2. Go to repository Settings → Pages
3. Set source to "GitHub Actions"
4. Your site will be at: `https://yourusername.github.io/repository-name`

## Option 3: Vercel (Advanced)

1. Go to **https://vercel.com** and sign up
2. Import your GitHub repository
3. Deploy automatically
4. Get URL: `https://badwolf24ps.vercel.app`

## Free Domain Options

### Best Free Domains:
1. **EU.org** - `badwolf24ps.eu.org` (stable, long-term)
2. **Dot TK** - `badwolf24ps.tk` (less reliable)
3. **Use provided subdomain** - `badwolf24ps.netlify.app` (most reliable)

### Notes:
- The feedback form will work with Netlify's built-in form handling
- Server status will show static information (since no backend)
- Discord links and server info remain fully functional
- Website will be completely free and accessible worldwide

## What You Get:
✅ Free website hosting
✅ Free SSL certificate (HTTPS)
✅ Global CDN (fast loading worldwide)
✅ Custom domain support
✅ 100GB bandwidth per month
✅ Automatic deployments from GitHub

Choose **Netlify** for the easiest setup with the most features!