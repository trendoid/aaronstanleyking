import { Layout } from '@/components/layout'
import { Button } from '@/components/ui/button'
import { Schema } from '@/components/schema'
import Link from 'next/link'
import { Code, Cloud, Layers, BookOpen, Mail } from 'lucide-react'
import { getPersonSchema, getBreadcrumbSchema } from '@/lib/schema'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Aaron Stanley King',
  description: 'Learn more about Aaron Stanley King, a web developer passionate about modern technologies, cloud computing, and open source.',
}

export default function AboutPage() {
  const personSchema = getPersonSchema()
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://www.aaronstanleyking.com' },
    { name: 'About' }
  ])
  
  const skills = [
    'Next.js & React',
    'TypeScript',
    'Azure Cloud',
    'Storybook',
    'Node.js',
    'Tailwind CSS',
    'Docker',
    'CI/CD',
  ]

  const technologies = [
    {
      name: 'Frontend Development',
      icon: Code,
      description: 'Building modern, responsive web applications with React, Next.js, and TypeScript.',
    },
    {
      name: 'Cloud Computing',
      icon: Cloud,
      description: 'Deploying and scaling applications on Azure, AWS, and other cloud platforms.',
    },
    {
      name: 'Component Libraries',
      icon: Layers,
      description: 'Creating reusable UI components and design systems with Storybook.',
    },
  ]

  return (
    <>
      <Schema schema={personSchema} />
      <Schema schema={breadcrumbSchema} />
      <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl font-bold text-white">AK</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              About Me
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              I&apos;m a passionate web developer focused on creating modern, scalable applications 
              using the latest technologies and best practices.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Bio Section */}
        <section className="mb-16">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Hello, I&apos;m Aaron</h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                I&apos;m a web developer with a passion for creating beautiful, functional, and user-friendly 
                applications. I specialize in modern JavaScript frameworks, cloud computing, and 
                component-driven development.
              </p>
              <p>
                Currently, I&apos;m focused on building scalable web applications using Next.js, React, 
                and TypeScript, while leveraging cloud platforms like Azure for deployment and scaling. 
                I believe in the power of good design systems and use tools like Storybook to create 
                maintainable component libraries.
              </p>
              <p>
                When I&apos;m not coding, you can find me writing about web development, exploring new 
                technologies, or contributing to open source projects. I&apos;m always excited to learn 
                new things and share knowledge with the developer community.
              </p>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What I Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technologies.map((tech) => {
              const Icon = tech.icon
              return (
                <div key={tech.name} className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-200">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{tech.name}</h3>
                  <p className="text-gray-600">{tech.description}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Technologies & Skills</h2>
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center justify-center p-3 bg-gray-50 rounded-lg text-sm font-medium text-gray-700"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Let&apos;s Connect</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              I&apos;m always interested in discussing new projects, creative ideas, or opportunities 
              to be part of your vision. Feel free to reach out!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg">
                  <Mail className="w-5 h-5 mr-2" />
                  Get in Touch
                </Button>
              </Link>
              <Link href="/blog">
                <Button variant="outline" size="lg">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Read My Blog
                </Button>
              </Link>
            </div>

            <div className="flex justify-center space-x-6 mt-8">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="GitHub"
              >
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="LinkedIn"
              >
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <a
                href="mailto:hello@example.com"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="Email"
              >
                <span className="text-sm font-medium">Email</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
    </>
  )
}