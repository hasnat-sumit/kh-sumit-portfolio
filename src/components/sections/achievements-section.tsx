import { AwardIcon } from "lucide-react"
import { achievements } from "@/content/achievements"
import { Section } from "./section"

export function AchievementsSection() {
  // Nothing verified yet — the section is omitted entirely until real entries exist.
  if (achievements.length === 0) {
    return null
  }

  return (
    <Section
      id="achievements"
      kicker="Achievements & Certifications"
      title="Verified milestones"
    >
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {achievements.map((achievement) => (
          <li
            key={achievement.title}
            className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-[#4d94ff]/40"
          >
            <span
              aria-hidden
              className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#4d94ff]/10 text-[#4d94ff]"
            >
              <AwardIcon className="size-5" />
            </span>
            <div className="min-w-0">
              <h3 className="text-sm font-semibold text-foreground">{achievement.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {achievement.issuer}
                {achievement.year ? ` · ${achievement.year}` : ""}
              </p>
              {achievement.link ? (
                <a
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm font-medium text-[#4d94ff] hover:underline"
                >
                  View credential
                </a>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
