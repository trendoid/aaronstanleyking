import { getAllPosts } from '@/lib/blog'

export const dynamic = 'force-static'

const SITE_URL = 'https://www.aaronstanleyking.com'
const SITE_NAME = 'Aaron Stanley King - Blog'
const SITE_DESCRIPTION = 'A modern blog about web development, cloud computing, and technology built with Next.js, Storybook, and Azure Static Web Apps.'

function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
}

export async function GET() {
  const posts = getAllPosts()

  // Generate RSS items for each post
  const rssItems = await Promise.all(
    posts.map(async (post) => {
      const postUrl = `${SITE_URL}/blog/${post.slug}`
      const pubDate = new Date(post.date).toUTCString()
      
      // Create a simple HTML description from excerpt
      const description = escapeXml(post.excerpt)
      
      // Generate categories from tags
      const categories = post.tags
        .map(tag => `    <category>${escapeXml(tag)}</category>`)
        .join('\n')

      // Add image if available
      const imageTag = post.image 
        ? `    <enclosure url="${post.image.startsWith('http') ? post.image : `${SITE_URL}${post.image}`}" type="image/jpeg" />` 
        : ''

      return `  <item>
    <title>${escapeXml(post.title)}</title>
    <link>${postUrl}</link>
    <guid isPermaLink="true">${postUrl}</guid>
    <description>${description}</description>
    <pubDate>${pubDate}</pubDate>
    <author>hello@aaronstanleyking.com (${escapeXml(post.author)})</author>
${categories}
${imageTag}
  </item>`
    })
  )

  const rssXml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_NAME)}</title>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <link>${SITE_URL}</link>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    <language>en-US</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <managingEditor>hello@aaronstanleyking.com (Aaron Stanley King)</managingEditor>
    <webMaster>hello@aaronstanleyking.com (Aaron Stanley King)</webMaster>
    <generator>Next.js 15</generator>
    <ttl>60</ttl>
${rssItems.join('\n')}
  </channel>
</rss>`

  return new Response(rssXml, {
    status: 200,
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}