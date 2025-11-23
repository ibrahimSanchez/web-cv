import { SkillCategory } from "@/interfaces/skill.interface"
import { motion } from "framer-motion"

interface Props {
   category: SkillCategory; 
   categoryIndex: number;
}

export const SkillItem = ({ category, categoryIndex }: Props) => {
    const Icon = category.icon;

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
}