"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code2, Palette, Rocket, Users, Star, Award, Calendar, Zap } from "lucide-react"
import { useEffect, useState } from "react"
import { AboutHeader } from "./about/about-header"
import { AboutBiography } from "./about/about-biography"
import { AboutStatistics } from "./about/about-statistics"
import { AboutCard } from "./about/about-card"
import { AboutBackgroundEffects } from "./about/about-background-effects"

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (inView) {
      setIsVisible(true)
    }
  }, [inView])

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
    <section id="about" className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-accent/5 rounded-full blur-2xl"></div>
      </div>

      <motion.div
        ref={ref}
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <AboutHeader />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AboutBiography />

          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            <AboutCard />
            <AboutBackgroundEffects />
          </motion.div>
        </div>

        <AboutStatistics />
      </motion.div>
    </section>
  )
}