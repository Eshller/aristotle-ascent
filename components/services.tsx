import { SectionWrapper } from "./section-wrapper";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
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
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-600">
          Practice areas
        </p>
        <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Support across the{" "}
          <span className="text-gold-600">full journey</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          Pick one focus or combine modules—we shape the scope to your timeline and goals.
        </p>
      </div>

      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, index) => {
          const Icon = ICON_MAP[service.icon];
          const num = String(index + 1).padStart(2, "0");
          return (
            <Card
              key={service.title}
              className="group relative overflow-hidden border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-500/25 hover:shadow-md"
            >
              <span
                className="pointer-events-none absolute right-4 top-4 font-heading text-4xl font-semibold text-gold-500/[0.12] transition-colors group-hover:text-gold-500/20"
                aria-hidden="true"
              >
                {num}
              </span>
              <CardHeader className="pb-2">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-500/10 text-gold-600 transition-colors group-hover:bg-gold-500/15">
                  {Icon && <Icon className="h-5 w-5" strokeWidth={1.75} />}
                </div>
                <CardTitle className="pt-3 font-heading text-lg font-semibold leading-snug">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
              <CardFooter className="pt-0">
                <a
                  href={SECTION.contact}
                  className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-gold-600 transition-[gap] hover:gap-3"
                >
                  Discuss this →
                </a>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
