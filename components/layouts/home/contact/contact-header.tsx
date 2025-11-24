
import { useTheme } from "@/components/contexts/theme-provider"
import { translations } from "@/lib/i18n"
import { motion } from "framer-motion"
import { MessageCircle, Send } from "lucide-react"

export const ContactHeader = () => {

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
    <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              animate={{ rotate: [0, 180, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <MessageCircle className="w-6 h-6 text-primary" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              {t.contact.title}
            </h2>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Send className="w-6 h-6 text-accent" />
            </motion.div>
          </div>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>
)
}
