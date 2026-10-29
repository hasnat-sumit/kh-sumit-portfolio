export type JourneyStep = {
  title: string
  text: string
}

// Sequence reflects the actual repository history on github.com/hasnat-sumit
// (first HTML projects → React/TypeScript → Next.js apps → BazarDor).
export const journeySteps: JourneyStep[] = [
  {
    title: "Foundations",
    text: "Started from zero with HTML, CSS and JavaScript — course assignments, challenges and a first static portfolio.",
  },
  {
    title: "Thinking in components",
    text: "Moved into React and TypeScript, learning to build typed, reusable UI instead of one-off pages.",
  },
  {
    title: "Full-stack with Next.js",
    text: "Shipped apps like FitLog and Dev Stack Builder — routing, server rendering, Tailwind and modern tooling.",
  },
  {
    title: "Shipping real products",
    text: "Built BazarDor end to end: data modelling, REST endpoints, authentication and daily price flows.",
  },
  {
    title: "The goal",
    text: "Growing into a full-time software engineer — practising in public and building things people can use.",
  },
]
