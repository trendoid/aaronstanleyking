import Link from 'next/link'
import { BookOpen, Mail } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com' },
    { name: 'Twitter', href: 'https://twitter.com' },
    { name: 'LinkedIn', href: 'https://linkedin.com' },
    { name: 'Email', href: 'mailto:hello@example.com', icon: Mail },
  ]

  const footerLinks = [
    {
      title: 'Blog',
      links: [
        { name: 'All Posts', href: '/blog' },
        { name: 'Featured', href: '/blog?featured=true' },
        { name: 'Tags', href: '/blog/tags' },
      ],
    },
    {
      title: 'About',
      links: [
        { name: 'About Me', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'Resume', href: '/resume' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Storybook', href: '/storybook/index.html' },
        { name: 'RSS Feed', href: '/rss.xml' },
        { name: 'Sitemap', href: '/sitemap.xml' },
      ],
    },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg">Aaron Stanley King</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              A blog about web development, cloud computing, and modern development practices.
              Built with Next.js, Storybook, and hosted on Azure Static Web Apps.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon ? (
                    <social.icon className="w-5 h-5" />
                  ) : (
                    <span>{social.name}</span>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Footer links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Aaron Stanley King. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Built with Next.js, Storybook, and Azure Static Web Apps
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}