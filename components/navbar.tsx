import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { LinkButton } from "./link-button";
import { MobileMenu } from "./mobile-menu";

export function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50 border-b border-navy-800/50 bg-navy-950/80 backdrop-blur-xl"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2" aria-label={`${SITE_NAME} home`}>
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold-500 font-heading text-lg font-bold text-navy-950">
            A
          </div>
          <span className="text-lg font-semibold tracking-tight text-foreground">
            {SITE_NAME}
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-gold-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <LinkButton
            href="#contact"
            className="bg-gold-500 font-semibold text-navy-950 hover:bg-gold-400"
          >
            Book Consultation
          </LinkButton>
        </div>

        {/* Mobile menu */}
        <MobileMenu />
      </div>
    </nav>
  );
}
