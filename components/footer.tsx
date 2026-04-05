import { Separator } from "@/components/ui/separator";
import {
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
    <footer className="border-t border-navy-800 bg-navy-950">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-gold-500 font-heading text-sm font-bold text-gold-500">
                A
              </div>
              <div className="leading-tight">
                <span className="block font-semibold text-foreground">{SITE_NAME}</span>
                <span className="text-[10px] font-normal uppercase tracking-[0.2em] text-gold-500">
                  {SITE_TAGLINE}
                </span>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Guiding students toward their highest potential through expert counselling,
              strategic planning, and unwavering support.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-normal uppercase tracking-[0.2em] text-gold-500">
              Services
            </h3>
            <ul className="mt-5 space-y-2.5">
              {FOOTER_SERVICE_LINKS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-gold-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-normal uppercase tracking-[0.2em] text-gold-500">
              Company
            </h3>
            <ul className="mt-5 space-y-2.5">
              {FOOTER_COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-gold-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-normal uppercase tracking-[0.2em] text-gold-500">
              Follow Us
            </h3>
            <ul className="mt-5 space-y-2.5">
              {CONTACT_INFO.socials.map((social) => (
                <li key={social.platform}>
                  <a
                    href={social.url}
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-gold-400"
                  >
                    <span className="text-gold-500/70">{followIcon(social.platform)}</span>
                    {social.platform}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="block transition-colors hover:text-gold-400"
              >
                {CONTACT_INFO.email}
              </a>
              <a
                href={`tel:${phoneDigits}`}
                className="block transition-colors hover:text-gold-400"
              >
                {CONTACT_INFO.phone}
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-navy-800" />

        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear}{" "}
            <span className="text-gold-500">{SITE_NAME}</span> {SITE_TAGLINE}. All rights
            reserved.
          </p>
          <p className="text-xs text-muted-foreground/80">Privacy Policy · Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
