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
    <footer className="border-t border-white/10 bg-navy-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href={SECTION.home}
              className="inline-flex items-center gap-3 rounded-lg outline-none ring-gold-400/30 focus-visible:ring-2"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white font-heading text-sm font-bold text-navy-950">
                A
              </div>
              <div className="leading-tight">
                <span className="block font-heading font-semibold">{SITE_NAME}</span>
                <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-white/55">
                  {SITE_TAGLINE}
                </span>
              </div>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
              Independent counselling for admissions, funding, and global study—structured,
              transparent, and respectful of your time.
            </p>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-400">
              Services
            </h3>
            <ul className="mt-5 space-y-2.5">
              {FOOTER_SERVICE_LINKS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-white/55 transition-colors hover:text-gold-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-400">
              Navigate
            </h3>
            <ul className="mt-5 space-y-2.5">
              {FOOTER_COMPANY_LINKS.map((link) => (
                <li key={`${link.label}-${link.href}`}>
                  <a
                    href={link.href}
                    className="text-sm text-white/55 transition-colors hover:text-gold-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-400">
              Connect
            </h3>
            <ul className="mt-5 space-y-2.5">
              {CONTACT_INFO.socials.map((social) => (
                <li key={social.platform}>
                  <a
                    href={social.url}
                    className="inline-flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-gold-400"
                  >
                    <span className="text-gold-400/80">{followIcon(social.platform)}</span>
                    {social.platform}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-2 text-sm text-white/55">
              <a href={`mailto:${CONTACT_INFO.email}`} className="block hover:text-gold-400">
                {CONTACT_INFO.email}
              </a>
              <a href={`tel:${phoneDigits}`} className="block hover:text-gold-400">
                {CONTACT_INFO.phone}
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/45">
            &copy; {currentYear} {SITE_NAME}. {SITE_TAGLINE}.
          </p>
          <p className="text-xs text-white/35">Privacy · Terms</p>
        </div>
      </div>
    </footer>
  );
}
