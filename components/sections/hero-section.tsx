"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Globe, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"
import Link from "next/link"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/vishnunaniinfo",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/vishnuvardhanburri",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:vishnuvardhanburri19@gmail.com",
    icon: Mail,
  },
  {
    name: "Portfolio",
    href: "https://github.com/vishnuvardhanburri/vishnu-blog/",
    icon: Globe,
  },
]

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Theme toggle in top right */}
      <div className="absolute top-6 right-6 z-10 flex items-center gap-3">
        <Button
          variant="outline"
          size="sm"
          asChild
          className="gap-2 bg-transparent border-[#0a2540] dark:border-[#1a5a8c] text-foreground hover:bg-[#0a2540] hover:text-white"
        >
          <Link href="/blog">
            <BookOpen className="h-4 w-4" />
            <span className="hidden sm:inline">Blog</span>
          </Link>
        </Button>
        <ThemeToggle />
      </div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}
        className="absolute top-1/2 -translate-y-1/2 right-8 lg:right-16 hidden md:block"
      >
        <div className="relative w-[320px] h-[420px] lg:w-[380px] lg:h-[500px]">
          <motion.div
            animate={{
              x: [-8, -12, -8],
              y: [8, 12, 8],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 3,
              ease: "easeInOut",
            }}
            className="absolute -left-4 top-4 w-full h-full rounded-lg bg-gradient-to-br from-[#1a5a8c] to-[#3b82f6] blur-md"
          />
          <motion.div
            animate={{
              x: [-12, -16, -12],
              y: [12, 18, 12],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 4,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute -left-6 top-6 w-full h-full rounded-lg bg-gradient-to-br from-[#0a2540] to-[#1a5a8c] blur-lg"
          />
          <motion.div
            animate={{
              x: [-16, -20, -16],
              y: [16, 24, 16],
              opacity: [0.2, 0.35, 0.2],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 5,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute -left-8 top-8 w-full h-full rounded-lg border-2 border-[#3b82f6]/50 bg-[#0a2540]/30 blur-sm"
          />

          {/* Main image container */}
          <div className="relative w-full h-full rounded-lg overflow-hidden border border-[#1a5a8c]/40 shadow-2xl shadow-[#0a2540]/50 z-10">
            <Image
              src="/images/image.png"
              alt="Vishnu Vardhan Burri - Full-Stack Engineer and Cybersecurity Specialist"
              fill
              className="object-cover object-top"
              priority
              sizes="(max-width: 1024px) 320px, 380px"
            />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
          </div>

          <motion.div
            animate={{
              opacity: [0.6, 1, 0.6],
              boxShadow: [
                "0 0 12px rgba(59,130,246,0.4)",
                "0 0 24px rgba(59,130,246,0.8)",
                "0 0 12px rgba(59,130,246,0.4)",
              ],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 2,
              ease: "easeInOut",
            }}
            className="absolute left-0 top-[10%] bottom-[10%] w-1 bg-gradient-to-b from-transparent via-[#3b82f6] to-transparent rounded-full z-20"
          />
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="max-w-3xl lg:max-w-xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#0a2540] to-[#0d3a5c] border border-[#1a5a8c] shadow-lg shadow-[#0a2540]/30 backdrop-blur-sm"
            >
              <span className="text-white font-bold text-sm tracking-wider uppercase">Top 3% Worldwide on Toptal</span>
            </motion.div>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-foreground text-balance"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              Vishnu Vardhan Burri
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed"
            >
              Software Developer | Founder & Lead Developer – Xavira Tech Labs | Full-Stack Engineer | Vulnerability
              Management & Cybersecurity Specialist
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              {socialLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="outline"
                  size="lg"
                  asChild
                  className="gap-2 bg-transparent border-[#0a2540] dark:border-[#1a5a8c] text-foreground hover:bg-[#0a2540] hover:text-white transition-all duration-300"
                >
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={link.name}
                  >
                    <link.icon className="h-5 w-5" />
                    <span className="hidden sm:inline">{link.name}</span>
                  </a>
                </Button>
              ))}
            </motion.div>
          </motion.div>

          {/* Mobile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
            className="mt-12 md:hidden"
          >
            <div className="relative w-64 h-80">
              <motion.div
                animate={{
                  x: [-4, -6, -4],
                  y: [4, 8, 4],
                  opacity: [0.4, 0.6, 0.4],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 3,
                  ease: "easeInOut",
                }}
                className="absolute -left-3 top-3 w-full h-full rounded-lg bg-gradient-to-br from-[#1a5a8c] to-[#3b82f6] blur-md"
              />
              <motion.div
                animate={{
                  x: [-6, -10, -6],
                  y: [6, 12, 6],
                  opacity: [0.25, 0.4, 0.25],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 4,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute -left-5 top-5 w-full h-full rounded-lg bg-gradient-to-br from-[#0a2540] to-[#1a5a8c] blur-lg"
              />
              <div className="relative w-full h-full rounded-lg border border-[#1a5a8c]/40 overflow-hidden shadow-2xl z-10">
                <Image
                  src="/images/image.png"
                  alt="Vishnu Vardhan Burri"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="256px"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-foreground/20 flex justify-center pt-2"
          >
            <div className="w-1 h-2 rounded-full bg-foreground/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
