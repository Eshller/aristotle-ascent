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
    <footer className="bg-[#1E5F8A] px-6 pb-8 pt-14 text-white md:px-10 lg:px-[60px]">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col gap-10 border-b border-white/10 pb-10 lg:flex-row lg:items-end lg:justify-between">
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
              <span className="block font-heading text-[18px] font-bold tracking-tight transition group-hover:text-[#A8D8EF]">
                {SITE_NAME}
              </span>
              <span className="mt-1 block text-[10px] font-light uppercase tracking-[0.2em] text-[#A8D8EF]">
                {SITE_TAGLINE}
              </span>
              <p className="mt-4 text-[16px] leading-[1.8] text-white/55">
                Guiding students toward their highest potential through thoughtful planning and
                expert counselling.
              </p>
            </div>
          </a>
        </div>

        <div className="grid gap-12 py-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.26em] text-[#EDD97A]">
              Services
            </h3>
            <ul className="mt-5 space-y-2.5">
              {FOOTER_SERVICE_LINKS.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-sm text-white/60 transition-colors hover:text-[#A8D8EF]">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.26em] text-[#EDD97A]">
              Company
            </h3>
            <ul className="mt-5 space-y-2.5">
              {FOOTER_COMPANY_LINKS.map((link) => (
                <li key={`${link.label}-${link.href}`}>
                  <a href={link.href} className="text-sm text-white/60 transition-colors hover:text-[#A8D8EF]">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.26em] text-[#EDD97A]">
              Follow Us
            </h3>
            <ul className="mt-5 space-y-2.5">
              {CONTACT_INFO.socials.map((social) => (
                <li key={social.platform}>
                  <a
                    href={social.url}
                    className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-[#A8D8EF]"
                  >
                    <span className="text-[#A8D8EF]">{followIcon(social.platform)}</span>
                    {social.platform}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-1.5 text-sm text-white/55">
              <a href={`mailto:${CONTACT_INFO.email}`} className="block hover:text-[#A8D8EF]">
                {CONTACT_INFO.email}
              </a>
              <a href={`tel:${phoneDigits}`} className="block hover:text-[#A8D8EF]">
                {CONTACT_INFO.phone}
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-2 bg-white/10" />

        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p className="text-[11px] text-white/40">
            &copy; {currentYear} {SITE_NAME} Education Counselling &amp; Consulting. All rights reserved.
          </p>
          <p className="text-[11px] text-white/30">Privacy Policy · Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
