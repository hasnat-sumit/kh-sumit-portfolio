import Image from "next/image"
import { ArrowUpRightIcon, CheckIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "cn"
import { profile } from "@/content/profile"
import { projects, type Project } from "@/content/projects"
import { Section } from "./section"

const stackChip = "rounded-md border border-border bg-muted/40 px-2 py-1 text-xs font-medium text-muted-foreground"
const linkButton = cn(buttonVariants({ variant: "secondary" }), "h-9 gap-1.5 border border-border px-4 text-sm font-semibold")

export function ProjectsSection() {
  const [flagship, ...others] = projects

  return (
    <Section
      id="projects"
      kicker="Featured Projects"
      title="Things I've built"
      description="Real applications I designed and shipped — start with BazarDor, a daily price tracker for Bangladesh."
      headerExtra={
        <a
          href={`${profile.githubUrl}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "outline" }), "h-10 gap-1.5 border-border px-4 text-sm font-semibold")}
        >
          All repositories
          <ArrowUpRightIcon className="size-4" />
        </a>
      }
    >
      <div className="space-y-6 md:space-y-8">
        <FlagshipCard project={flagship} />

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {others.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </Section>
  )
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className={linkButton}
      >
        View on GitHub
        <ArrowUpRightIcon className="size-4" />
      </a>
      {project.live ? (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants(), "h-9 gap-1.5 bg-[#4d94ff] px-4 text-sm font-semibold text-neutral-950 hover:bg-[#4d94ff]/90")}
        >
          Live demo
          <ArrowUpRightIcon className="size-4" />
        </a>
      ) : null}
    </div>
  )
}

function FlagshipCard({ project }: { project: Project }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-card transition-colors duration-300 hover:border-[#4d94ff]/40">
      <div className="grid lg:grid-cols-2">
        <div className="p-6 md:p-8 lg:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="outline" className="border-[#4d94ff]/50 text-[#4d94ff]">
              Flagship
            </Badge>
            <span className="text-sm text-muted-foreground">{project.tagline}</span>
          </div>

          <h3 className="mt-5 text-3xl font-bold tracking-tight md:text-4xl">
            {project.bengaliName ?? project.name}
            {project.bengaliName ? (
              <span className="mt-1 block text-lg font-medium text-muted-foreground md:text-xl">{project.name}</span>
            ) : null}
          </h3>

          <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">{project.description}</p>

          <h4 className="mt-7 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Key features</h4>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckIcon className="mt-0.5 size-4 shrink-0 text-[#4d94ff]" aria-hidden />
                {feature}
              </li>
            ))}
          </ul>

          <h4 className="mt-7 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Built with</h4>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li key={tech} className={stackChip}>
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-7">
            <ProjectLinks project={project} />
          </div>
        </div>

        <div className="relative flex min-h-60 items-center justify-center border-t border-border bg-muted/30 p-8 lg:border-t-0 lg:border-l">
          {project.image ? (
            <Image
              src={project.image.src}
              alt={project.image.alt}
              width={project.image.width}
              height={project.image.height}
              className="max-h-60 w-auto object-contain transition-transform duration-300 group-hover:scale-105 md:max-h-72"
            />
          ) : null}
        </div>
      </div>
    </article>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors duration-300 hover:border-[#4d94ff]/40">
      <div className="relative flex h-44 items-center justify-center overflow-hidden border-b border-border bg-muted/30 md:h-48">
        {project.image ? (
          <Image
            src={project.image.src}
            alt={project.image.alt}
            width={project.image.width}
            height={project.image.height}
            className="max-h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-105 md:max-h-32"
          />
        ) : null}
        {project.visual === "stack-mock" ? <StackMock /> : null}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold tracking-tight">
          {project.bengaliName ? (
            <>
              {project.bengaliName}{" "}
              <span className="font-medium text-muted-foreground">· {project.name}</span>
            </>
          ) : (
            project.name
          )}
        </h3>
        <p className="mt-1 text-sm font-medium text-muted-foreground">{project.tagline}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li key={tech} className={stackChip}>
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  )
}

const stackMockGroups = [
  { label: "Frontend", picks: ["React", "Next.js"] },
  { label: "Backend", picks: ["Node.js", "Express"] },
  { label: "Database", picks: ["MongoDB", "PostgreSQL"] },
  { label: "Tools", picks: ["Vite", "Git"] },
]

function StackMock() {
  return (
    <div className="grid w-full max-w-xs grid-cols-2 gap-2.5" aria-hidden>
      {stackMockGroups.map((group, index) => (
        <div
          key={group.label}
          className={cn(
            "rounded-lg border bg-background/60 p-2.5",
            index === 0 ? "border-[#4d94ff]/60" : "border-border"
          )}
        >
          <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{group.label}</p>
          <div className="mt-1.5 flex flex-wrap gap-1">
            {group.picks.map((pick) => (
              <span key={pick} className="rounded bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground">
                {pick}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
