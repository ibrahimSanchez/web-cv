'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Home, 
  Search, 
  RefreshCw, 
  Zap, 
  Navigation,
  Globe,
  Coffee
} from 'lucide-react'

export default function NotFound() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [particles, setParticles] = useState<Array<{
    x: number
    y: number
    size: number
    speedX: number
    speedY: number
    color: string
  }>>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [searchQuery, setSearchQuery] = useState('')

  // Colores para el diseño
  const colors = {
    primary: '#7c3aed',
    secondary: '#10b981',
    accent: '#f59e0b',
    dark: '#1e293b',
    light: '#f8fafc'
  }

  // Inicializar partículas flotantes
  useEffect(() => {
    const newParticles = []
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 4 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: i % 3 === 0 ? colors.primary : i % 3 === 1 ? colors.secondary : colors.accent
      })
    }
    setParticles(newParticles)
  }, [])

  // Animación del canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    let animationId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Dibujar partículas
      particles.forEach((particle, i) => {
        // Actualizar posición
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Rebotar en los bordes
        if (particle.x <= 0 || particle.x >= canvas.width) particle.speedX *= -1
        if (particle.y <= 0 || particle.y >= canvas.height) particle.speedY *= -1

        // Interacción con el mouse
        const dx = mousePosition.x - particle.x
        const dy = mousePosition.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 100) {
          particle.x -= dx * 0.02
          particle.y -= dy * 0.02
        }

        // Dibujar partícula
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()
        ctx.closePath()
      })

      // Dibujar conexiones entre partículas cercanas
      particles.forEach((p1, i) => {
        particles.forEach((p2, j) => {
          if (i >= j) return
          
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `${p1.color}20`
            ctx.lineWidth = 0.5
            ctx.stroke()
            ctx.closePath()
          }
        })
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationId)
    }
  }, [particles, mousePosition])

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY
    })
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`
    }
  }

  const suggestedLinks = [
    { href: '/', label: 'Inicio', icon: <Home size={16} /> },
    { href: '/blog', label: 'Blog', icon: <Globe size={16} /> },
    { href: '/docs', label: 'Documentación', icon: <Navigation size={16} /> },
    { href: '/contact', label: 'Contacto', icon: <Coffee size={16} /> },
  ]

  return (
    <div 
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 to-gray-950 text-white"
      onMouseMove={handleMouseMove}
    >
      {/* Canvas con partículas interactivas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0"
      />

      {/* Efecto de brillo en el fondo */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-gray-900/50" />

      {/* Contenido principal */}
      <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen">
        {/* Número 404 animado */}
        <motion.div 
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="relative mb-8"
        >
          <div className="text-[180px] md:text-[250px] font-black tracking-tighter leading-none">
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-amber-500 bg-clip-text text-transparent">
              404
            </span>
          </div>
          
          {/* Efecto de brillo alrededor del 404 */}
          <div className="absolute inset-0 -z-10 blur-3xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-amber-500/20 rounded-full" />
        </motion.div>

        {/* Mensaje principal */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            ¡Houston, tenemos un problema!
            <span className="block text-2xl md:text-3xl font-normal mt-2 text-gray-300">
              La página que buscas se ha perdido en el espacio
            </span>
          </h1>
          
          <p className="text-lg text-gray-300 mb-8">
            Parece que esta página ha sido abducida por aliens o simplemente nunca existió. 
            Pero no te preocupes, tenemos varias opciones para traerte de vuelta a la realidad.
          </p>

          {/* Buscador interactivo */}
          <motion.form 
            onSubmit={handleSearch}
            className="relative max-w-md mx-auto mb-12"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="¿Qué estabas buscando?"
                className="w-full px-6 py-4 pl-14 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/30 text-white placeholder-gray-400"
              />
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                Buscar
              </button>
            </div>
          </motion.form>
        </motion.div>

        {/* Acciones principales */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 group"
            >
              <Home size={20} />
              <span>Volver al Inicio</span>
              <Zap size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          </Link>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.reload()}
            className="flex items-center gap-3 px-8 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl font-semibold hover:bg-gray-700/50 transition-all duration-300 group"
          >
            <RefreshCw size={20} />
            <span>Recargar Página</span>
          </motion.button>
        </motion.div>

        {/* Enlaces sugeridos */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="w-full max-w-3xl"
        >
          <h3 className="text-xl font-semibold text-center mb-6 text-gray-300">
            O quizás estabas buscando:
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {suggestedLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <Link href={link.href}>
                  <motion.div
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: 'rgba(124, 58, 237, 0.1)'
                    }}
                    className="flex flex-col items-center justify-center p-6 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700 hover:border-purple-500 transition-all duration-300"
                  >
                    <div className="mb-3 p-3 rounded-lg bg-gray-700/50">
                      {link.icon}
                    </div>
                    <span className="font-medium">{link.label}</span>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Elemento decorativo flotante */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
          className="absolute bottom-10 left-10 opacity-20"
        >
          <div className="text-6xl">🛸</div>
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, -5, 5, 0]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: 0.5
          }}
          className="absolute top-10 right-10 opacity-20"
        >
          <div className="text-6xl">👽</div>
        </motion.div>

        {/* Mensaje divertido aleatorio */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-16 text-center text-gray-400 text-sm"
        >
          <p className="italic">
            "La creatividad es la inteligencia divirtiéndose" - Albert Einstein
          </p>
          <p className="mt-2">
            Mientras tanto, ¿por qué no disfrutas de estas partículas bailando?
          </p>
        </motion.div>
      </div>

      {/* Efecto de partículas en las esquinas */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
    </div>
  )
}