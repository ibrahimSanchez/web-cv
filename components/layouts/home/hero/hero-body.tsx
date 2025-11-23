"use client"

import { useTheme } from "@/components/contexts/theme-provider"
import { Button } from "@/components/ui/button"
import { translations } from "@/lib/i18n"
import { motion } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"
import { useEffect, useState } from "react"

export const HeroBody = () => {

      const { language } = useTheme()
      const t = translations[language]
      const [isVisible, setIsVisible] = useState(false)
    
      useEffect(() => {
        setIsVisible(true)
      }, [])
    
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
    
      const gradientVariants = {
        animate: {
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          transition: {
            duration: 5,
            repeat: Infinity,
            ease: "linear" as const
          }
        }
      }
    
      const handleDownloadCV = () => {
        // Simular descarga del CV
        const link = document.createElement('a')
        link.href = '/cv.pdf' // Ruta a tu archivo CV
        link.download = 'CV_Tu_Nombre.pdf'
        link.click()
      }
    

  return (
    <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.p 
          className="text-primary font-semibold mb-4 text-lg"
          variants={itemVariants}
        >
          {t.home.greeting}
        </motion.p>

        <motion.div variants={itemVariants}>
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-size-200"
            variants={gradientVariants}
            animate="animate"
            style={{
              backgroundSize: "200% 200%"
            }}
          >
            Tu Nombre Aquí
          </motion.h1>
        </motion.div>

        <motion.h2 
          className="text-2xl md:text-3xl text-foreground/80 mb-8 font-light"
          variants={itemVariants}
        >
          {t.home.title}
        </motion.h2>

        <motion.p 
          className="text-lg text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          {t.home.subtitle}
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4"
          variants={itemVariants}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" className="gap-2 group relative overflow-hidden">
              <span className="relative z-10 flex items-center">
                {t.home.cta}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              size="lg" 
              variant="outline" 
              className="gap-2 group border-2"
              onClick={handleDownloadCV}
            >
              <Download className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              Mi CV
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-20 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center"
            animate={{ 
              y: [0, 10, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.div
              className="w-1 h-3 bg-foreground/50 rounded-full mt-2"
              animate={{ 
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>  )
}
