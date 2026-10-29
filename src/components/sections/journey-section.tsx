import { journeySteps } from "@/content/journey"
import { Section } from "./section"

export function JourneySection() {
  return (
    <Section
      id="journey"
      kicker="Development Journey"
      title="Becoming a software engineer"
      description="A deliberate transition — one real project at a time."
    >
      <ol className="relative grid gap-8 lg:grid-cols-5 lg:gap-6">
        {/* Connector line above the steps on large screens */}
        <span
          aria-hidden
          className="absolute inset-x-0 top-0 hidden border-t border-dashed border-border lg:block"
        />
        {journeySteps.map((step, index) => (
          <li key={step.title} className="relative lg:pt-9">
            <span
              aria-hidden
              className="absolute left-0 top-0 hidden size-3 -translate-y-1/2 rounded-full bg-[#4d94ff] ring-4 ring-background lg:block"
            />
            <span className="text-xs font-semibold tracking-wider text-[#4d94ff]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-2 text-base font-semibold tracking-tight md:text-lg">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
