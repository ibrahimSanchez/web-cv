"use client"
import { ArrowRight } from "lucide-react"
import { useTheme } from "../../contexts/theme-provider"
import { translations } from "@/lib/i18n"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const { language } = useTheme()
  const t = translations[language]

  return (
    <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-b from-primary/5 to-background">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-primary font-semibold mb-4">{t.home.greeting}</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
          Tu Nombre Aquí
        </h1>
        <h2 className="text-2xl md:text-3xl text-foreground/80 mb-8">{t.home.title}</h2>
        <p className="text-lg text-foreground/70 mb-12 max-w-2xl mx-auto">{t.home.subtitle}</p>
        <div className="flex justify-center gap-4">
          <Button size="lg" className="gap-2">
            {t.home.cta}
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button size="lg" variant="outline">
            Mi CV
          </Button>
        </div>
      </div>
    </section>
  )
}
