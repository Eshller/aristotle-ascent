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
    <SectionWrapper id="services" tone="soft">
      <div className="grid gap-12 border-b border-border pb-12 lg:grid-cols-12 lg:items-end lg:gap-10">
        <div className="lg:col-span-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.36em] text-gold-600">
            Practice areas
          </p>
          <h2 className="mt-4 font-heading text-[2.1rem] font-medium leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-[2.65rem]">
            Support across the{" "}
            <span className="italic text-gold-600">full journey</span>
          </h2>
        </div>
        <p className="text-base leading-relaxed text-muted-foreground lg:col-span-6 lg:col-start-7 lg:pb-1">
          Pick one focus or combine modules—we shape the scope to your timeline and goals.
        </p>
      </div>

      <div className="divide-y divide-border">
        {SERVICES.map((service, index) => {
          const Icon = ICON_MAP[service.icon];
          const num = String(index + 1).padStart(2, "0");
          return (
            <article
              key={service.title}
              className="group grid gap-8 py-14 sm:grid-cols-[minmax(0,4rem)_auto_1fr] sm:items-start sm:gap-10 sm:py-16 lg:grid-cols-[minmax(0,5rem)_auto_1fr_auto] lg:py-[4.5rem]"
            >
              <span
                className="font-heading text-3xl font-medium tabular-nums text-gold-500/25 transition-colors group-hover:text-gold-500/40 sm:pt-1 sm:text-4xl"
                aria-hidden="true"
              >
                {num}
              </span>
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-sm border border-border bg-background text-gold-600 shadow-sm transition group-hover:border-gold-500/25 group-hover:shadow-md">
                {Icon && <Icon className="h-5 w-5" strokeWidth={1.5} />}
              </div>
              <div className="min-w-0">
                <h3 className="font-heading text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base sm:leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="flex items-start sm:col-span-3 sm:justify-start lg:col-span-1 lg:justify-end">
                <a
                  href={SECTION.contact}
                  className="inline-flex items-center gap-2 border-b border-transparent pb-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-600 transition hover:border-gold-500/50"
                >
                  Discuss
                  <span aria-hidden="true" className="text-xs">
                    →
                  </span>
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
