"use client"
import { ArrowRight, Download } from "lucide-react"
import { useTheme } from "../../contexts/theme-provider"
import { translations } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function HeroSection() {
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
    <section 
      id="home" 
      className="pt-32 pb-20 px-4 bg-linear-to-b from-primary/5 via-background to-background relative overflow-hidden"
    >
      {/* Elementos decorativos de fondo distribuidos por toda la pantalla */}
      <div className="absolute inset-0 -z-10">
        {/* Esquina superior izquierda */}
        <div className="absolute top-10 left-5 w-72 h-72 bg-ring/80 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/70 rounded-full blur-3xl animate-pulse delay-100"></div>
        
        {/* Esquina superior derecha */}
        <div className="absolute top-20 right-10 w-80 h-80 bg-primary/60 rounded-full blur-3xl animate-pulse delay-300"></div>
        <div className="absolute top-1/3 right-1/4 w-56 h-56 bg-secondary/70 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Centro */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/50 rounded-full blur-3xl animate-pulse delay-700"></div>
        
        {/* Esquina inferior izquierda */}
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary/40 rounded-full blur-3xl animate-pulse delay-900"></div>
        <div className="absolute bottom-1/3 left-1/3 w-88 h-88 bg-ring/60 rounded-full blur-3xl animate-pulse delay-1100"></div>
        
        {/* Esquina inferior derecha */}
        <div className="absolute bottom-10 right-20 w-64 h-64 bg-secondary/80 rounded-full blur-3xl animate-pulse delay-1300"></div>
        <div className="absolute bottom-1/4 right-1/3 w-76 h-76 bg-accent/60 rounded-full blur-3xl animate-pulse delay-1500"></div>
        
        {/* Elementos distribuidos estratégicamente */}
        <div className="absolute top-40 left-10 w-48 h-48 bg-primary/50 rounded-full blur-2xl animate-pulse delay-200"></div>
        <div className="absolute top-60 right-20 w-52 h-52 bg-ring/40 rounded-full blur-2xl animate-pulse delay-400"></div>
        <div className="absolute bottom-40 left-20 w-44 h-44 bg-accent/40 rounded-full blur-2xl animate-pulse delay-600"></div>
        <div className="absolute bottom-60 right-10 w-40 h-40 bg-secondary/50 rounded-full blur-2xl animate-pulse delay-800"></div>
        
        {/* Elementos más pequeños para rellenar espacios */}
        <div className="absolute top-1/4 right-10 w-32 h-32 bg-primary/30 rounded-full blur-2xl animate-pulse delay-250"></div>
        <div className="absolute top-3/4 left-20 w-28 h-28 bg-accent/30 rounded-full blur-2xl animate-pulse delay-450"></div>
        <div className="absolute bottom-1/4 left-10 w-36 h-36 bg-ring/35 rounded-full blur-2xl animate-pulse delay-650"></div>
        <div className="absolute top-10 right-1/3 w-24 h-24 bg-secondary/40 rounded-full blur-2xl animate-pulse delay-850"></div>
        
        {/* Elementos en movimiento distribuidos */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-40 h-40 bg-primary/20 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-36 h-36 bg-accent/25 rounded-full blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-2/3 left-1/3 w-32 h-32 bg-ring/20 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute bottom-2/3 right-1/3 w-28 h-28 bg-secondary/25 rounded-full blur-2xl"
          animate={{
            scale: [1.1, 0.9, 1.1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />
      </div>

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
      </motion.div>

      {/* Partículas flotantes distribuidas por toda la pantalla */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  )
}