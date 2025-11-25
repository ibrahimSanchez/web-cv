
import { motion } from "framer-motion"
import { Calendar, Code2, Users, Zap } from "lucide-react"

export const AboutStatistics = () => {

  const statistics = [
            { number: "5+", label: "Años de Experiencia", icon: Calendar },
            { number: "50+", label: "Proyectos Completados", icon: Code2 },
            { number: "30+", label: "Clientes Satisfechos", icon: Users },
            { number: "15+", label: "Tecnologías", icon: Zap }
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
  return (
<motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          variants={containerVariants}
        >
          {statistics.map((stat, index) => (
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
  )
}
