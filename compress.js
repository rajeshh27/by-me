import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const dir = 'public/images';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.png') || f.endsWith('.jpg') || f.endsWith('.jpeg'));

async function compressImages() {
  for (const file of files) {
    const filePath = path.join(dir, file);
    const fileNameWithoutExt = path.parse(file).name;
    const webpPath = path.join(dir, `${fileNameWithoutExt}.webp`);
    
    console.log(`Compressing ${file} to ${fileNameWithoutExt}.webp...`);
    
    await sharp(filePath)
      .resize(800) // Resize width to 800px max
      .webp({ quality: 75 }) // Convert to webp with 75% quality
      .toFile(webpPath);
      
    // Delete the original file
    fs.unlinkSync(filePath);
    console.log(`Finished ${fileNameWithoutExt}.webp`);
  }
  console.log("All images compressed successfully!");
}

compressImages().catch(console.error);
