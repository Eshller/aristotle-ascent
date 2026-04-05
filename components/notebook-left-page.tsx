import { CONTACT_INFO, SITE_NAME } from "@/lib/constants";
import { LinkedInIcon, InstagramIcon, TwitterXIcon } from "./social-icons";

export function NotebookLeftPage() {
  return (
    <div className="flex h-full flex-col justify-between">
      <div>
        {/* Title */}
        <h3 className="notebook-line pb-1 pt-2 font-handwriting text-3xl font-bold text-gold-500">
          {SITE_NAME}
        </h3>
        <p className="notebook-line pb-3 font-handwriting text-xl text-gold-400/60">
          Premium Education Counselling
        </p>

        {/* Divider */}
        <div className="my-4 h-px w-24 bg-gold-500/25" />

        {/* Contact details */}
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
              href={`tel:${CONTACT_INFO.phone}`}
              className="font-handwriting text-2xl text-gold-400 underline decoration-gold-500/20 underline-offset-4 transition-colors hover:text-gold-300"
            >
              {CONTACT_INFO.phone}
            </a>
          </div>

          <div className="notebook-line">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold-500/50">
              Office
            </p>
            <p className="font-handwriting text-2xl text-gold-400">{CONTACT_INFO.address}</p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 flex items-center gap-2">
          <div className="h-px flex-1 bg-gold-500/15" />
          <div className="h-2 w-2 rotate-45 border border-gold-500/25" />
          <div className="h-px flex-1 bg-gold-500/15" />
        </div>

        {/* Social links */}
        <div className="notebook-line">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold-500/50">
            Follow Us
          </p>
          <div className="flex gap-4">
            {CONTACT_INFO.socials.map((social) => {
              const icon =
                social.platform === "LinkedIn" ? (
                  <LinkedInIcon className="h-5 w-5" />
                ) : social.platform === "Instagram" ? (
                  <InstagramIcon className="h-5 w-5" />
                ) : (
                  <TwitterXIcon className="h-5 w-5" />
                );
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${social.platform}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-500/25 text-gold-500/60 transition-colors hover:border-gold-500/50 hover:text-gold-400"
                >
                  {icon}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Page number */}
      <div className="mt-6 text-center font-handwriting text-base text-gold-500/30">— 1 —</div>
    </div>
  );
}
