'use client'

import { motion } from "framer-motion"
import { ProjectItem } from "./project-item"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { projects } from "@/lib/projects"

export const ProjectList = () => {

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
    <>
      <div className="block lg:hidden w-full">
        <Carousel opts={{ align: "start" }}>
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={project.id}>
                <ProjectItem project={project} index={index} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <motion.div
        className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-8"
        variants={containerVariants}
      >
        {projects.map((project, index) => (
          <ProjectItem key={project.id} project={project} index={index} />
        ))}
      </motion.div>
    </>
  )
}
