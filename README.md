# Vishnu Vardhan Burri - Portfolio & Blog

A modern, responsive portfolio website built with Next.js 15, Tailwind CSS, and shadcn/ui.

## Features

- **Dark/Light Mode** - Automatic theme switching with system preference support
- **Responsive Design** - Mobile-first approach, works on all devices
- **Blog System** - Markdown-based blog with static generation
- **SEO Optimized** - Full meta tags, Open Graph, and Twitter cards
- **Fast Performance** - Static export for optimal loading speeds

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Animations**: Framer Motion
- **Deployment**: Vercel / GitHub Pages

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Blog Posts

Blog posts are stored in the `content/blog/` directory as Markdown files.

### Creating a New Post

1. Create a new `.md` file in `content/blog/`
2. Add frontmatter at the top:

```md
---
title: "Your Post Title"
date: "2026-01-15"
excerpt: "A brief description of your post"
tags: ["Tag1", "Tag2"]
author: "Your Name"
---

# Your Post Title

Your content here...
```

3. The post will automatically appear on the blog page

### Frontmatter Fields

| Field | Required | Description |
|-------|----------|-------------|
| `title` | Yes | Post title |
| `date` | Yes | Publication date (YYYY-MM-DD) |
| `excerpt` | Yes | Short description for previews |
| `tags` | No | Array of tags |
| `author` | No | Author name (defaults to site owner) |
| `coverImage` | No | Path to cover image |

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Deploy automatically

### GitHub Pages (Automatic via GitHub Actions)

This project includes a GitHub Actions workflow that automatically builds and deploys to GitHub Pages.

1. Push your code to the `main` branch on GitHub
2. Go to **Settings** > **Pages** in your repository
3. Under "Build and deployment", select **GitHub Actions** as the source
4. The workflow will automatically build and deploy your site

Your site will be available at `https://yourusername.github.io/repository-name/`

#### Using a Custom Domain

1. Update the `public/CNAME` file with your domain (e.g., `vishnuvardhanburri.com`)
2. Configure your DNS:
   - For apex domain: Add `A` records pointing to GitHub's IPs
   - For subdomain: Add a `CNAME` record pointing to `yourusername.github.io`
3. Enable "Enforce HTTPS" in repository Settings > Pages

#### Manual Build (Optional)

```bash
npm run build
# Static files will be in the 'out' folder
```

## Project Structure

```
├── app/
│   ├── blog/
│   │   ├── [slug]/
│   │   │   └── page.tsx    # Individual blog post
│   │   └── page.tsx        # Blog listing
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/
│   ├── sections/           # Page sections
│   ├── blog/               # Blog components
│   ├── ui/                 # shadcn/ui components
│   └── theme-*.tsx         # Theme components
├── content/
│   └── blog/               # Markdown blog posts
├── lib/
│   ├── blog.ts             # Blog utilities
│   └── utils.ts            # General utilities
└── public/
    └── images/             # Static images
```

## Customization

### Colors

Edit `app/globals.css` to change the color scheme:

```css
:root {
  --primary: oklch(0.65 0.2 250); /* Navy blue */
  --background: oklch(0.98 0.01 250); /* Light background */
}

.dark {
  --primary: oklch(0.7 0.15 250); /* Lighter navy for dark mode */
  --background: oklch(0.08 0.01 250); /* Dark background */
}
```

### Fonts

Update fonts in `app/layout.tsx` and `app/globals.css`.

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

- **Email**: vishnuvardhanburri@gmail.com
- **LinkedIn**: [/in/vishnuvardhanburri](https://linkedin.com/in/vishnuvardhanburri)
- **GitHub**: [/vishnuvardhanburri](https://github.com/vishnuvardhanburri)

---

Built with ❤️ by Vishnu Vardhan Burri
