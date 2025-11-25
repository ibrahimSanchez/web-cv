
import { useTheme } from "@/components/contexts/theme-provider"
import { translations } from "@/lib/i18n"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"

export const ContactInfo = () => {

  const { language } = useTheme()
  const t = translations[language]


  const socials = [
    { icon: Github, href: "#", label: "GitHub", color: "hover:bg-gray-900 hover:text-white" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-600 hover:text-white" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-sky-500 hover:text-white" },
  ]


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
                    sanchezibrahim296@email.com
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
                    +53 54644183
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
                  <p className="text-foreground/70 text-lg">La Habana, Cuba</p>
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
  )
}
