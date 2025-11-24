
import { motion } from "framer-motion"
import { Award, Code2, Palette, Rocket } from "lucide-react"


export const AboutCard = () => {

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
)
}
