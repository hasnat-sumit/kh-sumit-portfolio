import { experience } from "@/content/experience"
import { Section } from "./section"

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      kicker="Professional Experience"
      title="Where I've worked"
      description="Engineering, documentation and procurement — the professional roots behind my move into software."
    >
      <ol className="relative space-y-10 border-l border-border pl-6 md:space-y-12 md:pl-8">
        {experience.map((item) => (
          <li key={item.role} className="relative">
            <span
              aria-hidden
              className={
                item.current
                  ? "absolute -left-[30px] top-1.5 size-3 rounded-full bg-[#4d94ff] ring-4 ring-background md:-left-[38px]"
                  : "absolute -left-[31px] top-2 size-2.5 rounded-full border-2 border-muted-foreground bg-background md:-left-[39px]"
              }
            />
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <h3 className="text-lg font-semibold tracking-tight md:text-xl">{item.role}</h3>
              <span className="rounded-full border border-border bg-muted/50 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                {item.period}
              </span>
              {item.current ? (
                <span className="text-xs font-semibold uppercase tracking-wider text-[#4d94ff]">Now</span>
              ) : null}
            </div>
            {item.organization ? (
              <p className="mt-1 text-sm font-medium text-foreground/80">{item.organization}</p>
            ) : null}
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">{item.summary}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
