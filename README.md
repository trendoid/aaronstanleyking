# Aaron Stanley King - Blog

A modern blog built with Next.js 15, Storybook, and deployed on Azure Static Web Apps.

## 🚀 Features

- **Next.js 15** with App Router and TypeScript
- **Storybook** for component development and documentation
- **Tailwind CSS** for responsive styling
- **Markdown** blog posts with frontmatter
- **Azure Static Web Apps** deployment
- **GitHub Actions** for CI/CD
- **SEO optimized** with metadata API
- **Responsive design** for all devices

## 🛠️ Tech Stack

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Content:** Markdown with gray-matter
- **Documentation:** Storybook
- **Deployment:** Azure Static Web Apps
- **CI/CD:** GitHub Actions

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/trendoid/aaronstanleyking.git
cd aaronstanleyking
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

   The development server uses Turbopack for faster builds and hot module replacement.

4. Open [http://localhost:3000](http://localhost:3000) with your browser.

## 📚 Storybook

To view the component library and documentation:

```bash
npm run storybook
```

Open [http://localhost:6006](http://localhost:6006) to view Storybook.

## 📝 Blog Content

This blog includes migrated content from the original Blogger site at www.aaronstanleyking.com, plus new posts written specifically for this Next.js platform.

### Migrated Posts

The following posts were successfully migrated from Blogger:
- **Review of the 14‑inch MacBook Pro in Space Gray** (2024)
- **Why I won't be registering as a blogger in the state of Florida** (2023)
- **.NET Maui and VS Code** (2022)
- **Special Characters are Truly Special** (2022)
- **Cool new stream about F# from LaylaCodesIt** (2021)
- **Use Free Certificates. Always Use a Certificate.** (2021)

See [MIGRATION.md](MIGRATION.md) for details on the migration process.

### Adding New Posts

1. Create a new `.md` file in `content/posts/`
2. Add frontmatter with required fields:

```markdown
---
title: "Your Post Title"
excerpt: "A brief description of your post"
date: "2024-10-10"
author: "Aaron Stanley King"
tags: ["tag1", "tag2"]
featured: false
---

# Your Post Content

Write your blog post content here using Markdown.
```

3. The post will automatically appear in the blog.

## 🌐 Deployment

### Azure Static Web Apps

This project is configured for automatic deployment to Azure Static Web Apps.

#### Prerequisites
- Azure account
- GitHub repository
- Azure Static Web Apps resource

#### Setup
1. Create an Azure Static Web Apps resource in the Azure portal
2. Connect it to your GitHub repository
3. Azure will automatically create a workflow file
4. Add the deployment token to your GitHub secrets as `AZURE_STATIC_WEB_APPS_API_TOKEN`

#### Manual Deployment
You can also deploy manually using the SWA CLI:

```bash
# Build the application (includes Storybook build)
npm run build

# Deploy to Azure (requires Azure login)
npm run swa:deploy
```

## 🔧 Development Commands

- `npm run dev` - Start development server (with Turbopack)
- `npm run build` - Build for production (includes Storybook build)
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run storybook` - Start Storybook
- `npm run build-storybook` - Build Storybook
- `npm run swa:start` - Start with SWA CLI
- `npm run swa:build` - Build with SWA CLI
- `npm run swa:deploy` - Deploy to Azure

## 📁 Project Structure

```
├── .github/workflows/    # GitHub Actions workflows
├── .storybook/          # Storybook configuration
├── content/             # Blog posts and content
│   └── posts/          # Markdown blog posts
├── public/             # Static assets
├── src/
│   ├── app/            # Next.js app directory
│   ├── components/     # React components
│   ├── lib/            # Utility functions
│   └── stories/        # Storybook stories
├── swa-cli.config.json # SWA CLI configuration
└── package.json
```

## 🎨 Components

The blog includes several reusable components documented in Storybook:

- **Button** - Versatile button with multiple variants
- **PostCard** - Blog post preview cards
- **Header** - Navigation header with responsive menu
- **Footer** - Site footer with links and info
- **Layout** - Main page layout wrapper

## 🔍 SEO & Performance

- Automatic sitemap generation
- OpenGraph meta tags
- Responsive images
- Static generation for optimal performance
- Lighthouse optimized

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **GitHub:** [@trendoid](https://github.com/trendoid)

---

Built with ❤️ using Next.js, Storybook, and Azure Static Web Apps.
