import { SectionWrapper } from "./section-wrapper";
import { SECTION, SERVICES } from "@/lib/constants";
import {
  GraduationCap,
  Compass,
  Wallet,
  Globe,
  Lightbulb,
  Handshake,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  GraduationCap,
  Compass,
  Wallet,
  Globe,
  Lightbulb,
  Handshake,
};

export function Services() {
  return (
    <SectionWrapper id="services" tone="soft" className="bg-[linear-gradient(180deg,#FDFAF2_0%,#F7FBFF_100%)]">
      <div className="mx-auto mb-16 max-w-[700px] text-center">
        <p className="text-[13px] font-bold uppercase tracking-[0.34em] text-[#4B9CC0]">
            Practice areas
          </p>
          <h2 className="mt-3 font-heading text-[2.2rem] font-bold leading-[1.1] tracking-tight text-[#1E5F8A] sm:text-5xl">
            Support across the{" "}
            <span className="italic text-[#C9A840]">full journey</span>
          </h2>
        <p className="mt-4 text-[20px] leading-[1.8] text-[#6B8599]">
          Pick one focus or combine modules—we shape the scope to your timeline and goals.
        </p>
      </div>

      <div className="mx-auto max-w-[1100px] divide-y divide-[#D4EAFA] overflow-hidden rounded-[28px] border border-[#D4EAFA] bg-white/95 shadow-[0_10px_28px_rgba(123,196,226,0.1)]">
        {SERVICES.map((service, index) => {
          const Icon = ICON_MAP[service.icon];
          const num = String(index + 1).padStart(2, "0");
          return (
            <article
              key={service.title}
              className="group grid gap-5 px-5 py-6 transition-colors hover:bg-[#F7FBFF] md:grid-cols-[auto_1fr_auto] md:items-center md:gap-8 md:px-8 md:py-7"
            >
              <div className="flex items-center gap-4 md:gap-5">
                <span
                  className="pointer-events-none font-heading text-[30px] font-black leading-none text-[#F5E9AE] md:text-[40px]"
                  aria-hidden="true"
                >
                  {num}
                </span>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#D4EAFA] bg-[#F7FBFF] text-[#4B9CC0] md:h-14 md:w-14">
                  {Icon && <Icon className="h-5 w-5" strokeWidth={1.5} />}
                </div>
              </div>

              <div className="min-w-0">
                <h3 className="font-heading text-[28px] font-bold leading-[1.2] tracking-tight text-[#1E5F8A]">
                  {service.title}
                </h3>
                <p className="mt-3 text-[17px] leading-[1.75] text-[#6B8599]">
                  {service.description}
                </p>
              </div>

              <a
                href={SECTION.contact}
                className="inline-flex items-center gap-2 self-start text-[13px] font-bold uppercase tracking-[0.18em] text-[#4B9CC0] transition-[gap] hover:gap-3 md:self-center"
              >
                Learn More →
              </a>
            </article>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
