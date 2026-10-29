import { skillGroups } from "@/content/skills"
import { Section } from "./section"

export function SkillsSection() {
  return (
    <Section
      id="skills"
      kicker="Technical Skills"
      title="Tools I work with"
      description="The stack behind my projects — pulled from my actual repositories, no invented proficiency levels."
    >
      <div className="overflow-hidden rounded-2xl border border-border bg-card">
        {skillGroups.map((group) => {
          const Icon = group.icon
          return (
            <div
              key={group.title}
              className="flex flex-col gap-3 border-b border-border p-5 last:border-0 md:flex-row md:items-center md:gap-8 md:p-6"
            >
              <div className="flex w-full shrink-0 items-center gap-2.5 md:w-52">
                <Icon className="size-4 text-[#4d94ff]" aria-hidden />
                <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">{group.title}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-border bg-muted/40 px-3 py-1 text-sm text-muted-foreground transition-colors hover:border-[#4d94ff]/40 hover:text-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
