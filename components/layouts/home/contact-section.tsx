"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, Github, Linkedin, Twitter } from "lucide-react"
import { useTheme } from "../../contexts/theme-provider"
import { translations } from "@/lib/i18n"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  const { language } = useTheme()
  const t = translations[language]
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Formulario enviado:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  const socials = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ]

  return (
    <section id="contact" className="py-20 px-4 bg-primary/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 flex items-center gap-3">
          <span className="w-12 h-1 bg-primary rounded"></span>
          {t.contact.title}
        </h2>
        <p className="text-foreground/70 mb-12 text-lg">{t.contact.subtitle}</p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="p-3 bg-primary/10 rounded-lg h-fit">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">{t.contact.email}</h3>
                <a href="mailto:tu@email.com" className="text-foreground/70 hover:text-primary transition-colors">
                  tu@email.com
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="p-3 bg-primary/10 rounded-lg h-fit">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">{t.contact.phone}</h3>
                <a href="tel:+34123456789" className="text-foreground/70 hover:text-primary transition-colors">
                  +34 123 456 789
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">{t.contact.followMe}</h3>
              <div className="flex gap-4">
                {socials.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="p-3 bg-primary/10 rounded-lg hover:bg-primary hover:text-background transition-colors"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Tu nombre"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              name="email"
              placeholder="Tu email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              name="message"
              placeholder="Tu mensaje"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
            <Button type="submit" size="lg" className="w-full">
              {t.contact.sendMessage}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
