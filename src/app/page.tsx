"use client"

import { HeroSection } from "@/src/components/layouts/home/hero-section"
import { AboutSection } from "@/src/components/layouts/home/about-section"
import { SkillsSection } from "@/src/components/layouts/home/skills-section"
import { ProjectsSection } from "@/src/components/layouts/home/projects-section"
import { ContactSection } from "@/src/components/layouts/home/contact-section"
import LandingLayout from "@/src/components/landing-layout"

export default function Home() {
  return (
    <>
      <LandingLayout className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </LandingLayout>
    </>
  )
}
