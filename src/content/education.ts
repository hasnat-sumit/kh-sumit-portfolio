import type { LucideIcon } from "lucide-react"
import { CodeIcon, GraduationCapIcon } from "lucide-react"

export type EducationEntry = {
  icon: LucideIcon
  program: string
  institution: string
  location?: string
  period: string
  note?: string
  ongoing?: boolean
}

export const educationEntries: EducationEntry[] = [
  {
    icon: GraduationCapIcon,
    program: "Nuclear Power Plant Design, Operation and Maintenance Engineering",
    institution: "MEPhI, Moscow",
    location: "Moscow, Russia",
    period: "Completed 2022",
    note: "My engineering foundation in the design, operation and maintenance of nuclear power plants — systems thinking, safety-first habits and rigorous technical documentation that I bring into every line of code I write.",
  },
  {
    icon: CodeIcon,
    program: "Full Stack Web Development",
    institution: "Self-directed learning",
    period: "July 2026 — Present",
    ongoing: true,
    note: "Learning by building: shipping real projects — BazarDor, FitLog and Dev Stack Builder — with React, Next.js, TypeScript and MongoDB, while working toward a full-time software engineering role.",
  },
]
