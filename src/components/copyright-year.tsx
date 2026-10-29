// "use client"

// // Computed once per environment (prerender on the server, module load in the
// // browser) instead of per render, so Cache Components prerendering stays happy.
// // suppressHydrationWarning covers the year-rollover edge case between build and visit.
// const year = new Date().getFullYear()

// export function CopyrightYear() {
//   return <span suppressHydrationWarning>{year}</span>
// }
