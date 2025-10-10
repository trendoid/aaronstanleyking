import Link from 'next/link'
import Image from 'next/image'
import { BlogPostMetadata } from '@/lib/blog'
import { formatDate } from '@/lib/utils'
import { Calendar, Clock, User, Tag } from 'lucide-react'

interface PostCardProps {
  readonly post: BlogPostMetadata
  readonly featured?: boolean
}

export function PostCard({ post, featured = false }: PostCardProps) {
  const cardClasses = featured
    ? 'bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300'
    : 'bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300'

  return (
    <article className={cardClasses}>
      {post.image && (
        <div className="relative">
          <Link href={`/blog/${post.slug}`}>
            <div className={`relative ${featured ? 'h-48' : 'h-32'} w-full`}>
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </Link>
        </div>
      )}
      
      <div className={post.image ? 'p-6' : 'space-y-3 p-6'}>
        {featured && (
          <div className="flex items-center">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              Featured
            </span>
          </div>
        )}
        
        <div>
          <Link href={`/blog/${post.slug}`}>
            <h2 className={`font-bold text-gray-900 hover:text-blue-600 transition-colors ${
              featured ? 'text-2xl' : 'text-xl'
            }`}>
              {post.title}
            </h2>
          </Link>
          <p className="mt-2 text-gray-600 leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(post.date)}</span>
          </div>
          
          <div className="flex items-center space-x-1">
            <User className="w-4 h-4" />
            <span>{post.author}</span>
          </div>
          
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>5 min read</span>
          </div>
        </div>

        {post.tags && post.tags.length > 0 && (
          <div className="flex items-center space-x-2">
            <Tag className="w-4 h-4 text-gray-400" />
            <div className="flex flex-wrap gap-1">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog/tags/${tag.toLowerCase()}`}
                  className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="pt-2">
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
          >
            Read more →
          </Link>
        </div>
      </div>
    </article>
  )
}