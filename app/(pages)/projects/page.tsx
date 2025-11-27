'use client'

import { motion } from "framer-motion"
import { projects } from "@/lib/projects"
import { ProjectHeader } from "@/components/layouts/home/projects/project-header"
import { ProjectItem } from "@/components/layouts/home/projects/project-item"
import { ProjectCTA } from "@/components/layouts/home/projects/project-cta"
import { useTheme } from "@/components/contexts/theme-provider"
import { translations } from "@/lib/i18n"

export default function  ProjectsPage() {

  const { language } = useTheme()
  const t = translations[language]

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
    <section className="min-h-screen py-20 px-4 bg-background relative overflow-hidden">
      {/* Fondos decorativos */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <ProjectHeader title={t.projects.titlePage} />
        
        {/* Grid de proyectos */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-12"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <ProjectItem key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        <ProjectCTA />
      </motion.div>
    </section>
  )
}