export type ExperienceItem = {
  role: string
  organization?: string
  period: string
  summary: string
  current?: boolean
}

// Roles and durations from Hasnat's GitHub profile README; no dates are
// invented — durations are shown exactly as stated there.
export const experience: ExperienceItem[] = [
  {
    role: "Documentation Engineer",
    organization: "Rooppur Nuclear Power Plant (RNPP) · Pabna, Bangladesh",
    period: "Current",
    current: true,
    summary:
      "Preparing and managing technical documentation for Bangladesh's first nuclear power plant — keeping engineering records clear, accurate and ready for review.",
  },
  {
    role: "Procurement Specialist",
    period: "3.5 years",
    summary:
      "End-to-end procurement work: specifications, vendor correspondence and purchase documentation kept accurate through the whole buying cycle for engineering projects.",
  },
  {
    role: "Human Resources Specialist",
    period: "6 months",
    summary:
      "Day-to-day HR operations — employee records, internal coordination and communication.",
  },
]
