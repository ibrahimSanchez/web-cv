"use client"

import { HeroSection } from "@/components/layouts/home/hero-section"
import { AboutSection } from "@/components/layouts/home/about-section"
import { SkillsSection } from "@/components/layouts/home/skills-section"
import { ProjectsSection } from "@/components/layouts/home/projects-section"
import { ContactSection } from "@/components/layouts/home/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
