
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"


export const ProjectCTA = () => {

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
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
<motion.div 
          variants={itemVariants}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button size="lg" variant="outline" className="gap-3 border-2">
              <Github className="w-5 h-5" />
              Ver todos los proyectos en GitHub
              <ExternalLink className="w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>
)
}
