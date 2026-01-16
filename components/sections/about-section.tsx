"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" ref={ref} className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-center text-foreground"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            About Me
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="w-48 sm:w-56 aspect-[3/4] flex-shrink-0"
            >
              <div className="relative w-full h-full rounded-lg border-2 border-[#0a2540] dark:border-[#1a3a5c] overflow-hidden bg-card shadow-lg shadow-black/10">
                <Image
                  src="/images/image-3.png"
                  alt="Vishnu Vardhan Burri speaking at a conference"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 192px, 224px"
                />
              </div>
            </motion.div>

            <div className="flex-1">
              <p className="text-lg sm:text-xl text-foreground leading-relaxed text-center md:text-left">
                Hi, I'm <span className="font-semibold">Vishnu Vardhan</span> — Founder of{" "}
                <span className="text-[#0a2540] dark:text-[#4a7cad] font-semibold">Xavira Tech Labs</span>. I help teams
                build secure, scalable software systems designed for real-world production use.
              </p>

              <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed text-center md:text-left">
                I lead remediation across production systems, drive high/critical vulnerability closures, own
                API/backend security, and mentor developers. Hands-on with Python, Java, Node.js, React, Azure, Docker,
                ethical hacking, and AI.
              </p>

              <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed text-center md:text-left">
                <span className="text-[#0a2540] dark:text-[#4a7cad] font-medium">Toptal elite developer</span> focused
                on clean code, ownership, and long-term reliability.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
