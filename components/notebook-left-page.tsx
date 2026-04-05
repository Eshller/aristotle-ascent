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
    <div className="flex h-full flex-col justify-between">
      <div>
        <h3 className="notebook-line pb-1 pt-2 font-handwriting text-3xl font-bold text-gold-500">
          {SITE_NAME}
        </h3>
        <p className="notebook-line pb-3 font-handwriting text-xl text-gold-400/60">
          {SITE_TAGLINE}
        </p>

        <div className="my-4 h-px w-24 bg-gold-500/25" />

        <div className="space-y-6">
          <div className="notebook-line">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold-500/50">
              Email
            </p>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="font-handwriting text-2xl text-gold-400 underline decoration-gold-500/20 underline-offset-4 transition-colors hover:text-gold-300"
            >
              {CONTACT_INFO.email}
            </a>
          </div>

          <div className="notebook-line">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold-500/50">
              Phone
            </p>
            <a
              href={`tel:${phoneDigits}`}
              className="font-handwriting text-2xl text-gold-400 underline decoration-gold-500/20 underline-offset-4 transition-colors hover:text-gold-300"
            >
              {CONTACT_INFO.phone}
            </a>
          </div>

          <div className="notebook-line">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold-500/50">
              Address
            </p>
            <p className="font-handwriting text-2xl text-gold-400">{CONTACT_INFO.address}</p>
          </div>

          <div className="notebook-line">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold-500/50">
              Hours
            </p>
            <p className="font-handwriting text-2xl text-gold-400">{CONTACT_INFO.hours}</p>
          </div>
        </div>

        <div className="my-6 flex items-center gap-2">
          <div className="h-px flex-1 bg-gold-500/15" />
          <div className="h-2 w-2 rotate-45 border border-gold-500/25" />
          <div className="h-px flex-1 bg-gold-500/15" />
        </div>

        <div className="notebook-line">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold-500/50">
            Follow Us
          </p>
          <div className="flex flex-wrap gap-3">
            {CONTACT_INFO.socials.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                aria-label={`Follow us on ${social.platform}`}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-500/25 text-gold-500/60 transition-colors hover:border-gold-500/50 hover:text-gold-400"
              >
                {socialIcon(social.platform)}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 text-center font-handwriting text-base text-gold-500/30">— 1 —</div>
    </div>
  );
}
