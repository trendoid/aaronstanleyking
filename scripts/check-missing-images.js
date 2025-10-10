const fs = require('fs');
const path = require('path');

const postsDirectory = path.join(__dirname, '../content/posts');

// Function to extract the first image from markdown content
function extractFirstImage(content) {
  const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/;
  const match = imageRegex.exec(content);
  return match ? match[2] : null;
}

// Read all post files
const postFiles = fs.readdirSync(postsDirectory).filter(file => file.endsWith('.md'));

console.log('Analyzing posts for missing images...\n');

const postsWithoutImages = [];
const postsWithImages = [];

postFiles.forEach(file => {
  const filePath = path.join(postsDirectory, file);
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Extract title from frontmatter
  const titleMatch = content.match(/title:\s*["']([^"']+)["']/);
  const title = titleMatch ? titleMatch[1] : file;
  
  const image = extractFirstImage(content);
  
  if (image) {
    postsWithImages.push({ file, title, image });
  } else {
    postsWithoutImages.push({ file, title });
  }
});

console.log(`📊 SUMMARY:`);
console.log(`Total posts: ${postFiles.length}`);
console.log(`Posts with images: ${postsWithImages.length}`);
console.log(`Posts missing images: ${postsWithoutImages.length}`);

console.log(`\n❌ POSTS MISSING IMAGES:`);
postsWithoutImages.forEach(post => {
  console.log(`- ${post.title} (${post.file})`);
});

console.log(`\n✅ POSTS WITH IMAGES:`);
postsWithImages.forEach(post => {
  console.log(`- ${post.title}`);
});