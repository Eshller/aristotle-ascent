import { SectionWrapper } from "./section-wrapper";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { SERVICES } from "@/lib/constants";
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
    <SectionWrapper id="services" alternate>
      <div className="text-center">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-gold-500">
          What We Offer
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Comprehensive Education <span className="text-gold-500">Services</span>
        </h2>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, index) => {
          const Icon = ICON_MAP[service.icon];
          const num = String(index + 1).padStart(2, "0");
          return (
            <Card
              key={service.title}
              className="group relative overflow-hidden border-navy-700 bg-navy-800/50 transition-all duration-300 hover:border-gold-500/50 hover:shadow-lg hover:shadow-gold-500/5"
            >
              <span
                className="pointer-events-none absolute right-5 top-5 font-heading text-5xl font-bold text-gold-500/10"
                aria-hidden="true"
              >
                {num}
              </span>
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-gold-500/40 bg-gold-500/10 transition-colors group-hover:border-gold-500 group-hover:bg-gold-500/20">
                  {Icon && <Icon className="h-6 w-6 text-gold-500" />}
                </div>
                <CardTitle className="text-lg text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
              <CardFooter className="pt-0">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-gold-500 transition-[gap] hover:gap-3"
                >
                  Learn More →
                </a>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
