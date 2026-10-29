import Image from "next/image";
import { ArrowUpRightIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "cn";
import { profile } from "@/content/profile";
import { projects, type Project } from "@/content/projects";
import { Section } from "./section";

const stackChip =
  "rounded-md border border-border bg-muted/40 px-2 py-1 text-xs font-medium text-muted-foreground";

const linkButton = cn(
  buttonVariants({ variant: "secondary" }),
  "h-9 gap-1.5 border border-border px-3 text-sm font-semibold"
);

export function ProjectsSection() {
  return (
    <Section className="container mx-auto"
      id="projects"
      kicker="Featured Projects"
      title="Things I've built"
      description="Real applications I designed and shipped — start with BazarDor, a daily price tracker for Bangladesh."
      headerExtra={
        <a
          href={`${profile.githubUrl}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "h-10 gap-1.5 border-border px-4 text-sm font-semibold"
          )}
        >
          All repositories
          <ArrowUpRightIcon className="size-4" />
        </a>
      }
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-2">
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className={linkButton}
      >
        GitHub
        <ArrowUpRightIcon className="size-4" />
      </a>

      {project.live ? (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants(),
            "h-9 gap-1.5 bg-[#4d94ff] px-3 text-sm font-semibold text-neutral-950 hover:bg-[#4d94ff]/90"
          )}
        >
          Live demo
          <ArrowUpRightIcon className="size-4" />
        </a>
      ) : null}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors duration-300 hover:border-[#4d94ff]/40">
      {/* Project image */}
      <div className="relative flex h-48 shrink-0 items-center justify-center overflow-hidden border-b border-border bg-muted/30 p-5">
        {project.image ? (
          <Image
            src={project.image.src}
            alt={project.image.alt}
            width={project.image.width}
            height={project.image.height}
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
            className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        ) : project.visual === "stack-mock" ? (
          <StackMock />
        ) : (
          <div className="text-sm text-muted-foreground">
            Project preview
          </div>
        )}
      </div>

      {/* Project details */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-bold leading-snug tracking-tight">
          {project.bengaliName ? (
            <>
              {project.bengaliName}
              <span className="block mt-1 text-sm font-medium text-muted-foreground">
                {project.name}
              </span>
            </>
          ) : (
            project.name
          )}
        </h3>

        <p className="mt-2 text-sm font-medium text-muted-foreground">
          {project.tagline}
        </p>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {/* Technology stack */}
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li key={tech} className={stackChip}>
              {tech}
            </li>
          ))}
        </ul>

        {/* Project links */}
        <div className="mt-6">
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
}

const stackMockGroups = [
  { label: "Frontend", picks: ["React", "Next.js"] },
  { label: "Backend", picks: ["Node.js", "Express"] },
  { label: "Database", picks: ["MongoDB", "PostgreSQL"] },
  { label: "Tools", picks: ["Vite", "Git"] },
];

function StackMock() {
  return (
    <div
      className="grid w-full max-w-xs grid-cols-2 gap-2.5"
      aria-hidden="true"
    >
      {stackMockGroups.map((group, index) => (
        <div
          key={group.label}
          className={cn(
            "rounded-lg border bg-background/60 p-2.5",
            index === 0
              ? "border-[#4d94ff]/60"
              : "border-border"
          )}
        >
          <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            {group.label}
          </p>

          <div className="mt-1.5 flex flex-wrap gap-1">
            {group.picks.map((pick) => (
              <span
                key={pick}
                className="rounded bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground"
              >
                {pick}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}