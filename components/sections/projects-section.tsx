"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, LayoutDashboard, Server, Shield } from "lucide-react"

const projects = [
  {
    title: "AI Threat Detection System",
    description:
      "ML pipeline processing 5,000+ logs with up to 89% accuracy. Reduced false positives by ~18% via advanced feature engineering.",
    tech: ["Python", "Scikit-learn", "Machine Learning"],
    icon: Brain,
  },
  {
    title: "Healthcare Dashboard",
    description:
      "React dashboard with 10+ reusable components & 3 backend APIs. Reduced load time by 40% and improved navigation by ~30%.",
    tech: ["React", "Node.js", "MongoDB"],
    icon: LayoutDashboard,
  },
  {
    title: "Cloud Backend Monitoring Service",
    description: "Dockerized service for metrics and log analysis with basic CI/CD pipeline for automated deployments.",
    tech: ["Azure", "Docker", "CI/CD"],
    icon: Server,
  },
  {
    title: "Vulnerability Scanner Tool",
    description: "Custom security tool for automated vulnerability assessment and reporting across web applications.",
    tech: ["Python", "Security", "Automation"],
    icon: Shield,
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" ref={ref} className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/30">
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
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="group"
              >
                <Card className="h-full border-border hover:border-[#0a2540] dark:hover:border-[#1a3a5c] transition-all duration-300 bg-card">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-[#0a2540]/10 dark:bg-[#0a2540]/20">
                        <project.icon className="h-5 w-5 text-[#0a2540] dark:text-[#4a7cad]" />
                      </div>
                      <CardTitle className="text-lg text-foreground group-hover:text-[#0a2540] dark:group-hover:text-[#4a7cad] transition-colors">
                        {project.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="bg-secondary text-secondary-foreground border-border"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
