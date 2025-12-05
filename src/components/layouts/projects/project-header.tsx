import { motion } from "framer-motion"
import { Star, Zap } from "lucide-react"

interface Props {
  title: string;
}

export const ProjectHeader = ({ title }: Props) => {

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

  return (
        <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-12 md:mb-16 px-2">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <motion.div
              animate={{ rotate: [0, 180, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Star className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent px-2">
              {title}
            </h2>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
            </motion.div>
          </div>
          <p className="text-foreground/70 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Descubre mis proyectos más destacados donde la creatividad se encuentra con la tecnología
          </p>
        </motion.div>
  )
}
