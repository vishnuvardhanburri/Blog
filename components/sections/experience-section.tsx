"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Briefcase, Building2, GraduationCap, Shield } from "lucide-react"

const experiences = [
  {
    title: "Founder & CEO",
    company: "Xavira Tech Labs",
    period: "Oct 2025 – Present",
    icon: Building2,
    highlights: [
      "Own vulnerability management and remediation across client production systems",
      "Drive high/critical vulnerability closures with cross-team remediation leadership",
      "Reduce security incidents via secure design, code reviews, and developer mentoring",
    ],
  },
  {
    title: "Full-Stack Software Development Engineer",
    company: "Toptal (Top 3%)",
    period: "Jan 2026 – Present",
    icon: Briefcase,
    highlights: [
      "Security-focused lead on global backend systems",
      "Own API security, risk analysis, and remediation strategies",
    ],
  },
  {
    title: "Artificial Intelligence Intern",
    company: "Microsoft",
    period: "Jan 2025 – Jul 2025",
    icon: GraduationCap,
    highlights: [
      "Built Python AI projects improving model accuracy from 72% to 87%",
      "Azure cloud labs implementation and code reviews",
    ],
  },
  {
    title: "Full-Stack Developer Intern",
    company: "Ripan Technologies",
    period: "Mar 2024 – Jul 2024",
    icon: Briefcase,
    highlights: [
      "Built 6 REST APIs using Node.js and MongoDB",
      "Optimized dashboard load times by ~30%",
      "Updated React components, reducing bugs by ~25%",
    ],
  },
  {
    title: "Cybersecurity & Cyberforensics R&D Intern",
    company: "I4C",
    period: "Jan 2024 – Jun 2024",
    icon: Shield,
    highlights: [
      "Conducted vulnerability analysis and structured reporting",
      "Contributed to cybersecurity research initiatives",
    ],
  },
  {
    title: "Ethical Hacking Intern",
    company: "IIIT Allahabad",
    period: "Oct 2023 – Mar 2024",
    icon: Shield,
    highlights: [
      "Penetration testing and network analysis",
      "Worked with Wireshark and Metasploit for security assessments",
    ],
  },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" ref={ref} className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-center text-foreground"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            Work Experience
          </h2>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-[#0a2540] dark:bg-[#1a3a5c] hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={`${exp.company}-${exp.period}`}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative md:pl-20"
                >
                  <div className="absolute left-6 top-2 w-4 h-4 rounded-full bg-[#0a2540] dark:bg-[#1a3a5c] border-4 border-background hidden md:block" />

                  <div className="bg-card rounded-lg p-6 border border-border hover:border-[#0a2540] dark:hover:border-[#1a3a5c] transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-[#0a2540]/10 dark:bg-[#0a2540]/20 rounded-lg md:hidden">
                        <exp.icon className="h-5 w-5 text-[#0a2540] dark:text-[#4a7cad]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                          <div>
                            <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                            <p className="text-[#0a2540] dark:text-[#4a7cad] font-medium">{exp.company}</p>
                          </div>
                          <span className="text-sm text-muted-foreground whitespace-nowrap">{exp.period}</span>
                        </div>
                        <ul className="space-y-2">
                          {exp.highlights.map((highlight, i) => (
                            <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                              <span className="text-[#0a2540] dark:text-[#4a7cad] mt-1.5">•</span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
