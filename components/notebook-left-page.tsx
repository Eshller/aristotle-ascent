import { CONTACT_INFO, SITE_NAME, SITE_TAGLINE } from "@/lib/constants";
import {
  LinkedInIcon,
  InstagramIcon,
  FacebookIcon,
  YoutubeIcon,
} from "./social-icons";

function socialIcon(platform: string) {
  switch (platform) {
    case "LinkedIn":
      return <LinkedInIcon className="h-5 w-5" />;
    case "Instagram":
      return <InstagramIcon className="h-5 w-5" />;
    case "Facebook":
      return <FacebookIcon className="h-5 w-5" />;
    case "YouTube":
      return <YoutubeIcon className="h-5 w-5" />;
    default:
      return null;
  }
}

export function NotebookLeftPage() {
  const phoneDigits = CONTACT_INFO.phone.replace(/[^\d+]/g, "");

  return (
    <div className="flex h-full flex-col justify-between text-stone-800">
      <div>
        <h3 className="notebook-line pb-1 pt-2 font-heading text-3xl font-semibold text-navy-950">
          {SITE_NAME}
        </h3>
        <p className="notebook-line pb-3 text-base font-medium text-gold-600">{SITE_TAGLINE}</p>

        <div className="my-4 h-px w-24 bg-gold-500/30" />

        <div className="space-y-6">
          <div className="notebook-line">
            <p className="text-sm font-semibold uppercase tracking-wider text-stone-500">
              Email
            </p>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="mt-1 block text-lg font-medium text-navy-950 underline decoration-gold-500/30 underline-offset-4 transition-colors hover:text-gold-700"
            >
              {CONTACT_INFO.email}
            </a>
          </div>

          <div className="notebook-line">
            <p className="text-sm font-semibold uppercase tracking-wider text-stone-500">
              Phone
            </p>
            <a
              href={`tel:${phoneDigits}`}
              className="mt-1 block text-lg font-medium text-navy-950 underline decoration-gold-500/30 underline-offset-4 transition-colors hover:text-gold-700"
            >
              {CONTACT_INFO.phone}
            </a>
          </div>

          <div className="notebook-line">
            <p className="text-sm font-semibold uppercase tracking-wider text-stone-500">
              Studio
            </p>
            <p className="mt-1 text-lg font-medium text-navy-950">{CONTACT_INFO.address}</p>
          </div>

          <div className="notebook-line">
            <p className="text-sm font-semibold uppercase tracking-wider text-stone-500">
              Hours
            </p>
            <p className="mt-1 text-lg font-medium text-navy-950">{CONTACT_INFO.hours}</p>
          </div>
        </div>

        <div className="my-6 flex items-center gap-2">
          <div className="h-px flex-1 bg-gold-500/20" />
          <div className="h-2 w-2 rotate-45 border border-gold-500/35" />
          <div className="h-px flex-1 bg-gold-500/20" />
        </div>

        <div className="notebook-line">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-stone-500">
            Social
          </p>
          <div className="flex flex-wrap gap-3">
            {CONTACT_INFO.socials.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                aria-label={`Follow us on ${social.platform}`}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-500/25 text-gold-600 transition-colors hover:border-gold-500/50 hover:bg-gold-500/5"
              >
                {socialIcon(social.platform)}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-stone-400">— 1 —</div>
    </div>
  );
}
