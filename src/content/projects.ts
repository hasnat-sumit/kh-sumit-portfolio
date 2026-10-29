export type ProjectImage = {
  src: string
  alt: string
  width: number
  height: number
}

export type Project = {
  slug: string
  name: string
  bengaliName?: string
  tagline: string
  description: string
  features: string[]
  stack: string[]
  github: string
  live?: string
  image?: ProjectImage
  visual?: "stack-mock"
  flagship?: boolean
}

// Descriptions, features and stacks come from each repository's README.
export const projects: Project[] = [
  {
    slug: "bazardor",
    name: "BazarDor",
    bengaliName: "বাজার দর",
    tagline: "Bangladesh daily market price tracker",
    description:
      "A web application that helps people in Bangladesh check the latest prices of everyday essentials in one place — explore product prices, compare daily price changes, and see which products are becoming more or less expensive.",
    features: [
      "Daily price tracking with previous-price comparison",
      "Biggest price increases and decreases at a glance",
      "Categories from rice and lentils to fish, meat and spices",
      "Product detail pages with market-wise prices",
      "Authentication with registration, sign-in and profiles",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "daisyUI", "MongoDB", "Better Auth", "REST API"],
    github: "https://github.com/hasnat-sumit/bazar-dor-website",
    image: {
      src: "/images/projects/bazardor-hero.png",
      alt: "BazarDor illustration of a basket full of fresh fruit and vegetables",
      width: 315,
      height: 263,
    },
    flagship: true,
  },
  {
    slug: "fitlog",
    name: "FitLog",
    tagline: "Workout library & daily exercise planner",
    description:
      "A workout tracking application that helps you build consistency, discover exercises and log daily progress — turning intention and action into an accurate record of your fitness journey.",
    features: [
      "Exercise library by muscle group, equipment and difficulty",
      "Daily routine planner — today's plan or save for later",
      "Estimated calorie burn and duration tracking",
      "Step-by-step sets, reps and equipment guides",
      "High-contrast dark-mode UI",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "daisyUI"],
    github: "https://github.com/hasnat-sumit/assignment6-fit-log-website",
    image: {
      src: "/images/projects/fitlog-banner.png",
      alt: "FitLog illustration of an arm workout on a preacher curl bench",
      width: 334,
      height: 334,
    },
  },
  {
    slug: "dev-stack-builder",
    name: "Dev Stack Builder",
    tagline: "Compose the right stack for your project",
    description:
      "A React + TypeScript app where you browse technologies and build a custom tech stack by selecting and deselecting items — selections update live and can be removed one by one.",
    features: [
      "Toggle technologies in and out of your stack",
      "Live stack preview as you pick",
      "Remove any item without resetting the rest",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    github: "https://github.com/hasnat-sumit/dev-stack-builder-website",
    visual: "stack-mock",
  },
]
