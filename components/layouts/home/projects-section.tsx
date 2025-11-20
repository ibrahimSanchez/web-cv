"use client"
import { ExternalLink, Github } from "lucide-react"
import { useTheme } from "../../contexts/theme-provider"
import { translations } from "@/lib/i18n"
import { Button } from "@/components/ui/button"

export function ProjectsSection() {
  const { language } = useTheme()
  const t = translations[language]

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Una plataforma de comercio electrónico completa con carrito de compras, pagos integrados y panel de administración.",
      image: "/ecommerce-platform.jpg",
      technologies: ["React", "Next.js", "Stripe", "PostgreSQL"],
      link: "#",
      github: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Aplicación de gestión de tareas con autenticación, colaboración en tiempo real y análisis de productividad.",
      image: "/task-management-board.png",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind"],
      link: "#",
      github: "#",
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description: "Dashboard interactivo para visualizar datos con gráficos en tiempo real y exportación de reportes.",
      image: "/analytics-dashboard.png",
      technologies: ["Next.js", "Chart.js", "TypeScript", "PostgreSQL"],
      link: "#",
      github: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
          <span className="w-12 h-1 bg-primary rounded"></span>
          {t.projects.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative overflow-hidden h-48 bg-primary/5">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-foreground/70 mb-4 text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button size="sm" variant="default" className="gap-2 flex-1">
                    <ExternalLink className="w-4 h-4" />
                    {t.projects.viewProject}
                  </Button>
                  <Button size="sm" variant="outline" className="gap-2 bg-transparent">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
