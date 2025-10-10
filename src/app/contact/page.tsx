import { Layout } from '@/components/layout'
import { Button } from '@/components/ui/button'
import { Schema } from '@/components/schema'
import { Mail, MessageCircle, Calendar, MapPin } from 'lucide-react'
import { getPersonSchema, getBreadcrumbSchema } from '@/lib/schema'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Aaron Stanley King',
  description: 'Get in touch with Aaron Stanley King for collaboration, projects, or just to say hello.',
}

export default function ContactPage() {
  const personSchema = getPersonSchema()
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://www.aaronstanleyking.com' },
    { name: 'Contact' }
  ])
  
  const contactMethods = [
    {
      name: 'Email',
      description: 'Send me an email and I&apos;ll get back to you within 24 hours.',
      icon: Mail,
      value: 'hello@example.com',
      href: 'mailto:hello@example.com',
      action: 'Send Email',
    },
    {
      name: 'Twitter',
      description: 'Follow me on Twitter for updates and quick conversations.',
      icon: MessageCircle,
      value: '@yourtwitterhandle',
      href: 'https://twitter.com',
      action: 'Follow on Twitter',
    },
    {
      name: 'Schedule a Call',
      description: 'Book a time to discuss your project or collaboration.',
      icon: Calendar,
      value: 'Available weekdays',
      href: '#',
      action: 'Schedule Meeting',
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
            <Mail className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Let&apos;s Connect
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              I&apos;m always interested in discussing new projects, creative ideas, 
              or opportunities to collaborate. Feel free to reach out!
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method) => {
            const Icon = method.icon
            return (
              <div key={method.name} className="text-center">
                <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{method.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{method.description}</p>
                  <p className="font-medium text-gray-900 mb-4">{method.value}</p>
                  <a
                    href={method.href}
                    className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
                  >
                    {method.action}
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Send a Message</h2>
            <p className="text-gray-600">
              Have a specific question or project in mind? Send me a message and I&apos;ll get back to you soon.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-vertical"
                placeholder="Tell me more about your project, question, or how I can help..."
              />
            </div>

            <div className="text-center">
              <Button size="lg" className="min-w-[150px]">
                <Mail className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </div>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
              <MapPin className="w-4 h-4" />
              <span>Based in Your Location • Available for remote work worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
    </>
  )
}