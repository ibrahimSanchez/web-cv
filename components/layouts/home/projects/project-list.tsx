import { motion } from "framer-motion"
import { ProjectItem } from "./project-item"
import { Project } from "@/interfaces/project.interface"


export const ProjectList = () => {


  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Una plataforma de comercio electrónico completa con carrito de compras, pagos integrados y panel de administración.",
      image: "/ecommerce-platform.jpg",
      technologies: ["React", "Next.js", "Stripe", "PostgreSQL"],
      link: "#",
      github: "#",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Aplicación de gestión de tareas con autenticación, colaboración en tiempo real y análisis de productividad.",
      image: "/task-management-board.png",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind"],
      link: "#",
      github: "#",
      featured: false
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description: "Dashboard interactivo para visualizar datos con gráficos en tiempo real y exportación de reportes.",
      image: "/analytics-dashboard.png",
      technologies: ["Next.js", "Chart.js", "TypeScript", "PostgreSQL"],
      link: "#",
      github: "#",
      featured: true
    },
  ]


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
        <motion.div 
          className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <ProjectItem key={index} project={project} index={index} />
          ))}
        </motion.div>
)   
}


