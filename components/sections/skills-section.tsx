"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "Java", "JavaScript", "TypeScript"],
  },
  {
    title: "Frontend",
    skills: ["React", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "REST APIs"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "SQL", "PostgreSQL"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["Microsoft Azure", "Docker", "CI/CD", "Git"],
  },
  {
    title: "Security",
    skills: ["Vulnerability Assessment", "Penetration Testing", "Ethical Hacking", "Secure SDLC"],
  },
  {
    title: "AI/ML",
    skills: ["Scikit-learn", "TensorFlow", "Machine Learning"],
  },
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" ref={ref} className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-center text-foreground"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            Skills & Technologies
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
                className="bg-card rounded-lg p-6 border border-border hover:border-[#0a2540] dark:hover:border-[#1a3a5c] transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold mb-4 text-foreground">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-secondary text-secondary-foreground border border-border hover:border-[#0a2540] dark:hover:border-[#1a3a5c] transition-colors duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
