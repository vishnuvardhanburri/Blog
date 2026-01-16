import { notFound } from "next/navigation"
import Link from "next/link"
import { getAllPostPaths, getPostBySlug, getAllPosts } from "@/lib/blog"
import { Calendar, Clock, Tag, ArrowLeft, ArrowRight } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const paths = getAllPostPaths()
  return paths
}

// Generate metadata for each post
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: "Post Not Found | Vishnu Vardhan Burri",
    }
  }

  return {
    title: `${post.title} | Vishnu Vardhan Burri`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  }
}

// Simple markdown to HTML converter
function markdownToHtml(markdown: string): string {
  let html = markdown
    // Headers
    .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold text-foreground mt-8 mb-4">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold text-foreground mt-10 mb-4">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold text-foreground mt-12 mb-6">$1</h1>')
    // Bold and italic
    .replace(/\*\*\*(.*?)\*\*\*/gim, "<strong><em>$1</em></strong>")
    .replace(/\*\*(.*?)\*\*/gim, '<strong class="font-semibold text-foreground">$1</strong>')
    .replace(/\*(.*?)\*/gim, "<em>$1</em>")
    // Code blocks
    .replace(
      /```(\w+)?\n([\s\S]*?)```/gim,
      '<pre class="bg-secondary rounded-lg p-4 my-4 overflow-x-auto"><code class="text-sm text-foreground">$2</code></pre>',
    )
    // Inline code
    .replace(/`([^`]+)`/gim, '<code class="bg-secondary px-1.5 py-0.5 rounded text-sm">$1</code>')
    // Lists
    .replace(/^- (.*$)/gim, '<li class="ml-4 text-muted-foreground">$1</li>')
    .replace(/^\d+\. (.*$)/gim, '<li class="ml-4 text-muted-foreground list-decimal">$1</li>')
    // Links
    .replace(
      /\[([^\]]+)\]$$([^)]+)$$/gim,
      '<a href="$2" class="text-[#0a2540] dark:text-[#4a7cad] underline hover:no-underline">$1</a>',
    )
    // Horizontal rules
    .replace(/^---$/gim, '<hr class="border-border my-8" />')
    // Paragraphs
    .replace(/^\s*$/gim, '</p><p class="text-muted-foreground leading-relaxed mb-4">')

  // Wrap in paragraph tags
  html = '<p class="text-muted-foreground leading-relaxed mb-4">' + html + "</p>"

  // Clean up empty paragraphs
  html = html.replace(/<p class="[^"]*"><\/p>/g, "")

  // Wrap list items in ul
  html = html.replace(/(<li[^>]*>.*?<\/li>)+/gs, '<ul class="my-4 space-y-2">$&</ul>')

  return html
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  const allPosts = getAllPosts()

  // Fallback content for demo
  const fallbackPosts: Record<
    string,
    { title: string; date: string; excerpt: string; content: string; tags: string[]; readTime: string }
  > = {
    "future-of-ai-cybersecurity": {
      title: "The Future of AI in Cybersecurity",
      date: "2026-01-10",
      excerpt: "How machine learning is revolutionizing threat detection and response in enterprise environments.",
      content: `# The Future of AI in Cybersecurity

Artificial Intelligence is transforming the cybersecurity landscape in unprecedented ways. As cyber threats become more sophisticated, traditional rule-based security systems are struggling to keep pace.

## ML-Powered Threat Detection

ML-powered systems can analyze millions of events in real-time, identifying patterns that would be impossible for human analysts to detect. At **Xavira Tech Labs**, we've implemented AI-driven threat detection that:

- Reduced false positives by **18%**
- Improved detection accuracy to **89%**
- Enabled real-time threat response

The key lies in training models on diverse datasets that represent real-world attack patterns.

## Key Benefits

1. **Real-time Analysis**: Process millions of events instantly
2. **Pattern Recognition**: Identify subtle attack signatures
3. **Adaptive Learning**: Continuously improve detection capabilities
4. **Automated Response**: React to threats in milliseconds

## Looking Ahead

The future points toward autonomous security systems that can not only detect but also respond to threats in milliseconds, far faster than any human team could manage.

---

*Stay tuned for more insights on AI and cybersecurity.*`,
      tags: ["AI", "Cybersecurity", "Machine Learning"],
      readTime: "5 min",
    },
    "vulnerability-management-at-scale": {
      title: "Vulnerability Management at Scale",
      date: "2025-12-15",
      excerpt: "Lessons learned from managing critical vulnerabilities across production environments.",
      content: `# Vulnerability Management at Scale

Managing vulnerabilities in large-scale production systems requires a systematic approach that balances security with business continuity.

## The Challenge

As Vulnerability Management Lead, I've developed frameworks that ensure high and critical vulnerabilities are addressed within strict SLAs.

## Key Principles

### 1. Smart Prioritization

Not all vulnerabilities are created equal. We prioritize based on:

- **Exploitability**: Is there a known exploit in the wild?
- **Business Impact**: What's the blast radius if exploited?
- **Asset Criticality**: Is this a crown jewel system?

### 2. Automated Scanning with Manual Verification

Automation handles the volume, but critical findings always get human eyes.

### 3. Cross-Team Collaboration

Security can't operate in a silo. We work directly with development, infrastructure, and business teams.

## Results

- **40% reduction** in new vulnerability introduction
- **SLA compliance** at 98% for critical vulnerabilities
- **Zero high-severity breaches** in production environments

---

*Prevention beats remediation every time.*`,
      tags: ["Security", "DevSecOps", "Enterprise"],
      readTime: "7 min",
    },
    "building-secure-apis": {
      title: "Building Secure APIs from Scratch",
      date: "2025-11-20",
      excerpt: "A comprehensive guide to implementing authentication, authorization, and input validation.",
      content: `# Building Secure APIs from Scratch

API security is often an afterthought, but it should be the foundation of any backend system.

## Authentication Done Right

Start with proper authentication:

- **Short-lived access tokens** (15-30 minutes max)
- **Refresh token rotation** on every use
- **Secure token storage** (httpOnly cookies, not localStorage)

## Role-Based Access Control

Implement RBAC at the middleware level for consistent authorization across all endpoints.

## Input Validation

Never trust user input. Validate everything using schema validation libraries like Zod or Joi.

## The Monitoring Layer

Security without visibility is useless:

1. **Rate Limiting**: Prevent abuse and DDoS
2. **Request Logging**: Full audit trail
3. **Anomaly Detection**: Alert on suspicious patterns

---

*Security is a process, not a product.*`,
      tags: ["Backend", "API Security", "Node.js"],
      readTime: "8 min",
    },
    "from-intern-to-founder": {
      title: "From Intern to Founder: My Journey",
      date: "2025-10-05",
      excerpt: "Reflections on building Xavira Tech Labs and lessons learned along the way.",
      content: `# From Intern to Founder: My Journey

The path from cybersecurity intern at IIIT Allahabad to founding Xavira Tech Labs wasn't linear.

## The Learning Journey

### Microsoft: Technical Depth

My time at Microsoft as a Security Engineer taught me how enterprise security really works at scale.

### Toptal: Client Excellence

Being accepted into Toptal's Top 3% network changed everything.

## Lessons for Aspiring Founders

1. **Hire for attitude, train for skill**
2. **Specialize deeply before expanding**
3. **Your network is your net worth**
4. **Stay technical**

---

*The journey continues. Stay hungry, stay curious.*`,
      tags: ["Career", "Startup", "Leadership"],
      readTime: "6 min",
    },
  }

  const displayPost = post || fallbackPosts[slug]

  if (!displayPost) {
    notFound()
  }

  // Find prev/next posts
  const postIndex = allPosts.findIndex((p) => p.slug === slug)
  const prevPost = postIndex > 0 ? allPosts[postIndex - 1] : null
  const nextPost = postIndex < allPosts.length - 1 ? allPosts[postIndex + 1] : null

  const contentHtml = markdownToHtml(displayPost.content)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link
            href="/blog"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All Posts
          </Link>
          <ThemeToggle />
        </div>
      </header>

      {/* Main content */}
      <main className="pt-24 pb-16 px-4">
        <article className="max-w-3xl mx-auto">
          {/* Header */}
          <header className="mb-12">
            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(displayPost.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {displayPost.readTime} read
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-4xl md:text-5xl font-bold text-foreground mb-6"
              style={{ fontFamily: "var(--font-heading), sans-serif" }}
            >
              {displayPost.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-muted-foreground mb-6">{displayPost.excerpt}</p>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-2">
              {displayPost.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {/* Content */}
          <div
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />

          {/* Post navigation */}
          <nav className="mt-16 pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              {prevPost ? (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="group flex-1 p-4 rounded-xl border border-border hover:border-[#0a2540] dark:hover:border-[#4a7cad] transition-colors"
                >
                  <span className="text-sm text-muted-foreground flex items-center gap-1 mb-1">
                    <ArrowLeft className="w-3 h-3" />
                    Previous
                  </span>
                  <span className="font-medium text-foreground group-hover:text-[#0a2540] dark:group-hover:text-[#4a7cad] transition-colors">
                    {prevPost.title}
                  </span>
                </Link>
              ) : (
                <div className="flex-1" />
              )}

              {nextPost ? (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="group flex-1 p-4 rounded-xl border border-border hover:border-[#0a2540] dark:hover:border-[#4a7cad] transition-colors text-right"
                >
                  <span className="text-sm text-muted-foreground flex items-center justify-end gap-1 mb-1">
                    Next
                    <ArrowRight className="w-3 h-3" />
                  </span>
                  <span className="font-medium text-foreground group-hover:text-[#0a2540] dark:group-hover:text-[#4a7cad] transition-colors">
                    {nextPost.title}
                  </span>
                </Link>
              ) : (
                <div className="flex-1" />
              )}
            </div>
          </nav>
        </article>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-3xl mx-auto text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Vishnu Vardhan Burri. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
