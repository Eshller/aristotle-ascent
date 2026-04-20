import {
  NAV_LINKS,
  SECTION,
  SITE_NAME,
  SITE_TAGLINE,
} from "@/lib/constants";
import Image from "next/image";
import { LinkButton } from "./link-button";
import { MobileMenu } from "./mobile-menu";

export function Navbar() {
  return (
    <header
      className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-md"
      aria-label="Site header"
    >
      <nav
        className="relative mx-auto flex h-[4.25rem] max-w-[min(100%,88rem)] items-center justify-between gap-4 px-5 sm:h-[4.5rem] sm:px-8 lg:px-12"
        aria-label="Main navigation"
      >
        <a
          href={SECTION.home}
          className="relative z-10 flex min-w-0 shrink-0 items-center gap-3 rounded-lg outline-none ring-gold-500/25 focus-visible:ring-2 lg:min-w-[12rem]"
          aria-label={`${SITE_NAME} home`}
        >
          <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-md border border-border bg-white sm:h-10 sm:w-10">
            <Image
              src="/Aristotle Logo.jpg"
              alt={`${SITE_NAME} logo`}
              fill
              sizes="40px"
              className="object-cover"
            />
          </div>
          <div className="min-w-0 leading-tight">
            <span className="block truncate font-heading text-base font-semibold tracking-tight text-foreground">
              {SITE_NAME}
            </span>
            <span className="hidden truncate text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground md:block">
              {SITE_TAGLINE}
            </span>
          </div>
        </a>

        <ul className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-10 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[12px] font-medium uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="relative z-10 flex shrink-0 items-center justify-end gap-3 lg:min-w-[12rem]">
          <div className="hidden lg:block">
            <LinkButton
              href={SECTION.contact}
              className="rounded-sm border border-gold-600/30 bg-gold-500 px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary-foreground transition hover:bg-gold-600"
            >
              Intro call
            </LinkButton>
          </div>
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}
