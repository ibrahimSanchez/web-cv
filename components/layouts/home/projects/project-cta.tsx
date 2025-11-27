
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"


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
            <Link 
              href="/projects" 
            >
              <Button size="lg" variant="outline" className="gap-3 border-2 hover:text-white dark:hover:text-accent cursor-pointer">
                Ver todos los proyectos
                <ExternalLink className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
)
}
