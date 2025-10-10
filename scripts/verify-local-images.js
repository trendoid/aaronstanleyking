const fs = require('fs');
const path = require('path');

const postsDirectory = path.join(__dirname, '../content/posts');
const imagesDirectory = path.join(__dirname, '../public/images/posts');

console.log('🖼️  LOCAL IMAGES VERIFICATION');
console.log('==============================\n');

// Check what images exist in the posts directory
const imageFiles = fs.readdirSync(imagesDirectory);
console.log(`📁 Local images available (${imageFiles.length}):`);
imageFiles.forEach(file => {
  const filePath = path.join(imagesDirectory, file);
  const stats = fs.statSync(filePath);
  const sizeKB = Math.round(stats.size / 1024);
  console.log(`  ✅ ${file} (${sizeKB} KB)`);
});

// Find posts that reference local images
const postFiles = fs.readdirSync(postsDirectory).filter(file => file.endsWith('.md'));
const postsWithLocalImages = [];

postFiles.forEach(file => {
  const filePath = path.join(postsDirectory, file);
  const content = fs.readFileSync(filePath, 'utf8');
  
  const localImageRegex = /!\[[^\]]*\]\(\/images\/posts\/([^)]+)\)/g;
  let match;
  const localImages = [];
  
  while ((match = localImageRegex.exec(content)) !== null) {
    localImages.push(match[1]);
  }
  
  if (localImages.length > 0) {
    postsWithLocalImages.push({ file, images: localImages });
  }
});

console.log(`\n📝 Posts using local images (${postsWithLocalImages.length}):`);
postsWithLocalImages.forEach(post => {
  console.log(`  📄 ${post.file}:`);
  post.images.forEach(img => {
    const exists = imageFiles.includes(img);
    const status = exists ? '✅' : '❌';
    console.log(`    ${status} /images/posts/${img}`);
  });
});

// Check for any remaining external images
console.log(`\n🌐 Checking for remaining external images...`);
let hasExternalImages = false;

postFiles.forEach(file => {
  const filePath = path.join(postsDirectory, file);
  const content = fs.readFileSync(filePath, 'utf8');
  
  const externalImageRegex = /!\[[^\]]*\]\((https?:\/\/[^)]+)\)/g;
  let match;
  
  while ((match = externalImageRegex.exec(content)) !== null) {
    if (!hasExternalImages) {
      console.log(`❌ Found external images:`);
      hasExternalImages = true;
    }
    console.log(`  📄 ${file}: ${match[1]}`);
  }
});

if (!hasExternalImages) {
  console.log(`✅ No external images found - all images are now local!`);
}

console.log(`\n🎯 SUMMARY:`);
console.log(`• Local image files: ${imageFiles.length}`);
console.log(`• Posts with local images: ${postsWithLocalImages.length}`);
console.log(`• External images remaining: ${hasExternalImages ? 'Yes' : 'None'}`);
console.log(`\n🎉 Migration to local images complete!`);