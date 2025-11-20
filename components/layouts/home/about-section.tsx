"use client"
import { useTheme } from "../../contexts/theme-provider"
import { translations } from "@/lib/i18n"

export function AboutSection() {
  const { language } = useTheme()
  const t = translations[language]

  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
          <span className="w-12 h-1 bg-primary rounded"></span>
          {t.about.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-foreground/80 text-lg leading-relaxed">{t.about.description}</p>
            <p className="text-foreground/80 text-lg leading-relaxed">{t.about.background}</p>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-64 h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl border border-border"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
