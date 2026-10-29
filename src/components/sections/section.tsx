import type { ReactNode } from "react"
import { cn } from "cn"

type SectionProps = {
  id: string
  kicker: string
  title: ReactNode
  description?: ReactNode
  headerExtra?: ReactNode
  children: ReactNode
  className?: string
}

export function Section({ id, kicker, title, description, headerExtra, children, className }: SectionProps) {
  return (
    <section 
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn("scroll-mt-20 border-t border-border px-4 py-16 md:px-10 md:py-24", className)}
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4d94ff] md:text-sm">{kicker}</p>
          <h2 id={`${id}-title`} className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">{description}</p>
          ) : null}
        </div>
        {headerExtra ? <div className="shrink-0">{headerExtra}</div> : null}
      </div>
      <div className="mt-10 md:mt-14">{children}</div>
    </section>
  )
}
