'use client'

import { motion } from "framer-motion"
import { ProjectItem } from "./project-item"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/src/components/ui/carousel"
import { projects } from "@/src/lib/projects"

interface Props {
  isFeatured?: boolean;
}

export const ProjectList = ({ isFeatured = false }: Props) => {

  
  const filteredProjects = isFeatured
    ? projects.filter(project => project.featured)
    : projects;

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
      <div className="block lg:hidden w-full -mx-2 sm:mx-0">
        <Carousel opts={{ align: "start", loop: false }}>
          <CarouselContent className="-ml-2 sm:-ml-4 md:-ml-6">
            {filteredProjects.map((project, index) => (
              <CarouselItem key={project.id} className="pl-2 sm:pl-4 md:pl-6 basis-full sm:basis-1/2">
                <ProjectItem project={project} index={index} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <motion.div
        className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8"
        variants={containerVariants}
      >
        {filteredProjects.map((project, index) => (
          <ProjectItem key={project.id} project={project} index={index} />
        ))}
      </motion.div>
    </>
  )
}
