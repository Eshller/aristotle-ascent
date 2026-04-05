import { Separator } from "@/components/ui/separator";
import { SITE_NAME, NAV_LINKS, SERVICES, CONTACT_INFO } from "@/lib/constants";
import { LinkedInIcon, InstagramIcon, TwitterXIcon } from "./social-icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-navy-800 bg-navy-950">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold-500 font-heading text-sm font-bold text-navy-950">
                A
              </div>
              <span className="font-semibold text-foreground">{SITE_NAME}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Premium education counselling and consulting. Guiding students
              to academic excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
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

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.map((service) => (
                <li key={service.title}>
                  <a
                    href="#services"
                    className="text-sm text-muted-foreground transition-colors hover:text-gold-400"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Contact</h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-gold-400"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-gold-400"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="text-sm text-muted-foreground">{CONTACT_INFO.address}</li>
            </ul>
            <div className="mt-4 flex gap-3">
              {CONTACT_INFO.socials.map((social) => {
                const icon =
                  social.platform === "LinkedIn" ? (
                    <LinkedInIcon className="h-4 w-4" />
                  ) : social.platform === "Instagram" ? (
                    <InstagramIcon className="h-4 w-4" />
                  ) : (
                    <TwitterXIcon className="h-4 w-4" />
                  );
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.platform}
                    className="text-muted-foreground transition-colors hover:text-gold-400"
                  >
                    {icon}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-navy-800" />

        <p className="text-center text-xs text-muted-foreground">
          &copy; {currentYear} {SITE_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
