const { getAllPosts } = require('./src/lib/blog.ts');

const posts = getAllPosts();

console.log('📊 IMAGE STATUS REPORT');
console.log('====================');

const withImages = posts.filter(p => p.image);
const withoutImages = posts.filter(p => !p.image);

console.log(`\n✅ POSTS WITH IMAGES (${withImages.length}):`);
withImages.forEach(post => {
  console.log(`- ${post.title}`);
  console.log(`  Image: ${post.image.substring(0, 80)}...`);
});

console.log(`\n❌ POSTS WITHOUT IMAGES (${withoutImages.length}):`);
withoutImages.forEach(post => {
  console.log(`- ${post.title} (${post.slug}.md)`);
});

console.log(`\n📈 SUMMARY:`);
console.log(`Total posts: ${posts.length}`);
console.log(`With images: ${withImages.length}`);
console.log(`Without images: ${withoutImages.length}`);