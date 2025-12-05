
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Button } from "@/src/components/ui/button"
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
          className="text-center mt-8 sm:mt-12 md:mt-16 px-4"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link 
              href="/projects" 
              className="inline-block"
            >
              <Button size="lg" variant="outline" className="gap-2 sm:gap-3 border-2 hover:text-white dark:hover:text-accent cursor-pointer text-sm sm:text-base w-full sm:w-auto px-6 sm:px-8">
                <span className="whitespace-nowrap">Ver todos los proyectos</span>
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
)
}
