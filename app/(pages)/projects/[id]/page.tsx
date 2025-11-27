'use client'

import { motion } from "framer-motion"
import { useParams } from "next/navigation"
import { projects } from "@/lib/projects"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function ProjectPage() {
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
    <section className="min-h-screen py-20 px-4 bg-background relative overflow-hidden">
      {/* Fondos decorativos */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
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
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a proyectos
            </Button>
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Imagen del proyecto */}
          <motion.div variants={itemVariants} className="relative">
            <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
              <img
                src={mounted && theme === 'dark' ? project.imageDark : project.imageLight}
                alt={project.title}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Información del proyecto */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <motion.h1 
                className="text-4xl font-bold text-foreground mb-4"
                variants={itemVariants}
              >
                {project.title}
              </motion.h1>
              
              <motion.p 
                className="text-lg text-muted-foreground leading-relaxed"
                variants={itemVariants}
              >
                {project.description}
              </motion.p>
            </div>

            {/* Tecnologías */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold text-foreground mb-3">Tecnologías utilizadas</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Botones de acción */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              {project.link && (
                <Link href={project.link} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Ver proyecto
                  </Button>
                </Link>
              )}
              
              {project.github && (
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="gap-2">
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