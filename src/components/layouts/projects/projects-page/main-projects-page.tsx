"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/src/components/contexts/theme-provider";
import { translations } from "@/src/lib/i18n";
import { ProjectHeader } from "../project-header";
import { projects } from "@/src/lib/projects";
import { ProjectItem } from "../project-item";
import { ProjectCTA } from "../project-cta";


export default function MainProjectsPage(){

    const { language } = useTheme()
    const t = translations[language]
  
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
        <section className="min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-background relative overflow-hidden">
            {/* Fondos decorativos */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 left-4 sm:left-10 w-32 h-32 sm:w-64 sm:h-64 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-4 sm:right-10 w-40 h-40 sm:w-72 sm:h-72 bg-accent/5 rounded-full blur-3xl"></div>
            </div>

            <motion.div
                className="max-w-7xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <ProjectHeader title={t.projects.titlePage} />
                
                {/* Grid de proyectos */}
                <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-10 md:mt-12"
                variants={containerVariants}
                >
                {projects.map((project, index) => (
                    <ProjectItem key={project.id} project={project} index={index} />
                ))}
                </motion.div>

                <ProjectCTA />
            </motion.div>
        </section>
)}