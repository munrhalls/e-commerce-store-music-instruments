const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const destDir = path.join(__dirname, 'dist');

fs.readdir(srcDir, (err, files) => {
  if (err) {
    console.error('Error reading source directory:', err);
    return;
  }

  files.forEach((file) => {
    if (file.endsWith('.graphql')) {
      const srcFile = path.join(srcDir, file);
      const destFile = path.join(destDir, file);

      fs.copyFile(srcFile, destFile, (err) => {
        if (err) {
          console.error(`Error copying file ${file}:`, err);
        } else {
          console.log(`${file} copied to dist`);
        }
      });
    }
  });
});
