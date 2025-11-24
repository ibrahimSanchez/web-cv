"use client"

import { useTheme } from "@/components/contexts/theme-provider"
import { Button } from "@/components/ui/button"
import { translations } from "@/lib/i18n"
import { motion } from "framer-motion"
import { Send } from "lucide-react"
import { useState } from "react"

export const ContactForm = () => {

  const { language } = useTheme()
  const t = translations[language]
  

  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

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
)
}
