import { SectionWrapper } from "./section-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SERVICES } from "@/lib/constants";
import {
  GraduationCap,
  BookOpen,
  Briefcase,
  Globe,
  Target,
  PenTool,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  GraduationCap,
  BookOpen,
  Briefcase,
  Globe,
  Target,
  PenTool,
};

export function Services() {
  return (
    <SectionWrapper id="services" alternate>
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Our <span className="text-gold-500">Services</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Comprehensive education consulting services designed to guide you at every stage
          of your academic journey.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => {
          const Icon = ICON_MAP[service.icon];
          return (
            <Card
              key={service.title}
              className="group border-navy-700 bg-navy-800/50 transition-all duration-300 hover:border-gold-500/50 hover:shadow-lg hover:shadow-gold-500/5"
            >
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold-500/10 transition-colors group-hover:bg-gold-500/20">
                  {Icon && <Icon className="h-6 w-6 text-gold-500" />}
                </div>
                <CardTitle className="text-lg text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
