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
      className="sticky top-0 z-50 border-b border-border/60 bg-white/90 backdrop-blur-md"
      aria-label="Site header"
    >
      <nav
        className="mx-auto flex h-[74px] max-w-[1200px] items-center justify-between gap-5 px-6 md:px-10 lg:px-[60px]"
        aria-label="Main navigation"
      >
        <a
          href={SECTION.home}
          className="relative z-10 flex min-w-0 shrink-0 items-center gap-3 rounded-lg outline-none ring-gold-500/30 focus-visible:ring-2"
          aria-label={`${SITE_NAME} home`}
        >
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-md border border-border bg-white">
            <Image
              src="/Aristotle Logo.jpg"
              alt={`${SITE_NAME} logo`}
              fill
              sizes="40px"
              className="object-cover"
            />
          </div>
          <div className="min-w-0 leading-tight">
            <span className="block truncate font-heading text-[18px] font-bold tracking-tight text-navy-900">
              {SITE_NAME}
            </span>
            <span className="hidden truncate text-[10px] font-light uppercase tracking-[0.22em] text-muted-foreground md:block">
              {SITE_TAGLINE}
            </span>
          </div>
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[11px] font-medium uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:text-navy-700"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="relative z-10 flex shrink-0 items-center justify-end gap-3">
          <div className="hidden lg:block">
            <LinkButton
              href={SECTION.contact}
              className="rounded-full border border-[#7BC4E2]/70 bg-white px-6 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#1E5F8A] transition hover:bg-[#EBF6FC]"
            >
              Book a Session
            </LinkButton>
          </div>
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}
