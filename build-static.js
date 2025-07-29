import { exec } from 'child_process';
import { promises as fs } from 'fs';
import path from 'path';

// Build the client for production
console.log('Building static site...');
exec('npm run build:client', async (error, stdout, stderr) => {
  if (error) {
    console.error('Build error:', error);
    return;
  }
  
  console.log('Build completed!');
  console.log('Static files generated in dist/public/');
  
  // Create a simple netlify.toml for deployment configuration
  const netlifyConfig = `[build]
  publish = "dist/public"
  
[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
`;

  await fs.writeFile('netlify.toml', netlifyConfig);
  console.log('Created netlify.toml configuration');
  
  console.log('\nNext steps:');
  console.log('1. Go to https://netlify.com and sign up');
  console.log('2. Connect your GitHub repository');
  console.log('3. Deploy your site and get a free .netlify.app domain');
  console.log('4. Optionally connect a custom domain from a free provider');
});