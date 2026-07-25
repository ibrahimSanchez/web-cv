import { Code, Database, Wrench } from "lucide-react"
import { SkillItem } from "./skill-item"
import { SkillCategory, Skills } from "@/src/interfaces/skill.interface"

export const SkillList = () => {

  const skills: Skills = {
    frontend: [
      { name: "React" },
      { name: "Next.js" },
      { name: "React-native" },
      { name: "Tailwind CSS" },
      { name: "TypeScript / JavaScript" },
    ],
    backend: [
      { name: "Node.js / Express / Nest.js" },
      { name: "FastApi / Django" },
      { name: "REST APIs" },
      { name: "PostgreSQL / Mongo DB / Cosmos DB" },
      { name: "Python / TypeScript / JavaScript" },
    ],
    tools: [
      { name: "Git / Github" },
      { name: "Microsoft Azure" },
      { name: "GitLab" },
      { name: "Docker" },
      { name: "CI/CD" },
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