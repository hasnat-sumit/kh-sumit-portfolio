import { GraduationCapIcon } from "lucide-react"
import { education } from "@/content/education"
import { Section } from "./section"

export function EducationSection() {
  return (
    <Section className="container mx-auto"
      id="education"
      kicker="Education"
      title="Nuclear power plant engineering"
      description="Formal training that shaped how I approach systems, safety and documentation."
    >
      <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
          <span
            aria-hidden
            className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#4d94ff]/10 text-[#4d94ff]"
          >
            <GraduationCapIcon className="size-6" />
          </span>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <h3 className="text-xl font-bold tracking-tight md:text-2xl">{education.program}</h3>
              <span className="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground">
                {education.period}
              </span>
            </div>
            <p className="mt-2 font-medium text-foreground">
              {education.institution} <span className="font-normal text-muted-foreground">· {education.location}</span>
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">{education.note}</p>
          </div>
        </div>
      </div>
    </Section>
  )
}
