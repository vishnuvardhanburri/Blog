import { Suspense } from "react"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { FooterSection } from "@/components/sections/footer-section"

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Suspense fallback={<LoadingFallback />}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <SkillsSection />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <ExperienceSection />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <ProjectsSection />
      </Suspense>
      <FooterSection />
    </main>
  )
}
