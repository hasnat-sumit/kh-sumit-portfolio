// import { CopyrightYear } from "@/components/copyright-year"
import { profile } from "@/content/profile"

const footerLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  // { label: "Travel Journal", href: "#travel-journal" },
  // { label: "Blog", href: "#blog" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-4 py-10 md:px-10 md:py-12">
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <p className="text-lg font-bold tracking-tight text-foreground">{profile.name}</p>
          {/* <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            {profile.role} · Nuclear Engineer · Photographer  
          </p> */}
          <p>{profile.location}</p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href} className="transition-colors hover:text-foreground">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {social.label}
            </a>


          ))}
        </div>

      </div>

      <div className="mt-10 flex flex-col items-center justify-center gap-2 border-t border-border pt-6 text-center text-xs text-muted-foreground">
        <p>© 2026 {profile.name}. All rights reserved.</p>
        <p>Built with Next.js & Tailwind CSS</p>
      </div>
    </footer>
  )
}
