"use client"
import { Code, Database, Wrench } from "lucide-react"
import { useTheme } from "../../contexts/theme-provider"
import { translations } from "@/lib/i18n"

export function SkillsSection() {
  const { language } = useTheme()
  const t = translations[language]

  const skills = {
    frontend: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Next.js", level: 93 },
    ],
    backend: [
      { name: "Node.js", level: 88 },
      { name: "PostgreSQL", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "Authentication", level: 87 },
    ],
    tools: [
      { name: "Git", level: 92 },
      { name: "Docker", level: 80 },
      { name: "CI/CD", level: 85 },
      { name: "Figma", level: 78 },
    ],
  }

  const categories = [
    { icon: Code, label: "Frontend", items: skills.frontend },
    { icon: Database, label: "Backend", items: skills.backend },
    { icon: Wrench, label: "Tools", items: skills.tools },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-primary/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
          <span className="w-12 h-1 bg-primary rounded"></span>
          {t.skills.title}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <div key={category.label} className="bg-background rounded-xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.label}</h3>
                </div>

                <div className="space-y-4">
                  {category.items.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-sm">{skill.name}</span>
                        <span className="text-sm text-foreground/60">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-border rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
