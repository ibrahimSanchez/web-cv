"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { ProjectList } from "../projects/project-list"
import { ProjectHeader } from "../projects/project-header"
import { ProjectCTA } from "../projects/project-cta"
import { useTheme } from "@/src/components/contexts/theme-provider"
import { translations } from "@/src/lib/i18n"

export function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { language } = useTheme()
  const t = translations[language]

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (inView) {
      setIsVisible(true)
    }
  }, [inView])

 
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  }

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-background relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-4 sm:left-10 w-32 h-32 sm:w-64 sm:h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-40 h-40 sm:w-72 sm:h-72 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
 
      <motion.div
        ref={ref}
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <ProjectHeader title={t.projects.titleHome} />
        <ProjectList isFeatured={true} />
        <ProjectCTA />
      </motion.div>
    </section>
  )
}