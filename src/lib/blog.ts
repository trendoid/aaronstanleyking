import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  author: string
  tags: string[]
  featured: boolean
  content: string
  image?: string
}

export interface BlogPostMetadata {
  slug: string
  title: string
  excerpt: string
  date: string
  author: string
  tags: string[]
  featured: boolean
  image?: string
}

const postsDirectory = path.join(process.cwd(), 'content/posts')

function extractFirstImage(content: string): string | undefined {
  // Look for the first image in markdown format ![alt](url)
  const imageRegex = /!\[[^\]]*\]\(([^)]+)\)/
  const match = imageRegex.exec(content)
  return match ? match[1] : undefined
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }
  
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''))
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    
    if (!fs.existsSync(fullPath)) {
      return null
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || '',
      excerpt: data.excerpt || '',
      date: data.date || '',
      author: data.author || '',
      tags: data.tags || [],
      featured: data.featured || false,
      content,
      image: extractFirstImage(content),
    }
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}

export function getAllPosts(): BlogPostMetadata[] {
  const slugs = getAllPostSlugs()
  const posts = slugs
    .map((slug) => {
      const post = getPostBySlug(slug)
      if (!post) return null
      
      // Return metadata only (without content)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { content, ...metadata } = post
      return metadata
    })
    .filter((post): post is BlogPostMetadata => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return posts
}

export function getFeaturedPosts(): BlogPostMetadata[] {
  return getAllPosts().filter((post) => post.featured)
}

export function getPostsByTag(tag: string): BlogPostMetadata[] {
  return getAllPosts().filter((post) => 
    post.tags.some((postTag) => postTag.toLowerCase() === tag.toLowerCase())
  )
}

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}

export function getAllTags(): string[] {
  const posts = getAllPosts()
  const allTags = posts.flatMap((post) => post.tags)
  return Array.from(new Set(allTags)).sort((a, b) => a.localeCompare(b))
}