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
    <nav
      className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-md"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
        <a
          href={SECTION.home}
          className="flex min-w-0 items-center gap-3 rounded-lg outline-none ring-gold-500/30 focus-visible:ring-2"
          aria-label={`${SITE_NAME} home`}
        >
          <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-lg border border-border/70 bg-white">
            <Image
              src="/Aristotle Logo.jpg"
              alt={`${SITE_NAME} logo`}
              fill
              sizes="36px"
              className="object-cover"
            />
          </div>
          <div className="min-w-0 leading-tight">
            <span className="block truncate font-heading text-base font-semibold tracking-tight text-foreground">
              {SITE_NAME}
            </span>
            <span className="hidden truncate text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground sm:block">
              {SITE_TAGLINE}
            </span>
          </div>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[13px] font-medium text-muted-foreground transition-colors hover:text-gold-600"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <LinkButton
            href={SECTION.contact}
            className="rounded-full bg-navy-950 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-navy-900"
          >
            Intro call
          </LinkButton>
        </div>

        <MobileMenu />
      </div>
    </nav>
  );
}
