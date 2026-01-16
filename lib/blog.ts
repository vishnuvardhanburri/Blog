import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsDirectory = path.join(process.cwd(), "content/blog")

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  readTime: string
  tags: string[]
  author: string
  coverImage?: string
}

export function getPostSlugs(): string[] {
  // Return empty array if directory doesn't exist (for build time)
  if (!fs.existsSync(postsDirectory)) {
    return []
  }
  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
}

export function getPostBySlug(slug: string): BlogPost | null {
  const realSlug = slug.replace(/\.mdx?$/, "")
  const mdPath = path.join(postsDirectory, `${realSlug}.md`)
  const mdxPath = path.join(postsDirectory, `${realSlug}.mdx`)

  let fullPath = ""
  if (fs.existsSync(mdPath)) {
    fullPath = mdPath
  } else if (fs.existsSync(mdxPath)) {
    fullPath = mdxPath
  } else {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  // Calculate read time (average 200 words per minute)
  const wordCount = content.split(/\s+/).length
  const readTime = `${Math.ceil(wordCount / 200)} min`

  return {
    slug: realSlug,
    title: data.title || "Untitled",
    date: data.date || new Date().toISOString(),
    excerpt: data.excerpt || content.slice(0, 160) + "...",
    content,
    readTime,
    tags: data.tags || [],
    author: data.author || "Vishnu Vardhan Burri",
    coverImage: data.coverImage,
  }
}

export function getAllPosts(): BlogPost[] {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug.replace(/\.mdx?$/, "")))
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1))

  return posts
}

// For static generation - get all post paths
export function getAllPostPaths() {
  const slugs = getPostSlugs()
  return slugs.map((slug) => ({
    slug: slug.replace(/\.mdx?$/, ""),
  }))
}
