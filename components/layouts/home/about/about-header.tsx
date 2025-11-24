
import { useTheme } from "@/components/contexts/theme-provider"
import { translations } from "@/lib/i18n"
import { motion } from "framer-motion"
import { Star } from "lucide-react"

export const AboutHeader = () => {
  const { language } = useTheme()
  const t = translations[language]

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
        </motion.div>  )
}
