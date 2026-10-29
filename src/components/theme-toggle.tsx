"use client"

import { MoonIcon, SunIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark")
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light")
    } catch {
      // localStorage unavailable (e.g. private mode) — theme still toggles for this view.
    }
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="text-muted-foreground hover:text-foreground"
    >
      {/* Icon swap is driven purely by the `.dark` class on <html>: no state, no effect, no hydration mismatch. */}
      <SunIcon className="hidden size-5 dark:block" />
      <MoonIcon className="size-5 dark:hidden" />
    </Button>
  )
}
