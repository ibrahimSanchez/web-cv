"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { SkillList } from "./skills/skill-list"
import { SkillHeader } from "./skills/skill-header"
import { SkillStatistics } from "./skills/skill-statistics"
import { SkillBackground } from "./skills/skill-background"

export function SkillsSection() {
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



  return (
    <section id="skills" className="py-20 px-4 bg-primary/5 relative overflow-hidden">
      <SkillBackground />
      <motion.div
        ref={ref}
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <SkillHeader />
        <SkillList />
        <SkillStatistics />
      </motion.div>
    </section>
  )
}