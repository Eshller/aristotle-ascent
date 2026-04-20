import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import {
  SECTION,
  SITE_NAME,
  SITE_TAGLINE,
  FOOTER_SERVICE_LINKS,
  FOOTER_COMPANY_LINKS,
  CONTACT_INFO,
} from "@/lib/constants";
import {
  LinkedInIcon,
  InstagramIcon,
  FacebookIcon,
  YoutubeIcon,
} from "./social-icons";

function followIcon(platform: string) {
  switch (platform) {
    case "LinkedIn":
      return <LinkedInIcon className="h-4 w-4" />;
    case "Instagram":
      return <InstagramIcon className="h-4 w-4" />;
    case "Facebook":
      return <FacebookIcon className="h-4 w-4" />;
    case "YouTube":
      return <YoutubeIcon className="h-4 w-4" />;
    default:
      return null;
  }
}

export function Footer() {
  const currentYear = new Date().getFullYear();
  const phoneDigits = CONTACT_INFO.phone.replace(/[^\d+]/g, "");

  return (
    <footer className="relative bg-navy-950 text-white">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/45 to-transparent"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-[min(100%,88rem)] px-5 pb-16 pt-20 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-10 border-b border-white/10 pb-14 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <a
            href={SECTION.home}
            className="group inline-flex max-w-md items-start gap-4 rounded-lg outline-none ring-gold-400/30 focus-visible:ring-2"
          >
            <div className="relative mt-1 h-11 w-11 shrink-0 overflow-hidden rounded-sm border border-white/20 bg-white">
              <Image
                src="/Aristotle Logo.jpg"
                alt={`${SITE_NAME} logo`}
                fill
                sizes="44px"
                className="object-cover"
              />
            </div>
            <div>
              <span className="block font-heading text-2xl font-medium tracking-tight transition group-hover:text-gold-300 sm:text-3xl">
                {SITE_NAME}
              </span>
              <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.22em] text-white/50">
                {SITE_TAGLINE}
              </span>
              <p className="mt-6 text-sm leading-[1.75] text-white/55">
                Independent counselling for admissions, funding, and global study—structured,
                transparent, and respectful of your time.
              </p>
            </div>
          </a>
        </div>

        <div className="grid gap-12 pt-14 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold-400">
              Services
            </h3>
            <ul className="mt-6 space-y-3">
              {FOOTER_SERVICE_LINKS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-white/55 transition-colors hover:text-gold-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold-400">
              Navigate
            </h3>
            <ul className="mt-6 space-y-3">
              {FOOTER_COMPANY_LINKS.map((link) => (
                <li key={`${link.label}-${link.href}`}>
                  <a
                    href={link.href}
                    className="text-sm text-white/55 transition-colors hover:text-gold-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold-400">
              Connect
            </h3>
            <ul className="mt-6 space-y-3">
              {CONTACT_INFO.socials.map((social) => (
                <li key={social.platform}>
                  <a
                    href={social.url}
                    className="inline-flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-gold-300"
                  >
                    <span className="text-gold-400/80">{followIcon(social.platform)}</span>
                    {social.platform}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8 space-y-2 border-t border-white/10 pt-8 text-sm text-white/55">
              <a href={`mailto:${CONTACT_INFO.email}`} className="block hover:text-gold-300">
                {CONTACT_INFO.email}
              </a>
              <a href={`tel:${phoneDigits}`} className="block hover:text-gold-300">
                {CONTACT_INFO.phone}
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-12 bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-[11px] text-white/40">
            &copy; {currentYear} {SITE_NAME}. {SITE_TAGLINE}.
          </p>
          <p className="text-[11px] text-white/30">Privacy · Terms</p>
        </div>
      </div>
    </footer>
  );
}
