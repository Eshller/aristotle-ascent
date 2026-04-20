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
        <p className="text-[11px] font-bold uppercase tracking-[0.34em] text-[#4B9CC0]">
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

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {SERVICES.map((service, index) => {
          const Icon = ICON_MAP[service.icon];
          const num = String(index + 1).padStart(2, "0");
          return (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-2xl border border-[#D4EAFA] bg-white/95 p-8 shadow-[0_6px_20px_rgba(123,196,226,0.08)] transition hover:-translate-y-0.5 hover:border-[#A8D8EF] hover:shadow-[0_12px_30px_rgba(123,196,226,0.16)]"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#D4EAFA] bg-[#F7FBFF] text-[#4B9CC0]">
                  {Icon && <Icon className="h-5 w-5" strokeWidth={1.5} />}
                </div>
                <span
                  className="pointer-events-none font-heading text-[42px] font-black leading-none text-[#F5E9AE]"
                  aria-hidden="true"
                >
                  {num}
                </span>
              </div>
              <div className="min-w-0">
                <h3 className="font-heading text-[26px] font-bold leading-[1.2] tracking-tight text-[#1E5F8A]">
                  {service.title}
                </h3>
                <p className="mt-3 text-[17px] leading-[1.75] text-[#6B8599]">
                  {service.description}
                </p>
              </div>
              <a
                href={SECTION.contact}
                className="mt-6 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#4B9CC0] transition-[gap] hover:gap-3"
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
