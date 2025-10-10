const { getAllPosts } = require('./src/lib/blog.ts');

const posts = getAllPosts();
const withImages = posts.filter(p => p.image);
const withoutImages = posts.filter(p => !p.image);

console.log('🎉 IMAGE FIX COMPLETE!');
console.log('===================');
console.log(`📊 Total posts: ${posts.length}`);
console.log(`✅ Posts with images: ${withImages.length}`);
console.log(`❌ Posts without images: ${withoutImages.length}`);

if (withoutImages.length === 0) {
  console.log('\n🎊 SUCCESS! All posts now have header images! 🎊');
} else {
  console.log('\n📝 Remaining posts without images:');
  withoutImages.forEach(post => {
    console.log(`- ${post.title}`);
  });
}

console.log('\n📸 Sample of posts with images:');
withImages.slice(0, 5).forEach(post => {
  console.log(`✅ ${post.title}`);
  console.log(`   Image: ${post.image.substring(0, 60)}...`);
});