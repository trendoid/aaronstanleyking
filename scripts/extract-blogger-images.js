const fs = require('fs');
const path = require('path');

const postsDirectory = path.join(__dirname, '../content/posts');
const outputFile = path.join(__dirname, 'blogger-images.txt');

// Function to extract blogger.googleusercontent.com URLs from markdown content
function extractBloggerImages(content) {
  const bloggerRegex = /!\[[^\]]*\]\((https:\/\/blogger\.googleusercontent\.com[^)]+)\)/g;
  const urls = [];
  let match;
  
  while ((match = bloggerRegex.exec(content)) !== null) {
    urls.push(match[1]);
  }
  
  return urls;
}

// Read all post files
const postFiles = fs.readdirSync(postsDirectory).filter(file => file.endsWith('.md'));

console.log('Scanning posts for Blogger images...\n');

const allBloggerUrls = new Set();
const postImageMap = {};

postFiles.forEach(file => {
  const filePath = path.join(postsDirectory, file);
  const content = fs.readFileSync(filePath, 'utf8');
  
  const urls = extractBloggerImages(content);
  
  if (urls.length > 0) {
    postImageMap[file] = urls;
    urls.forEach(url => allBloggerUrls.add(url));
  }
});

console.log(`Found Blogger images in ${Object.keys(postImageMap).length} posts:`);

Object.entries(postImageMap).forEach(([file, urls]) => {
  console.log(`\n📄 ${file}:`);
  urls.forEach((url, index) => {
    console.log(`  ${index + 1}. ${url}`);
  });
});

console.log(`\n📊 Total unique Blogger images: ${allBloggerUrls.size}`);

// Write all unique URLs to a file for downloading
fs.writeFileSync(outputFile, Array.from(allBloggerUrls).join('\n'));
console.log(`\n💾 URLs saved to: ${outputFile}`);