import { motion } from "framer-motion"


export const AboutBackgroundEffects = () => {
  return (
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
)
}
