'use client'

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useParams } from "next/navigation"
import { projects } from "@/src/lib/projects"
import { Button } from "@/src/components/ui/button"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"

export default function MainProjectPage() {
  const params = useParams()
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  const projectId = params.id as string
  const project = projects.find(p => p.id === parseInt(projectId))

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!project) {
    return (
      <section className="min-h-screen py-20 px-4 bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground">Proyecto no encontrado</h1>
          <Link href="/projects">
            <Button className="mt-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a proyectos
            </Button>
          </Link>
        </div>
      </section>
    )
  }

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section className="min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-background relative overflow-hidden">
      {/* Fondos decorativos */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-4 sm:left-10 w-32 h-32 sm:w-64 sm:h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-40 h-40 sm:w-72 sm:h-72 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Botón de volver */}
        <motion.div variants={itemVariants}>
          <Link href="/projects">
            <Button variant="ghost" className="mb-6 sm:mb-8 text-sm sm:text-base">
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Volver a proyectos</span>
              <span className="sm:hidden">Volver</span>
            </Button>
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">
          {/* Imagen del proyecto */}
          <motion.div variants={itemVariants} className="relative order-2 lg:order-1">
            <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-border shadow-lg">
              <img
                src={mounted && theme === 'dark' ? project.imageDark : project.imageLight}
                alt={project.title}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Información del proyecto */}
          <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6 order-1 lg:order-2">
            <div>
              <motion.h1 
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4"
                variants={itemVariants}
              >
                {project.title}
              </motion.h1>
              
              <motion.p 
                className="text-base sm:text-lg text-muted-foreground leading-relaxed"
                variants={itemVariants}
              >
                {project.description}
              </motion.p>
            </div>

            {/* Tecnologías */}
            <motion.div variants={itemVariants}>
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3">Tecnologías utilizadas</h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2.5 py-1 sm:px-3 sm:py-1 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Botones de acción */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-4"
            >
              {project.link && (
                <Link href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none">
                  <Button size="lg" className="gap-2 w-full sm:w-auto text-sm sm:text-base">
                    <ExternalLink className="w-4 h-4" />
                    Ver proyecto
                  </Button>
                </Link>
              )}
              
              {project.github && (
                <Link href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none">
                  <Button variant="outline" size="lg" className="gap-2 w-full sm:w-auto text-sm sm:text-base">
                    <Github className="w-4 h-4" />
                    Código fuente
                  </Button>
                </Link>
              )}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}