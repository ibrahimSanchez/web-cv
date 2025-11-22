"use client"
import { ExternalLink, Github, ArrowUpRight, Star, Zap } from "lucide-react"
import { useTheme } from "../../contexts/theme-provider"
import { translations } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"

export function ProjectsSection() {
  const { language } = useTheme()
  const t = translations[language]
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (inView) {
      setIsVisible(true)
    }
  }, [inView])

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Una plataforma de comercio electrónico completa con carrito de compras, pagos integrados y panel de administración.",
      image: "/ecommerce-platform.jpg",
      technologies: ["React", "Next.js", "Stripe", "PostgreSQL"],
      link: "#",
      github: "#",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Aplicación de gestión de tareas con autenticación, colaboración en tiempo real y análisis de productividad.",
      image: "/task-management-board.png",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind"],
      link: "#",
      github: "#",
      featured: false
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description: "Dashboard interactivo para visualizar datos con gráficos en tiempo real y exportación de reportes.",
      image: "/analytics-dashboard.png",
      technologies: ["Next.js", "Chart.js", "TypeScript", "PostgreSQL"],
      link: "#",
      github: "#",
      featured: true
    },
  ]

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  }

  const cardHoverVariants = {
    rest: { scale: 1, y: 0 },
    hover: { 
      scale: 1.02, 
      y: -10,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 20
      }
    }
  }

  const imageHoverVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.1 }
  }

  return (
    <section id="projects" className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        ref={ref}
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              animate={{ rotate: [0, 180, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Star className="w-6 h-6 text-primary" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              {t.projects.title}
            </h2>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Zap className="w-6 h-6 text-accent" />
            </motion.div>
          </div>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Descubre mis proyectos más destacados donde la creatividad se encuentra con la tecnología
          </p>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="group relative"
            >
              <motion.div
                variants={cardHoverVariants}
                className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl relative h-full flex flex-col"
              >
                {/* Badge destacado */}
                {project.featured && (
                  <motion.div 
                    className="absolute top-4 left-4 z-20"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                  >
                    <div className="flex items-center gap-1 px-3 py-1 bg-linear-to-r from-primary to-accent rounded-full text-white text-xs font-bold">
                      <Star className="w-3 h-3 fill-current" />
                      Destacado
                    </div>
                  </motion.div>
                )}

                {/* Imagen del proyecto */}
                <div className="relative overflow-hidden h-48 bg-linear-to-br from-primary/10 to-accent/10">
                  <motion.div
                    variants={imageHoverVariants}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full"
                  >
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  
                  {/* Overlay de la imagen */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className="flex gap-2"
                    >
                      <Button size="sm" className="rounded-full bg-white/90 text-black hover:bg-white">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                      <Button size="sm" className="rounded-full bg-white/90 text-black hover:bg-white">
                        <Github className="w-4 h-4" />
                      </Button>
                    </motion.div>
                  </div>
                </div>

                {/* Contenido del proyecto */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <motion.div
                        whileHover={{ rotate: 45 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <ArrowUpRight className="w-5 h-5 text-foreground/60 group-hover:text-primary transition-colors duration-300" />
                      </motion.div>
                    </div>
                    
                    <p className="text-foreground/70 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tecnologías */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span 
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + techIndex * 0.1 + 0.7 }}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Botones de acción */}
                  <div className="flex gap-3 pt-4 border-t border-border">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                      <Button size="sm" variant="default" className="gap-2 w-full">
                        <ExternalLink className="w-4 h-4" />
                        {t.projects.viewProject}
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button size="sm" variant="outline" className="gap-2 bg-transparent">
                        <Github className="w-4 h-4" />
                      </Button>
                    </motion.div>
                  </div>
                </div>

                {/* Efecto de brillo al hover */}
                <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -z-10"></div>
              </motion.div>

              {/* Elemento decorativo flotante */}
              <motion.div
                className="absolute -top-2 -right-2 w-4 h-4 bg-accent/30 rounded-full"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA adicional */}
        <motion.div 
          variants={itemVariants}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button size="lg" variant="outline" className="gap-3 border-2">
              <Github className="w-5 h-5" />
              Ver todos los proyectos en GitHub
              <ExternalLink className="w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}