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
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: Text content */}
        <div className="flex min-w-0 flex-col justify-center text-center lg:text-left">
          <p className="text-xl  md:text-7xl font-semibold leading-tight tracking-tight">
            Hello <span className="text-red-600">!</span>  I&apos;m
          </p>

          {/* <p className="mt-3 text-3xl md:text-5xl">I&apos;m</p> */}

          <h1 className=" text-4xl font-bold leading-tight tracking-tight md:text-6xl xl:text-7xl">
            Kamrul Hasnat Sumit
            {/* KAMRUL HASNAT SUMIT */}
          </h1>
          <h2>
            <span className="mt-2 block text-[#4d94ff] text-2xl">
              Full Stack Developer || Nuclear Engineer <br /> Enthusiastic Photographer
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg lg:mx-0">
            Building modern, responsive web applications with a focus on
            thoughtful design, performance, and user experience.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:gap-4 lg:justify-start">
            {/* <a
              href="#projects"
              className={cn(
                buttonVariants(),
                "h-11 bg-[#4d94ff] px-6 text-base font-semibold text-neutral-950 hover:bg-[#4d94ff]/90 md:h-12"
              )}
            >
              Projects
            </a> */}

            <a href="#about" className={cn(secondaryButton, "bg-blue-700 text-amber-50")}>
              Learn More
            </a>

            <a href="#contact" className={cn(secondaryButton, "bg-orange-700 text-amber-50")}>
              Contact Me
            </a>
          </div>
        </div>

        {/* Right: Profile photo */}
        <div className="flex w-full items-center justify-center lg:justify-end">
          <div className="relative w-full max-w-[300px] overflow-hidden rounded-2xl sm:max-w-[360px] md:max-w-[400px] lg:max-w-[420px]">
            <Image
              src="/images/hasnat.png"
              alt="Kamrul Hasnat Sumit"
              width={400}
              height={500}
              priority
              sizes="(max-width: 640px) 300px, (max-width: 1024px) 360px, 420px"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}