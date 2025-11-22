"use client"
import { Code, Database, Wrench, Star, Zap, TrendingUp } from "lucide-react"
import { useTheme } from "../../contexts/theme-provider"
import { translations } from "@/lib/i18n"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"

export function SkillsSection() {
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

  const skills = {
    frontend: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Next.js", level: 93 },
    ],
    backend: [
      { name: "Node.js", level: 88 },
      { name: "PostgreSQL", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "Authentication", level: 87 },
    ],
    tools: [
      { name: "Git", level: 92 },
      { name: "Docker", level: 80 },
      { name: "CI/CD", level: 85 },
      { name: "Figma", level: 78 },
    ],
  }

  const categories = [
    { icon: Code, label: "Frontend", items: skills.frontend, color: "from-blue-500 to-cyan-500" },
    { icon: Database, label: "Backend", items: skills.backend, color: "from-green-500 to-emerald-500" },
    { icon: Wrench, label: "Tools", items: skills.tools, color: "from-purple-500 to-pink-500" },
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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut" as const,
        delay: 0.5
      }
    })
  }

  return (
    <section id="skills" className="py-20 px-4 bg-primary/5 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
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
              {t.skills.title}
            </h2>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Zap className="w-6 h-6 text-accent" />
            </motion.div>
          </div>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Tecnologías y herramientas que utilizo para crear soluciones innovadoras
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {categories.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.label}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative group"
              >
                <div className="bg-background rounded-2xl p-8 border border-border shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                  {/* Efecto de brillo al hover */}
                  <div className="absolute inset-0 bg-linear-to-br from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                      <motion.div 
                        className="p-4 bg-linear-to-br from-primary/10 to-accent/10 rounded-2xl border border-primary/20"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Icon className="w-8 h-8 text-primary" />
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">{category.label}</h3>
                        <motion.div 
                          className="h-1 bg-linear-to-r from-primary to-accent rounded-full mt-2"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ delay: categoryIndex * 0.2 + 0.5, duration: 0.8 }}
                        />
                      </div>
                    </div>

                    <div className="space-y-6">
                      {category.items.map((skill, index) => (
                        <motion.div 
                          key={skill.name}
                          className="group/skill"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: categoryIndex * 0.1 + index * 0.1 + 0.8 }}
                        >
                          <div className="flex justify-between items-center mb-3">
                            <span className="font-semibold text-foreground/90 group-hover/skill:text-primary transition-colors duration-300">
                              {skill.name}
                            </span>
                            <motion.span 
                              className="text-sm font-bold text-foreground/60"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: categoryIndex * 0.1 + index * 0.1 + 1.2, type: "spring" }}
                            >
                              {skill.level}%
                            </motion.span>
                          </div>
                          <div className="w-full bg-border rounded-full h-3 overflow-hidden">
                            <motion.div
                              className={`h-3 rounded-full bg-linear-to-r ${category.color}`}
                              variants={progressVariants}
                              initial="hidden"
                              animate="visible"
                              custom={skill.level}
                              whileHover={{ scaleY: 1.2 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Elemento decorativo flotante */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-6 h-6 bg-accent/20 rounded-full"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: categoryIndex * 0.5
                    }}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Sección de estadísticas adicionales */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          variants={containerVariants}
        >
          {[
            { value: "95%", label: "Satisfacción", icon: TrendingUp },
            { value: "50+", label: "Proyectos", icon: Code },
            { value: "3+", label: "Años Exp", icon: Star },
            { value: "100%", label: "Compromiso", icon: Zap },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-background/50 backdrop-blur-sm rounded-xl p-6 text-center border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-primary/10 rounded-full">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <motion.div
                className="text-2xl font-bold text-primary mb-1"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5 + index * 0.1, type: "spring" }}
              >
                {stat.value}
              </motion.div>
              <div className="text-foreground/70 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}