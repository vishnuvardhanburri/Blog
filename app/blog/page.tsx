import Link from "next/link"
import { getAllPosts } from "@/lib/blog"
import { Calendar, Clock, Tag, ArrowRight } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export const metadata = {
  title: "Blog | Vishnu Vardhan Burri",
  description: "Insights on cybersecurity, full-stack development, and AI from Vishnu Vardhan Burri",
}

export default function BlogPage() {
  const posts = getAllPosts()

  // Fallback posts if no markdown files exist yet
  const displayPosts =
    posts.length > 0
      ? posts
      : [
          {
            slug: "future-of-ai-cybersecurity",
            title: "The Future of AI in Cybersecurity",
            date: "2026-01-10",
            excerpt:
              "How machine learning is revolutionizing threat detection and response in enterprise environments.",
            readTime: "5 min",
            tags: ["AI", "Cybersecurity", "Machine Learning"],
            author: "Vishnu Vardhan Burri",
            content: "",
          },
          {
            slug: "vulnerability-management-at-scale",
            title: "Vulnerability Management at Scale",
            date: "2025-12-15",
            excerpt: "Lessons learned from managing critical vulnerabilities across production environments.",
            readTime: "7 min",
            tags: ["Security", "DevSecOps", "Enterprise"],
            author: "Vishnu Vardhan Burri",
            content: "",
          },
          {
            slug: "building-secure-apis",
            title: "Building Secure APIs from Scratch",
            date: "2025-11-20",
            excerpt: "A comprehensive guide to implementing authentication, authorization, and input validation.",
            readTime: "8 min",
            tags: ["Backend", "API Security", "Node.js"],
            author: "Vishnu Vardhan Burri",
            content: "",
          },
          {
            slug: "from-intern-to-founder",
            title: "From Intern to Founder: My Journey",
            date: "2025-10-05",
            excerpt: "Reflections on building Xavira Tech Labs and lessons learned along the way.",
            readTime: "6 min",
            tags: ["Career", "Startup", "Leadership"],
            author: "Vishnu Vardhan Burri",
            content: "",
          },
        ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Back to Portfolio
          </Link>
          <ThemeToggle />
        </div>
      </header>

      {/* Main content */}
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1
              className="text-5xl md:text-7xl font-bold text-foreground mb-4"
              style={{ fontFamily: "var(--font-heading), sans-serif" }}
            >
              Blog
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Insights on cybersecurity, full-stack development, and AI from my experience building secure systems at
              scale.
            </p>
          </div>

          {/* Posts grid */}
          <div className="grid gap-8">
            {displayPosts.map((post, index) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <article className="relative p-6 md:p-8 rounded-2xl border border-border bg-card hover:border-[#0a2540] dark:hover:border-[#4a7cad] transition-all duration-300">
                  {/* Post number */}
                  <div className="absolute top-4 right-4 text-6xl font-bold text-muted-foreground/10">0{index + 1}</div>

                  {/* Meta info */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime} read
                    </span>
                  </div>

                  {/* Title */}
                  <h2
                    className="text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-[#0a2540] dark:group-hover:text-[#4a7cad] transition-colors"
                    style={{ fontFamily: "var(--font-heading), sans-serif" }}
                  >
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-muted-foreground mb-4 max-w-3xl">{post.excerpt}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read more */}
                  <div className="flex items-center gap-2 text-sm font-medium text-[#0a2540] dark:text-[#4a7cad]">
                    Read article
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-5xl mx-auto text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Vishnu Vardhan Burri. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
