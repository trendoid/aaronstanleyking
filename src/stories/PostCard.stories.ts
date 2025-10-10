import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { PostCard } from '../components/post-card'
import { BlogPostMetadata } from '../lib/blog'

const mockPost: BlogPostMetadata = {
  slug: 'sample-post',
  title: 'Building Modern Web Apps with Next.js',
  excerpt: 'Learn how to build scalable, performant web applications using Next.js 14 and the App Router.',
  date: '2024-10-11',
  author: 'Aaron Stanley King',
  tags: ['nextjs', 'react', 'web-development', 'tutorial'],
  featured: false,
}

const mockFeaturedPost: BlogPostMetadata = {
  ...mockPost,
  title: 'Welcome to My Blog',
  excerpt: 'This is the first post on my new Next.js blog hosted on Azure Static Web Apps.',
  featured: true,
  tags: ['welcome', 'nextjs', 'azure', 'storybook'],
}

const meta: Meta<typeof PostCard> = {
  title: 'Components/PostCard',
  component: PostCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A card component for displaying blog post summaries with metadata, tags, and navigation.',
      },
    },
  },
  argTypes: {
    featured: {
      control: 'boolean',
      description: 'Whether this is a featured post with enhanced styling',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    post: mockPost,
    featured: false,
  },
}

export const Featured: Story = {
  args: {
    post: mockFeaturedPost,
    featured: true,
  },
}

export const WithManyTags: Story = {
  args: {
    post: {
      ...mockPost,
      tags: ['nextjs', 'react', 'typescript', 'storybook', 'azure', 'web-development', 'tutorial', 'frontend'],
    },
    featured: false,
  },
}

export const WithoutTags: Story = {
  args: {
    post: {
      ...mockPost,
      tags: [],
    },
    featured: false,
  },
}