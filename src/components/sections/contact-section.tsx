import { ArrowUpRightIcon, MailIcon, MapPinIcon } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "cn"
import { profile } from "@/content/profile"
import { Section } from "./section"

export function ContactSection() {
  return (
    <Section className="container mx-auto"
      id="contact"
      kicker="Contact"
      title="Let's work together"
      description="I'm open to software engineering opportunities and interesting collaborations. The fastest way to reach me is email."
    >
      <div className="rounded-2xl border border-border bg-card p-6 md:p-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="min-w-0">
            <a
              href={`mailto:${profile.email}`}
              className="inline-block break-all text-2xl font-semibold tracking-tight underline decoration-[#4d94ff]/40 underline-offset-8 transition-colors hover:decoration-[#4d94ff] md:text-3xl"
            >
              {profile.email}
            </a>
            <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPinIcon className="size-4" aria-hidden />
              {profile.location}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className={cn(
                buttonVariants(),
                "h-11 gap-2 bg-[#4d94ff] px-5 text-base font-semibold text-neutral-950 hover:bg-[#4d94ff]/90"
              )}
            >
              <MailIcon className="size-4" />
              Email me
            </a>

            {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "secondary" }),
                  "h-11 gap-2 border border-border px-5 text-base font-semibold"
                )}
              >
                {social.label}
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}

            {profile.resumeUrl ? (
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "secondary" }),
                  "h-11 gap-2 border border-border px-5 text-base font-semibold"
                )}
              >
                Résumé
                <ArrowUpRightIcon className="size-4" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </Section>
  )
}
