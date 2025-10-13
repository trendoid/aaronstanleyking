import Link from 'next/link'
import { Layout } from '@/components/layout'
import { PostCard } from '@/components/post-card'
import { Schema } from '@/components/schema'
import { getAllPosts, getFeaturedPosts, getAllTags } from '@/lib/blog'
import { getBlogSchema, getBreadcrumbSchema } from '@/lib/schema'
import { Search, Tag, BookOpen } from 'lucide-react'

export default function BlogPage() {
  const allPosts = getAllPosts()
  const featuredPosts = getFeaturedPosts()
  const allTags = getAllTags()
  
  const blogSchema = getBlogSchema()
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://www.aaronstanleyking.com' },
    { name: 'Blog' }
  ])

  return (
    <>
      <Schema schema={blogSchema} />
      <Schema schema={breadcrumbSchema} />
      <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              <BookOpen className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              Blog
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover insights about web development, cloud computing, and modern development practices.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Posts */}
            {featuredPosts.length > 0 && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {featuredPosts.map((post) => (
                    <PostCard key={post.slug} post={post} featured={true} />
                  ))}
                </div>
              </section>
            )}

            {/* All Posts */}
            <section>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  All Posts ({allPosts.length})
                </h2>
              </div>
              
              <div className="space-y-6">
                {allPosts.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* Search */}
              <div className="rounded-lg shadow-md p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Search className="w-5 h-5 mr-2" />
                  Search
                </h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search posts..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <Search className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
                </div>
              </div>

              {/* Tags */}
              {allTags.length > 0 && (
                <div className="rounded-lg shadow-md p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Tag className="w-5 h-5 mr-2" />
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {allTags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/blog/tags/${tag.toLowerCase()}`}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* About */}
              <div className="rounded-lg shadow-md p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">About This Blog</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  A modern blog about web development, cloud computing, and technology. 
                  Built with Next.js, Storybook, and Azure Static Web Apps.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
    </>
  )
}