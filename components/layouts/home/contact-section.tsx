"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, Github, Linkedin, Twitter, Send, MapPin, MessageCircle } from "lucide-react"
import { useTheme } from "../../contexts/theme-provider"
import { translations } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

export function ContactSection() {
  const { language } = useTheme()
  const t = translations[language]
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envío del formulario
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    console.log("Formulario enviado:", formData)
    setFormData({ name: "", email: "", message: "" })
    setSubmitted(true)
    setIsSubmitting(false)
    
    // Resetear el estado de enviado después de 3 segundos
    setTimeout(() => setSubmitted(false), 3000)
  }

  const socials = [
    { icon: Github, href: "#", label: "GitHub", color: "hover:bg-gray-900 hover:text-white" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-600 hover:text-white" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-sky-500 hover:text-white" },
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  }

  const cardHoverVariants = {
    rest: { scale: 1, y: 0 },
    hover: { 
      scale: 1.05, 
      y: -5,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 20
      }
    }
  }

  return (
    <section id="contact" className="py-20 px-4 bg-primary/5 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        ref={ref}
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              animate={{ rotate: [0, 180, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <MessageCircle className="w-6 h-6 text-primary" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              {t.contact.title}
            </h2>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Send className="w-6 h-6 text-accent" />
            </motion.div>
          </div>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Información de contacto */}
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.div
              variants={cardHoverVariants}
              initial="rest"
              whileHover="hover"
              className="bg-card rounded-2xl p-6 border border-border shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex gap-4 items-start">
                <motion.div 
                  className="p-3 bg-linear-to-br from-primary to-accent rounded-xl text-white"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Mail className="w-6 h-6" />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{t.contact.email}</h3>
                  <motion.a 
                    href="mailto:tu@email.com" 
                    className="text-foreground/70 hover:text-primary transition-colors text-lg"
                    whileHover={{ x: 5 }}
                  >
                    tu@email.com
                  </motion.a>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={cardHoverVariants}
              initial="rest"
              whileHover="hover"
              className="bg-card rounded-2xl p-6 border border-border shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex gap-4 items-start">
                <motion.div 
                  className="p-3 bg-linear-to-br from-primary to-accent rounded-xl text-white"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Phone className="w-6 h-6" />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{t.contact.phone}</h3>
                  <motion.a 
                    href="tel:+34123456789" 
                    className="text-foreground/70 hover:text-primary transition-colors text-lg"
                    whileHover={{ x: 5 }}
                  >
                    +34 123 456 789
                  </motion.a>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={cardHoverVariants}
              initial="rest"
              whileHover="hover"
              className="bg-card rounded-2xl p-6 border border-border shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex gap-4 items-start">
                <motion.div 
                  className="p-3 bg-linear-to-br from-primary to-accent rounded-xl text-white"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <MapPin className="w-6 h-6" />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Ubicación</h3>
                  <p className="text-foreground/70 text-lg">Madrid, España</p>
                </div>
              </div>
            </motion.div>

            {/* Redes sociales */}
            <motion.div variants={itemVariants}>
              <h3 className="font-semibold text-xl mb-6 text-center">{t.contact.followMe}</h3>
              <div className="flex justify-center gap-4">
                {socials.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className={`p-4 bg-card rounded-xl border border-border hover:shadow-lg transition-all duration-300 ${social.color}`}
                      aria-label={social.label}
                      variants={itemVariants}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Formulario de contacto */}
          <motion.div variants={itemVariants}>
            <motion.form 
              onSubmit={handleSubmit} 
              className="space-y-6 bg-card rounded-2xl p-8 border border-border shadow-lg hover:shadow-xl transition-all duration-300"
              initial="rest"
              whileHover="hover"
              variants={cardHoverVariants}
            >
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground/80">
                  Tu nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="¿Cómo te llamas?"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground/80">
                  Tu email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground/80">
                  Tu mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Cuéntame en qué puedo ayudarte..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none transition-all duration-300"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full gap-3 relative overflow-hidden"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <Send className="w-5 h-5" />
                      </motion.div>
                    ) : submitted ? (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="flex items-center gap-2"
                      >
                        <motion.div
                          animate={{ 
                            scale: [1, 1.2, 1],
                            rotate: [0, 10, -10, 0]
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          ✓
                        </motion.div>
                        ¡Mensaje Enviado!
                      </motion.div>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        {t.contact.sendMessage}
                      </>
                    )}
                    
                    {/* Efecto de fondo animado */}
                    <motion.div
                      className="absolute inset-0 bg-linear-to-r from-primary to-accent opacity-0 hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ opacity: 1 }}
                    />
                  </Button>
                </motion.div>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}