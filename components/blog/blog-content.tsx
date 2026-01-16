"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { ArrowLeft, ArrowUp, Calendar, Clock, Tag, ChevronDown, Sparkles, Brain, Shield, Code } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Cybersecurity",
    excerpt: "How machine learning is revolutionizing threat detection and response in enterprise environments.",
    content: `Artificial Intelligence is transforming the cybersecurity landscape in unprecedented ways. As cyber threats become more sophisticated, traditional rule-based security systems are struggling to keep pace. ML-powered systems can analyze millions of events in real-time, identifying patterns that would be impossible for human analysts to detect.

At Xavira Tech Labs, we've implemented AI-driven threat detection that reduced false positives by 18% while improving detection accuracy to 89%. The key lies in training models on diverse datasets that represent real-world attack patterns.

The future points toward autonomous security systems that can not only detect but also respond to threats in milliseconds, far faster than any human team could manage.`,
    date: "Jan 2026",
    readTime: "5 min",
    tags: ["AI", "Cybersecurity", "Machine Learning"],
    icon: Brain,
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    id: 2,
    title: "Vulnerability Management at Scale",
    excerpt: "Lessons learned from managing critical vulnerabilities across production environments.",
    content: `Managing vulnerabilities in large-scale production systems requires a systematic approach that balances security with business continuity. As Vulnerability Management Lead, I've developed frameworks that ensure high and critical vulnerabilities are addressed within strict SLAs.

The key principles include: prioritization based on exploitability and business impact, automated scanning with manual verification for critical findings, and cross-team collaboration to ensure remediation doesn't break existing functionality.

Prevention is equally important — implementing secure design patterns and conducting regular security training reduces the introduction of new vulnerabilities by up to 40%.`,
    date: "Dec 2025",
    readTime: "7 min",
    tags: ["Security", "DevSecOps", "Enterprise"],
    icon: Shield,
    gradient: "from-green-500 to-emerald-600",
  },
  {
    id: 3,
    title: "Building Secure APIs from Scratch",
    excerpt: "A comprehensive guide to implementing authentication, authorization, and input validation.",
    content: `API security is often an afterthought, but it should be the foundation of any backend system. Having built dozens of production APIs, I've learned that security must be baked in from day one.

Start with proper authentication — JWT with short expiration times and refresh token rotation. Implement role-based access control (RBAC) at the middleware level. Validate all inputs using schema validation libraries like Zod or Joi.

Rate limiting, request logging, and anomaly detection form the monitoring layer. Finally, regular penetration testing ensures your defenses hold up against real-world attack vectors.`,
    date: "Nov 2025",
    readTime: "8 min",
    tags: ["Backend", "API Security", "Node.js"],
    icon: Code,
    gradient: "from-purple-500 to-pink-600",
  },
  {
    id: 4,
    title: "From Intern to Founder: My Journey",
    excerpt: "Reflections on building Xavira Tech Labs and lessons learned along the way.",
    content: `The path from cybersecurity intern at IIIT Allahabad to founding Xavira Tech Labs wasn't linear. Each role taught me something crucial — technical depth at Microsoft, client management at Toptal, and the importance of ownership at every step.

Starting a company in cybersecurity consulting required building trust through demonstrated expertise. Every vulnerability assessment, every successful remediation, every time we helped a client avoid a breach — that's what builds reputation.

The biggest lesson? Hire for attitude, train for skill. A small team of dedicated security professionals can outperform larger teams that lack genuine passion for the work.`,
    date: "Oct 2025",
    readTime: "6 min",
    tags: ["Career", "Startup", "Leadership"],
    icon: Sparkles,
    gradient: "from-orange-500 to-red-600",
  },
]

export function BlogContent() {
  const [activeSection, setActiveSection] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([])
  const totalSections = blogPosts.length + 1 // +1 for hero

  const { scrollYProgress } = useScroll({
    container: containerRef,
  })

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let timeout: NodeJS.Timeout
    const handleScroll = () => {
      if (isScrolling) return

      const scrollTop = container.scrollTop
      const sectionHeight = container.clientHeight
      const newSection = Math.round(scrollTop / sectionHeight)

      if (newSection !== activeSection && newSection >= 0 && newSection < totalSections) {
        setActiveSection(newSection)
      }
    }

    container.addEventListener("scroll", handleScroll, { passive: true })
    return () => container.removeEventListener("scroll", handleScroll)
  }, [activeSection, isScrolling, totalSections])

  const scrollToSection = (index: number) => {
    const container = containerRef.current
    if (!container) return

    setIsScrolling(true)
    const targetScroll = index * container.clientHeight

    container.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    })

    setTimeout(() => {
      setActiveSection(index)
      setIsScrolling(false)
    }, 800)
  }

  return (
    <div className="relative h-screen overflow-hidden bg-background">
      {/* Cyber grid background */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 50px, currentColor 50px, currentColor 51px),
              repeating-linear-gradient(90deg, transparent, transparent 50px, currentColor 50px, currentColor 51px)
            `,
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/30"
            initial={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
            }}
            animate={{
              y: [null, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>
          <ThemeToggle />
        </div>
      </header>

      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary z-50"
        style={{ width: progressWidth }}
      />

      {/* Section indicators */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {[...Array(totalSections)].map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToSection(i)}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              activeSection === i
                ? "bg-primary scale-150 shadow-[0_0_10px_var(--primary)]"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50",
            )}
            aria-label={`Go to section ${i + 1}`}
          />
        ))}
      </div>

      {/* Scrollable container with snap */}
      <div
        ref={containerRef}
        className="h-screen overflow-y-auto snap-y snap-mandatory"
        style={{ scrollSnapType: "y mandatory" }}
      >
        {/* Hero Section */}
        <section
          ref={(el) => {
            sectionsRef.current[0] = el
          }}
          className="h-screen snap-start flex items-center justify-center relative px-4"
        >
          <div className="text-center max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              {/* Glowing AI icon */}
              <motion.div
                className="mx-auto mb-8 w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-xl border border-primary/30 flex items-center justify-center"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(59,130,246,0.3), inset 0 0 20px rgba(59,130,246,0.1)",
                    "0 0 40px rgba(34,197,94,0.3), inset 0 0 30px rgba(34,197,94,0.1)",
                    "0 0 20px rgba(59,130,246,0.3), inset 0 0 20px rgba(59,130,246,0.1)",
                  ],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                <Brain className="w-12 h-12 text-primary" />
              </motion.div>

              <h1
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent"
                style={{ fontFamily: "var(--font-heading), sans-serif" }}
              >
                Blog
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Insights on cybersecurity, full-stack development, and AI from my experience building secure systems at
                scale.
              </p>

              {/* Animated scroll indicator */}
              <motion.button
                onClick={() => scrollToSection(1)}
                className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <span className="text-sm">Scroll to explore</span>
                <ChevronDown className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>

          {/* Decorative elements */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-secondary/5 blur-3xl"
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>
        </section>

        {/* Blog Post Sections */}
        {blogPosts.map((post, index) => (
          <section
            key={post.id}
            ref={(el) => {
              sectionsRef.current[index + 1] = el
            }}
            className="h-screen snap-start flex items-center justify-center relative px-4 py-20"
          >
            <AnimatePresence mode="wait">
              <motion.article
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: false, amount: 0.5 }}
                className="max-w-4xl mx-auto w-full"
              >
                {/* Glass card */}
                <div
                  className="relative rounded-3xl p-8 md:p-12 overflow-hidden group"
                  style={{
                    background: "rgba(30, 30, 50, 0.15)",
                    backdropFilter: "blur(16px)",
                    border: "1px solid rgba(59, 130, 246, 0.3)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  {/* Neon glow on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                    style={{
                      boxShadow: "inset 0 0 20px #00f0ff, 0 0 40px #39ff14",
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start gap-6 mb-8">
                      <motion.div
                        className={cn(
                          "w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br",
                          post.gradient,
                        )}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <post.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-2">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime} read
                          </span>
                        </div>
                        <h2
                          className="text-2xl md:text-4xl font-bold text-foreground"
                          style={{ fontFamily: "var(--font-heading), sans-serif" }}
                        >
                          {post.title}
                        </h2>
                      </div>
                    </div>

                    {/* Excerpt */}
                    <p className="text-lg text-primary/80 mb-6 font-medium">{post.excerpt}</p>

                    {/* Content */}
                    <div className="text-muted-foreground leading-relaxed space-y-4 mb-8">
                      {post.content.split("\n\n").map((paragraph, i) => (
                        <motion.p
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                          viewport={{ once: false }}
                        >
                          {paragraph}
                        </motion.p>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <motion.span
                          key={tag}
                          className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                          whileHover={{ scale: 1.05, borderColor: "rgba(59, 130, 246, 0.5)" }}
                        >
                          <Tag className="w-3 h-3" />
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Animated corner accents */}
                  <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-primary/30 rounded-tl-3xl" />
                  <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-secondary/30 rounded-br-3xl" />
                </div>
              </motion.article>
            </AnimatePresence>

            {/* Section number indicator */}
            <div className="absolute bottom-8 left-8 text-8xl font-bold text-primary/5 pointer-events-none">
              0{index + 1}
            </div>
          </section>
        ))}
      </div>

      {/* Back to top button */}
      <AnimatePresence>
        {activeSection > 0 && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => scrollToSection(0)}
            className="fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
