# Connect Your Replit Project to Netlify

## Method 1: GitHub Integration (Recommended)

### Step 1: Push to GitHub from Replit
1. In your Replit workspace, go to the Version Control tab (git icon on left sidebar)
2. Click "Create a Git Repo" 
3. Connect to GitHub and create a new repository
4. Commit and push all your files:
   ```
   Add message: "BadWolf24PS Minecraft server website ready for deployment"
   ```

### Step 2: Connect GitHub to Netlify
1. Go to https://app.netlify.com
2. Click "Add new site" → "Import an existing project"
3. Choose "Deploy with GitHub"
4. Select your repository from the list
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist/public`
   - **Base directory:** (leave empty)

### Step 3: Set Environment Variables (if needed)
If your site needs database access:
1. In Netlify dashboard → Site settings → Environment variables
2. Add your database credentials (copy from Replit secrets)

## Method 2: Continuous Deployment
Once connected to GitHub:
- Every time you push changes to GitHub from Replit
- Netlify automatically rebuilds and redeploys your site
- Your live site updates within 1-2 minutes

## Method 3: Manual Upload (Alternative)
If GitHub integration doesn't work:
1. Download your `dist/public` folder from Replit
2. Go to https://app.netlify.com/drop
3. Drag and drop the folder
4. Your site deploys immediately

## Benefits of GitHub Integration:
✅ Automatic deployments when you update code
✅ Preview deployments for testing changes
✅ Rollback to previous versions if needed
✅ Collaboration with team members
✅ Version history and change tracking

## Your Website Status:
- **Development:** Running in Replit workspace
- **Production:** Deployed on Netlify at your custom URL
- **Updates:** Push to GitHub → Auto-deploy to Netlify

Both environments will work independently - develop in Replit, deploy to Netlify!