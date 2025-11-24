
import { useTheme } from "@/components/contexts/theme-provider"
import { translations } from "@/lib/i18n"
import { motion } from "framer-motion"
import { Code2, Palette, Rocket, Users, Zap } from "lucide-react"

export const AboutBiography = () => {
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

  return (
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
)
}
