import * as React from "react"

const MOBILE_BREAKPOINT = 768
const MOBILE_QUERY = `(max-width: ${MOBILE_BREAKPOINT - 1}px)`

export function useIsMobile() {
  // External-store subscription instead of setState-in-effect: SSR renders `false`,
  // then React re-reads the real viewport width right after hydration.
  return React.useSyncExternalStore(
    (onStoreChange) => {
      const mql = window.matchMedia(MOBILE_QUERY)
      mql.addEventListener("change", onStoreChange)
      return () => mql.removeEventListener("change", onStoreChange)
    },
    () => window.innerWidth < MOBILE_BREAKPOINT,
    () => false
  )
}
