"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Globe, Heart } from "lucide-react"

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

export function FooterSection() {
  return (
    <footer id="contact" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2
            className="text-2xl sm:text-3xl font-bold mb-4 text-foreground"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            Let's Connect
          </h2>

          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Open to discussing new projects, security consulting, or opportunities in full-stack development.
          </p>

          <div className="flex justify-center gap-4 mb-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={link.name}
                className="p-3 rounded-full bg-secondary text-foreground hover:bg-[#0a2540] hover:text-white transition-all duration-300"
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              Built with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> in India
            </p>
            <p className="text-xs text-muted-foreground/60 mt-2">
              © {new Date().getFullYear()} Vishnu Vardhan Burri. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
