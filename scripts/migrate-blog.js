#!/usr/bin/env node

/**
 * Blog Migration Script for Aaron Stanley King Blog
 * 
 * This script helps migrate blog posts from Blogger to the new Next.js blog format.
 * It creates markdown files with proper frontmatter for the blog system.
 */

import fs from 'fs';
import path from 'path';

// Blog post template
const createBlogPost = (post) => {
  const frontmatter = `---
title: "${post.title}"
excerpt: "${post.excerpt}"
date: "${post.date}"
author: "Aaron Stanley King"
tags: [${post.tags.map(tag => `"${tag}"`).join(', ')}]
featured: ${post.featured || false}
---

${post.content}`;

  return frontmatter;
};

// Helper function to create slug from title
const createSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-')     // Replace spaces with hyphens
    .replace(/--+/g, '-')     // Replace multiple hyphens with single
    .trim();
};

// Helper function to extract date from various formats
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toISOString().split('T')[0]; // YYYY-MM-DD format
};

// Main migration function
const migrateBlogPost = (postData) => {
  const slug = createSlug(postData.title);
  const fileName = `${slug}.md`;
  const filePath = path.join(__dirname, 'content', 'posts', fileName);
  
  // Ensure content/posts directory exists
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  const blogPostContent = createBlogPost(postData);
  
  fs.writeFileSync(filePath, blogPostContent, 'utf8');
  console.log(`✅ Created: ${fileName}`);
  
  return filePath;
};

// Example data structure for blog posts:
// {
//   title: "Sample Blog Post",
//   excerpt: "This is a sample blog post for demonstration purposes.",
//   date: "2024-01-15",
//   tags: ["example", "migration", "nextjs"],
//   featured: false,
//   content: "# Sample Blog Post\n\nMarkdown content here..."
// }

// Export functions for use in other scripts
export {
  createBlogPost,
  createSlug,
  formatDate,
  migrateBlogPost
};

// Main execution
console.log('🚀 Blog Migration Script');
console.log('📝 This script helps migrate blog posts to markdown format');
console.log('');
console.log('ℹ️  Modify this script to process your specific Blogger data');
console.log('ℹ️  Or use the exported functions to create your own migration');