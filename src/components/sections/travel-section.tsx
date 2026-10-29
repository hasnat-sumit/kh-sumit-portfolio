import Image from "next/image"
import { ArrowUpRightIcon, CameraIcon } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "cn"
import { travelEntries } from "@/content/travel"
import { Section } from "./section"

export function TravelSection() {
  return (
    <Section
      id="travel-journal"
      kicker="Travel Journal"
      title="Places, frames and stories"
      description="I'm an enthusiastic photographer. This is where my travel photo diary lives — destinations, dates and the small stories behind the frames."
      headerExtra={
        <a
          href="https://www.instagram.com/hasnat28__/"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "outline" }), "h-10 gap-1.5 border-border px-4 text-sm font-semibold")}
        >
          Photos on Instagram
          <ArrowUpRightIcon className="size-4" />
        </a>
      }
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {travelEntries.map((entry) => (
          <figure
            key={entry.id}
            className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-[#4d94ff]/40 hover:shadow-lg"
          >
            <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden border-b border-border bg-muted/30">
              {entry.image ? (
                <Image
                  src={entry.image.src}
                  alt={entry.image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <div className="flex flex-col items-center gap-2 text-muted-foreground/70">
                  <CameraIcon className="size-7" aria-hidden />
                  <span className="text-xs">Photo coming soon</span>
                </div>
              )}
            </div>
            <figcaption className="p-5">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="truncate text-sm font-semibold text-foreground">{entry.destination}</h3>
                <span className="shrink-0 text-xs text-muted-foreground">{entry.date}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{entry.story}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  )
}
