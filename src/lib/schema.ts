import { BlogPostMetadata } from './blog'

export interface PersonSchema {
  "@context": "https://schema.org"
  "@type": "Person"
  name: string
  url: string
  jobTitle: string
  description: string
  image?: string
  sameAs: string[]
}

export interface WebSiteSchema {
  "@context": "https://schema.org"
  "@type": "WebSite"
  name: string
  url: string
  description: string
  author: PersonSchema
  publisher: PersonSchema
  potentialAction: {
    "@type": "SearchAction"
    target: {
      "@type": "EntryPoint"
      urlTemplate: string
    }
    "query-input": string
  }
}

export interface BlogSchema {
  "@context": "https://schema.org"
  "@type": "Blog"
  name: string
  description: string
  url: string
  author: PersonSchema
  publisher: PersonSchema
  mainEntityOfPage: {
    "@type": "WebPage"
    "@id": string
  }
}

export interface ArticleSchema {
  "@context": "https://schema.org"
  "@type": "BlogPosting"
  headline: string
  description: string
  url: string
  datePublished: string
  dateModified: string
  author: PersonSchema
  publisher: PersonSchema
  mainEntityOfPage: {
    "@type": "WebPage"
    "@id": string
  }
  image?: string
  keywords: string[]
  wordCount?: number
  articleSection: string[]
}

export interface BreadcrumbSchema {
  "@context": "https://schema.org"
  "@type": "BreadcrumbList"
  itemListElement: Array<{
    "@type": "ListItem"
    position: number
    name: string
    item: string
  }>
}

const baseUrl = 'https://www.aaronstanleyking.com'

// Author/Person Schema - consistent across all pages
export function getPersonSchema(): PersonSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Aaron Stanley King",
    url: baseUrl,
    jobTitle: "Software Developer & Technical Writer",
    description: "Software developer specializing in web development, cloud computing, and modern technologies including Next.js, Azure, and TypeScript.",
    sameAs: [
      // Add your social media profiles here
      // "https://twitter.com/aaronstanleyking",
      // "https://linkedin.com/in/aaronstanleyking",
      // "https://github.com/aaronstanleyking"
    ]
  }
}

// Website Schema for homepage
export function getWebSiteSchema(): WebSiteSchema {
  const person = getPersonSchema()
  
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Aaron Stanley King - Blog",
    url: baseUrl,
    description: "A modern blog about web development, cloud computing, and technology built with Next.js, Storybook, and Azure Static Web Apps.",
    author: person,
    publisher: person,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/blog?search={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  }
}

// Blog Schema for blog listing page
export function getBlogSchema(): BlogSchema {
  const person = getPersonSchema()
  
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Aaron Stanley King Blog",
    description: "Technical blog covering web development, cloud computing, and modern software development practices.",
    url: `${baseUrl}/blog`,
    author: person,
    publisher: person,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog`
    }
  }
}

// Article Schema for individual blog posts
export function getArticleSchema(post: BlogPostMetadata, wordCount?: number): ArticleSchema {
  const person = getPersonSchema()
  const postUrl = `${baseUrl}/blog/${post.slug}`
  
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url: postUrl,
    datePublished: post.date,
    dateModified: post.date, // You could add a separate modified date field if needed
    author: person,
    publisher: person,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl
    },
    image: post.image ? `${baseUrl}${post.image}` : undefined,
    keywords: post.tags,
    wordCount,
    articleSection: post.tags
  }
}

// Breadcrumb Schema
export function getBreadcrumbSchema(items: Array<{ name: string; url?: string }>): BreadcrumbSchema {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url || baseUrl
    }))
  }
}

// Utility function to create JSON-LD structured data
export function createJsonLdScript(schema: PersonSchema | WebSiteSchema | BlogSchema | ArticleSchema | BreadcrumbSchema): string {
  return JSON.stringify(schema, null, 0)
}

// Utility to get word count from content
export function getWordCount(content: string): number {
  return content.trim().split(/\s+/).length
}