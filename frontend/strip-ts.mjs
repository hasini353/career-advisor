import fs from 'fs';
import path from 'path';
import { transformFileAsync } from '@babel/core';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const walkSync = function(dir, filelist) {
  const files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      filelist = walkSync(path.join(dir, file), filelist);
    }
    else {
      filelist.push(path.join(dir, file));
    }
  });
  return filelist;
};

const processFiles = async () => {
  const srcDir = path.join(__dirname, 'src');
  const files = walkSync(srcDir);
  
  for (const file of files) {
    if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.d.ts')) {
      // Don't process d.ts, just delete them
      if (file.endsWith('.d.ts')) {
        fs.unlinkSync(file);
        continue;
      }

      try {
        const result = await transformFileAsync(file, {
          plugins: [
            ['@babel/plugin-syntax-jsx'],
            ['@babel/plugin-transform-typescript', { isTSX: true }]
          ],
          retainLines: true,
        });
        
        if (result && result.code) {
          const newFile = file.replace(/\.tsx$/, '.jsx').replace(/\.ts$/, '.js');
          fs.writeFileSync(newFile, result.code);
          fs.unlinkSync(file); // delete old tsx/ts file
          console.log(`Transformed and renamed to ${newFile}`);
        }
      } catch (err) {
        console.error(`Error processing ${file}: ${err.message}`);
      }
    }
  }
};

processFiles();
