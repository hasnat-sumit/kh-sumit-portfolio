export type Achievement = {
  title: string
  issuer: string
  year?: string
  link?: string
}

// No verified achievements or certifications yet — the section stays hidden
// until real entries are added here.
export const achievements: Achievement[] = []
