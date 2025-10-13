import Link from 'next/link'
import { Layout } from '@/components/layout'
import { PostCard } from '@/components/post-card'
import { Button } from '@/components/ui/button'
import { Schema } from '@/components/schema'
import { getAllPosts, getFeaturedPosts } from '@/lib/blog'
import { getWebSiteSchema, getBreadcrumbSchema } from '@/lib/schema'
import { BookOpen, ArrowRight, Code, Cloud, Layers } from 'lucide-react'

export default function Home() {
  const featuredPosts = getFeaturedPosts()
  const recentPosts = getAllPosts().slice(0, 3)
  
  const websiteSchema = getWebSiteSchema()
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://www.aaronstanleyking.com' }
  ])

  return (
    <>
      <Schema schema={websiteSchema} />
      <Schema schema={breadcrumbSchema} />
      <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Welcome to My{' '}
              <span className="text-blue-600 block">Development Blog</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Explore modern web development, cloud computing, and best practices. 
              Built with Next.js, documented with Storybook, and hosted on Azure Static Web Apps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/blog">
                <Button size="lg" className="min-w-[150px]">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Read the Blog
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="min-w-[150px]">
                  About Me
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Built with Modern Technologies
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              This blog showcases the latest in web development, from component-driven development to cloud deployment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Next.js 14</h3>
              <p className="text-gray-600">
                Built with the latest Next.js features including App Router, Server Components, and TypeScript support.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Layers className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Storybook.js</h3>
              <p className="text-gray-600">
                Component-driven development with comprehensive documentation and testing capabilities.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Cloud className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Azure Static Web Apps</h3>
              <p className="text-gray-600">
                Deployed on Azure with automatic builds, global CDN, and seamless integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Featured Posts</h2>
              <Link href="/blog" className="text-blue-600 hover:text-blue-800 font-medium">
                View all posts →
              </Link>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <PostCard key={post.slug} post={post} featured={true} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recent Posts Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Latest Posts</h2>
            <Link href="/blog" className="text-blue-600 hover:text-blue-800 font-medium">
              View all posts →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
    </>
  )
}
