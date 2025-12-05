import { motion } from "framer-motion"


export const HeroDecoration = () => {
  return (
      <div className="absolute inset-0 -z-10">

        <div className="absolute top-10 left-5 w-72 h-72 bg-ring/80 rounded-full blur-3xl animate-pulse"></div>        
        <div className="absolute top-20 right-10 w-80 h-80 bg-primary/60 rounded-full blur-3xl animate-pulse delay-300"></div>        
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/50 rounded-full blur-3xl animate-pulse delay-700"></div>
        
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
  )
}
