import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "cn"
import { ThemeToggle } from "./theme-toggle"

const navLinks = [
  // { label: "Travel Journal", href: "#travel-journal" },
  { label: "Projects", href: "#projects" },
  // { label: "Blog", href: "#blog" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-muted/90">
      <div className="flex h-14 w-full items-center justify-between px-4 md:h-16 md:px-10">
        <Link
          href="/"
          className="text-base font-bold tracking-tight text-foreground md:text-xl"
        >
          Hasnat <span className="text-orange-600">Sumit</span> 
        </Link>

        <nav className="flex items-center gap-1 md:gap-2">
          

          <div className="hidden items-center gap-1 md:flex md:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-lg px-3 py-2 text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <a
            href="#resume"
            className={cn(
              buttonVariants({ variant: "secondary" }),
              "ml-1 h-9 border border-border px-4 text-base font-semibold md:ml-3 md:h-10 text-orange-600"
            )}
          >
            Resume
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
