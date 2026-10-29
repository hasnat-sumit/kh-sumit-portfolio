import { NewspaperIcon } from "lucide-react"
import { posts } from "@/content/posts"
import { Section } from "./section"

export function BlogSection() {
  return (
    <Section className="container mx-auto"
      id="blog"
      kicker="Writing"
      title="Notes from the build"
      description="Articles about JavaScript, React, Next.js and the lessons that come from shipping real projects."
    >
      {posts.length === 0 ? (
        <div className="flex flex-col items-start gap-4 rounded-2xl border border-dashed border-border p-6 sm:flex-row sm:items-center md:p-8">
          <span
            aria-hidden
            className="flex size-11 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground"
          >
            <NewspaperIcon className="size-5" />
          </span>
          <div>
            <p className="font-semibold text-foreground">First articles are in progress</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Nothing published yet — I&apos;m drafting my first posts now. This section lights up as soon as they ship.
            </p>
          </div>
        </div>
      ) : (
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <li
              key={post.slug}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-[#4d94ff]/40"
            >
              <p className="text-xs text-muted-foreground">
                {post.date}
                {post.readingTime ? ` · ${post.readingTime}` : ""}
              </p>
              <h3 className="mt-2 text-lg font-semibold tracking-tight text-foreground">{post.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{post.description}</p>
            </li>
          ))}
        </ul>
      )}
    </Section>
  )
}
