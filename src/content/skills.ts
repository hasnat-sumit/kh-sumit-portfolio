import type { LucideIcon } from "lucide-react"
import { CodeIcon, DatabaseIcon, LayersIcon, ServerIcon, TerminalIcon } from "lucide-react"

export type SkillGroup = {
  title: string
  icon: LucideIcon
  skills: string[]
}

// Every entry below is backed by the actual repositories on github.com/hasnat-sumit
// or by this codebase. No proficiency levels — just the tools used.
export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    icon: CodeIcon,
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    title: "Backend",
    icon: ServerIcon,
    skills: ["REST APIs", "Better Auth"],
  },
  {
    title: "Databases",
    icon: DatabaseIcon,
    skills: ["MongoDB"],
  },
  {
    title: "Styling",
    icon: LayersIcon,
    skills: ["Tailwind CSS", "daisyUI", "shadcn/ui"],
  },
  {
    title: "Developer Tools",
    icon: TerminalIcon,
    skills: ["Git & GitHub", "npm", "ESLint", "Vite"],
  },
]
