import fs from 'fs';

['src/components/Products.jsx', 'src/components/Story.jsx'].forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  content = content.replace(/\.png/g, '.webp');
  fs.writeFileSync(f, content);
  console.log(`Updated ${f}`);
});
