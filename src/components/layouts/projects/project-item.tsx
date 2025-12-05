import { motion } from "framer-motion"
import { Project } from '@/src/interfaces/project.interface'
import { ArrowUpRight, ExternalLink, Github, Star } from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import { useTheme } from '@/src/components/contexts/theme-provider';
import { translations } from '@/src/lib/i18n';
import Link from "next/link";

interface Props {
  project: Project;
  index: number;
}

export const ProjectItem = ({ project, index }: Props) => {

  const { language } = useTheme()
  const t = translations[language]
  
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
                    className="absolute top-2 left-2 sm:top-4 sm:left-4 z-20"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                  >
                    <div className="flex items-center gap-1 px-2 py-0.5 sm:px-3 sm:py-1 bg-linear-to-r from-primary to-accent rounded-full text-white text-[10px] sm:text-xs font-bold">
                      <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current" />
                      <span className="hidden sm:inline">Destacado</span>
                    </div>
                  </motion.div>
                )}

                {/* Imagen del proyecto */}
                <div className="relative overflow-hidden h-40 sm:h-48 md:h-52 bg-linear-to-br from-primary/10 to-accent/10">
                  <motion.div
                    variants={imageHoverVariants}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full"
                  >
                    <img
                      src={project.imageLight || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover dark:hidden"
                    />
                    <img
                      src={project.imageDark || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover hidden dark:block"  
                    />
                  </motion.div>
                  
                  {/* Overlay de la imagen */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className="flex gap-2"
                    >
                      <Button size="sm" className="rounded-full bg-white/90 text-black hover:bg-white w-8 h-8 sm:w-auto sm:h-auto">
                        <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </Button>
                      <Button size="sm" className="rounded-full bg-white/90 text-black hover:bg-white w-8 h-8 sm:w-auto sm:h-auto">
                        <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </Button>
                    </motion.div>
                  </div>
                </div>

                {/* Contenido del proyecto */}
                <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2 sm:mb-3 gap-2">
                      <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 flex-1">
                        {project.title}
                      </h3>
                      <motion.div
                        whileHover={{ rotate: 45 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="flex-shrink-0"
                      >
                        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-foreground/60 group-hover:text-primary transition-colors duration-300" />
                      </motion.div>
                    </div>
                    
                    <p className="text-foreground/70 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-3 sm:line-clamp-none">
                      {project.description}
                    </p>

                    {/* Tecnologías */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span 
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + techIndex * 0.1 + 0.7 }}
                          className="px-2 py-0.5 sm:px-3 sm:py-1 bg-primary/10 text-primary text-[10px] sm:text-xs rounded-full font-medium border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Botones de acción */}
                  <div className="flex gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-border">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1 min-w-0">
                      <Button size="sm" variant="default" className="gap-1.5 sm:gap-2 w-full hover:bg-linear-to-r from-primary to-accent transition duration-300 text-xs sm:text-sm">
                        <Link className="w-full flex justify-center gap-1.5 sm:gap-2 items-center" href={project.link} >
                          <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                          <span className="truncate">{t.projects.viewProject}</span>
                        </Link>
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-shrink-0">
                      <Button size="sm" variant="outline" className="gap-2 bg-transparent hover:text-white dark:hover:text-accent w-10 h-10 sm:w-auto sm:h-auto p-0 sm:px-3">
                        <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
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



    )   
}
