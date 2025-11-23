import { Code, Star, Zap, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"



export const SkillStatistics = () => {


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

)
}
