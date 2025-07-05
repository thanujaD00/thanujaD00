const fs = require('fs');
const path = require('path');

// Create dist/templates directory if it doesn't exist
const distTemplatesDir = path.join(__dirname, 'dist', 'templates');
if (!fs.existsSync(distTemplatesDir)) {
  fs.mkdirSync(distTemplatesDir, { recursive: true });
}

// Copy templates from src to dist
const srcTemplatesDir = path.join(__dirname, 'src', 'templates');
const templateFiles = ['contact-form.hbs', 'contact-confirmation.hbs'];

templateFiles.forEach(file => {
  const srcPath = path.join(srcTemplatesDir, file);
  const distPath = path.join(distTemplatesDir, file);
  
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, distPath);
    console.log(`Copied ${file} to dist/templates/`);
  } else {
    console.error(`Template file ${file} not found in src/templates/`);
  }
}); 