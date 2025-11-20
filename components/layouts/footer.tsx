"use client"
import { useTheme } from "../contexts/theme-provider"
import { translations } from "@/lib/i18n"

export function Footer() {
  const { language } = useTheme()
  const t = translations[language]

  return (
    <footer className="bg-primary/10 border-t border-border py-8 px-4">
      <div className="max-w-6xl mx-auto text-center text-foreground/60">
        <p>
          &copy; {t.footer.year} - {t.footer.copyright}
        </p>
      </div>
    </footer>
  )
}
