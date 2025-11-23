"use client"

import { useTheme } from "../../contexts/theme-provider"
import { translations } from "@/lib/i18n"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code2, Palette, Rocket, Users, Star, Award, Calendar, Zap } from "lucide-react"
import { useEffect, useState } from "react"

export function AboutSection() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  }

  const skills = [
    { icon: Code2, label: "Desarrollo", level: 90 },
    { icon: Palette, label: "Diseño", level: 85 },
    { icon: Rocket, label: "Innovación", level: 88 },
    { icon: Users, label: "Colaboración", level: 92 }
  ]

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  }

  return (
    <section id="about" className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-accent/5 rounded-full blur-2xl"></div>
      </div>

      <motion.div
        ref={ref}
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center gap-4">
            <motion.span 
              className="w-16 h-1 bg-primary rounded"
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            ></motion.span>
            {t.about.title}
            <motion.span 
              className="text-primary"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
            >
              <Star className="w-8 h-8 fill-current" />
            </motion.span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-primary to-accent rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Columna de texto */}
          <motion.div className="space-y-8" variants={containerVariants}>
            <motion.div 
              className="p-6 bg-card rounded-2xl border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-foreground/80 text-lg leading-relaxed">
                {t.about.description}
              </p>
            </motion.div>

            <motion.div 
              className="p-6 bg-card rounded-2xl border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-foreground/80 text-lg leading-relaxed">
                {t.about.background}
              </p>
            </motion.div>

            {/* Habilidades */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground/90 flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                Mis Fortalezas
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.label}
                    className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg group hover:bg-primary/10 transition-colors duration-300"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                      <skill.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium">{skill.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Columna visual */}
          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            {/* Tarjeta principal 3D */}
            <motion.div
              className="relative z-10 w-80 h-96 mx-auto bg-linear-to-br from-card to-card/80 rounded-2xl border border-border shadow-2xl"
              whileHover={{ rotateY: 5, rotateX: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="absolute inset-4 bg-linear-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20 flex items-center justify-center">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Rocket className="w-16 h-16 text-primary" />
                </motion.div>
              </div>

              {/* Elementos flotantes */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-accent/30"
                variants={floatingVariants}
                animate="float"
              >
                <Code2 className="w-6 h-6 text-accent" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/30"
                variants={floatingVariants}
                animate="float"
                transition={{ delay: 1 }}
              >
                <Palette className="w-5 h-5 text-primary" />
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-6 w-14 h-14 bg-linear-to-r from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <Award className="w-6 h-6 text-white" />
              </motion.div>
            </motion.div>

            {/* Efectos de fondo */}
            <div className="absolute inset-0 -z-10">
              <motion.div
                className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute bottom-10 right-10 w-40 h-40 bg-accent/10 rounded-full blur-xl"
                animate={{ 
                  scale: [1.2, 1, 1.2],
                  opacity: [0.4, 0.7, 0.4]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Estadísticas */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          variants={containerVariants}
        >
          {[
            { number: "3+", label: "Años de Experiencia", icon: Calendar },
            { number: "50+", label: "Proyectos Completados", icon: Code2 },
            { number: "30+", label: "Clientes Satisfechos", icon: Users },
            { number: "15+", label: "Tecnologías", icon: Zap }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all duration-300 group"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <motion.div
                className="text-3xl font-bold text-primary mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
              >
                {stat.number}
              </motion.div>
              <div className="text-foreground/70 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}