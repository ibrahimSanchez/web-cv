import { LucideIcon } from "lucide-react";

export interface Skill {
  name: string;
  level: number;
}

export interface Skills {
  frontend: Skill[];
  backend: Skill[];
  tools: Skill[];
}

export interface SkillCategory {
  icon: LucideIcon;      
  label: string;
  items: Skill[];
  color: string;         
}
