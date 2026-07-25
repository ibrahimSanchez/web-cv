// skill.interface.ts
export interface Skill {
  name: string
  // level: number - removed
}

export interface Skills {
  frontend: Skill[]
  backend: Skill[]
  tools: Skill[]
}

export interface SkillCategory {
  icon: any
  label: string
  items: Skill[]
  color: string
}