import Image from "next/image"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "cn"

const secondaryButton = cn(
  buttonVariants({ variant: "secondary" }),
  "h-11 border border-border px-6 text-base font-semibold md:h-12"
)

export function Banner() {
  return (
    <section className="px-4 py-14 md:px-10 md:py-20">
      <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-14">
        <div className="w-full min-w-0">
          <p className="text-xl text-muted-foreground md:text-2xl">Hi, I&apos;m</p>

          <h1 className="mt-4 text-5xl font-bold leading-[1.05] tracking-tight md:mt-5 md:text-6xl lg:text-7xl">
            Kamrul Hasnat Sumit
            <span className="block text-[#4d94ff]">Full Stack Developer</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground md:mt-10 md:text-xl">
            I build reliable, scalable full-stack products using clean interfaces and strong test
            practices. I enjoy working across the stack, designing clean service boundaries, and
            maintaining production codebases.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4 md:gap-5">
            <a
              href="#projects"
              className={cn(
                buttonVariants(),
                "h-11 bg-[#4d94ff] px-6 text-base font-semibold text-neutral-950 hover:bg-[#4d94ff]/90 md:h-12"
              )}
            >
              Projects
            </a>
            <a href="#resume" className={secondaryButton}>
              Resume
            </a>
            <a href="#contact" className={secondaryButton}>
              Contact Me
            </a>
          </div>
        </div>

        <div className="relative w-full max-w-xs shrink-0 self-center sm:max-w-sm lg:w-auto lg:max-w-none xl:w-[375px]">
          <Image
            src="/images/hasnat.png"
            alt="Kamrul Hasnat Sumit"
            width={375}
            height={427}
            priority
            sizes="(max-width: 640px) 320px, (max-width: 1024px) 384px, 375px"
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  )
}
