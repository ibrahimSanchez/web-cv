import { Code, Database, Wrench } from "lucide-react"
import { SkillItem } from "./skill-item"
import { SkillCategory, Skills } from "@/interfaces/skill.interface"


export const SkillList = () => {

  const skills: Skills = {
    frontend: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 93 },
      { name: "React-native", level: 80 },
      { name: "Tailwind CSS", level: 92 },
      { name: "TypeScript / JavaScript", level: 90 },
    ],
    backend: [
      { name: "Node.js / Express / Nest.js", level: 88 },
      { name: "FastApi / DJango", level: 95 },
      { name: "REST APIs", level: 90 },
      { name: "PostgreSQL / Mongo DB / Cosmos DB", level: 85 },
      { name: "Python / TypeScript / JavaScript", level: 96 },
    ],
    tools: [
      { name: "Git / Github", level: 95 },
      { name: "Microsoft Azure", level: 78 },
      { name: "GitLab", level: 93 },
      { name: "Docker", level: 80 },
      { name: "CI/CD", level: 85 },
    ],
  }

  const categories: SkillCategory[] = [
    { icon: Code, label: "Frontend", items: skills.frontend, color: "from-blue-500 to-cyan-500" },
    { icon: Database, label: "Backend", items: skills.backend, color: "from-green-500 to-emerald-500" },
    { icon: Wrench, label: "Tools", items: skills.tools, color: "from-purple-500 to-pink-500" },
  ]

    return (
        <div className="grid lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            return (
                <SkillItem 
                    key={category.label} 
                    category={category}
                    categoryIndex={index}
                />
            )
          })}
        </div>

    )
}