"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Sun, Moon, Globe } from "lucide-react"
import { useTheme } from "./contexts/theme-provider"
import { translations } from "@/lib/i18n"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const { theme, language, toggleTheme, toggleLanguage } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const t = translations[language]

  const navItems = [
    { label: t.nav.home, href: "/#home" },
    { label: t.nav.about, href: "/#about" },
    { label: t.nav.skills, href: "/#skills" },
    { label: t.nav.projects, href: "/#projects" },
    { label: t.nav.contact, href: "/#contact" },
    { label: "Admin", href: "/admin" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0
      setScrollProgress(Math.min(Math.max(progress, 0), 100))
    }

    handleScroll()
    
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-background/80 border-b border-border z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/#home"
            className="text-2xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent"
          >
            Dev
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
              {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleLanguage} className="rounded-full">
              <Globe className="w-5 h-5" />
            </Button>
              <span className="text-xs ml-1">{language.toUpperCase()}</span>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Progress Bar - MEJORADA */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-border/50 transition-colors duration-300">
        <div 
          className="h-full transition-all duration-150 ease-out bg-linear-to-r from-primary via-accent to-cyan-400 relative overflow-hidden"
          style={{ width: `${scrollProgress}%` }}
        >
          <div 
            className={`absolute inset-0 ${
              scrollProgress > 0 
                ? 'bg-linear-to-r from-transparent via-white/30 to-transparent animate-pulse' 
                : ''
            }`} 
          />
          
          {scrollProgress > 5 && (
            <div className="absolute -top-8 right-0 transform translate-x-1/2 px-2 py-1 rounded-md text-xs font-semibold transition-all duration-200 bg-background/90 text-foreground border border-border shadow-lg backdrop-blur-sm">
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45 bg-background border-r border-b border-border" />
              {Math.round(scrollProgress)}%
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}