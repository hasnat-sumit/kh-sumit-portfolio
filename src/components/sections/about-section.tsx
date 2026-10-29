import { profile } from "@/content/profile"
import { Section } from "./section"

const facts = [
  { term: "Based in", detail: profile.location },
  { term: "Current role", detail: "Documentation Engineer at RNPP" },
  { term: "Education", detail: "MEPhI, Moscow — 2022" },
  { term: "Focus", detail: "React, Next.js & TypeScript" },
  { term: "Also", detail: "Writing & photography" },
]

export function AboutSection() {
  return (
    <Section className="container mx-auto"
      id="about"
      kicker="About Me"
      title="From nuclear engineering to software"
      description="Hi — I'm Hasnat (Kamrul Hasnat Sumit). Here's the short version of where I've been and where I'm going."
    >
      <div className="grid gap-10 lg:grid-cols-3 lg:gap-16 container mx-auto">
        <div className="space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg lg:col-span-2">
          <p>
            By day I work as a <strong className="font-semibold text-foreground">Documentation Engineer at the Rooppur Nuclear Power Plant</strong>{" "}
            in Pabna, Bangladesh — turning complex engineering information into documents people can actually rely on.
            Documentation taught me the habit that matters most in software too: make things clear for the next person.
          </p>
          <p>
            In 2022 I completed my <strong className="font-semibold text-foreground">Nuclear Power Plant Design, Operation and Maintenance Engineering</strong>{" "}
            studies at MEPhI in Moscow. Since then I&apos;ve spent 3.5 years in procurement and six months in human resources —
            roles that showed me how real projects get specified, documented and delivered.
          </p>
          <p>
            These days I write code as often as I write documents. I&apos;m learning web development by shipping real projects —
            a market-price tracker for Bangladesh, a workout planner, and this portfolio — while working toward a full-time
            role as a <strong className="font-semibold text-foreground">software engineer</strong>.
          </p>
          <p>Outside the screen, you&apos;ll find me writing or out with a camera.</p>
        </div>

        <dl className="self-start rounded-2xl border border-border bg-card p-6">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Quick facts</h3>
          <div className="mt-4 space-y-4">
            {facts.map((fact) => (
              <div key={fact.term} className="border-b border-border/60 pb-4 last:border-0 last:pb-0">
                <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{fact.term}</dt>
                <dd className="mt-1 text-sm font-medium text-foreground">{fact.detail}</dd>
              </div>
            ))}
          </div>
        </dl>
      </div>
    </Section>
  )
}
