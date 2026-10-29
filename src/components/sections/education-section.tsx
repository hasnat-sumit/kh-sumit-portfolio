import { educationEntries } from "@/content/education"
import { skillGroups } from "@/content/skills"
import { Section } from "./section"

// The full stack curriculum = the skills behind the journey (single source of truth: src/content/skills.ts).
const curriculumSkills = skillGroups.flatMap((group) => group.skills)

export function EducationSection() {
  return (
    <Section
      id="education"
      kicker="Education"
      title="From power plants to the web"
      description="Formal engineering training that shaped how I work — plus the full stack journey I'm on right now."
    >
      <div className="space-y-6 md:space-y-8">
        {educationEntries.map((entry) => {
          const Icon = entry.icon
          return (
            <div key={entry.program} className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
                <span
                  aria-hidden
                  className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#4d94ff]/10 text-[#4d94ff]"
                >
                  <Icon className="size-6" />
                </span>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <h3 className="text-xl font-bold tracking-tight md:text-2xl">{entry.program}</h3>
                    <span className="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground">
                      {entry.period}
                    </span>
                    {entry.ongoing ? (
                      <span className="rounded-full border border-[#4d94ff]/50 bg-[#4d94ff]/10 px-3 py-1 text-xs font-semibold text-[#4d94ff]">
                        In progress
                      </span>
                    ) : null}
                  </div>

                  <p className="mt-2 font-medium text-foreground">
                    {entry.institution}
                    {entry.location ? (
                      <span className="font-normal text-muted-foreground"> · {entry.location}</span>
                    ) : null}
                  </p>

                  {entry.note ? (
                    <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
                      {entry.note}
                    </p>
                  ) : null}

                  {entry.ongoing ? (
                    <div className="mt-5">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Now building with
                      </h4>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {curriculumSkills.map((skill) => (
                          <li
                            key={skill}
                            className="rounded-full border border-border bg-muted/40 px-3 py-1 text-sm text-muted-foreground transition-colors hover:border-[#4d94ff]/40 hover:text-foreground"
                          >
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
