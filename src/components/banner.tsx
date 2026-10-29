import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "cn";

const secondaryButton = cn(
  buttonVariants({ variant: "secondary" }),
  "h-11 border border-border px-6 text-base font-semibold md:h-12"
);

export function Banner() {
  return (
    <section className="px-4 py-12 md:px-10 md:py-15 lg:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">

        {/* Left: Text content */}
        <div className="flex min-w-0 flex-col justify-center text-center lg:text-left">

          <p className="text-xl font-semibold leading-tight tracking-tight md:text-7xl">
            Hello <span className="text-red-600">!</span> I&apos;m
          </p>

          <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight md:text-6xl xl:text-7xl">
            Kamrul Hasnat Sumit
          </h1>

          {/* Photo: mobile only, immediately after the name */}
          <div className="mx-auto mt-6 w-full max-w-[260px] sm:max-w-[300px] lg:hidden">
            <Image
              src="/images/hasnat.png"
              alt="Kamrul Hasnat Sumit"
              width={400}
              height={500}
              priority
              sizes="(max-width: 640px) 260px, 300px"
              className="h-auto w-full object-contain"
            />
          </div>

          {/* Remaining information */}
          <h2 className="mt-5">
            <span className="block text-xl text-[#4d94ff] md:text-2xl">
              Full Stack Developer
              <span className="hidden sm:inline"> || </span>
              <span className="block sm:inline">Nuclear Engineer</span>
              <br className="hidden sm:block" />
              <span className="block">Enthusiastic Photographer</span>
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg lg:mx-0">
            Building modern, responsive web applications with a focus on
            thoughtful design, performance, and user experience.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:gap-4 lg:justify-start">
            <a
              href="#about"
              className={cn(
                secondaryButton,
                "bg-blue-700 text-amber-50 hover:bg-blue-800"
              )}
            >
              Learn More
            </a>

            <a
              href="#contact"
              className={cn(
                secondaryButton,
                "bg-orange-700 text-amber-50 hover:bg-orange-800"
              )}
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right: Photo on desktop only */}
        <div className="hidden w-full items-center justify-center lg:flex lg:justify-end">
          <div className="relative w-full max-w-[420px] overflow-hidden rounded-2xl">
            <Image
              src="/images/hasnat.png"
              alt="Kamrul Hasnat Sumit"
              width={400}
              height={500}
              priority
              sizes="420px"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
}