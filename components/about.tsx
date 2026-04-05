import { SectionWrapper } from "./section-wrapper";
import { CheckCircle } from "lucide-react";

const DIFFERENTIATORS = [
  "Founded by experienced professionals with deep academic networks",
  "Personalised one-on-one counselling, not mass consulting",
  "Data-driven university matching with proven results",
  "End-to-end support from profile building to visa guidance",
  "Transparent process with no hidden fees",
];

export function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Left: visual element */}
        <div className="animate-fade-in flex items-center justify-center">
          <div className="relative">
            <div className="h-72 w-72 rounded-2xl bg-gradient-to-br from-navy-800 to-navy-700 sm:h-80 sm:w-80" />
            <div className="absolute -bottom-4 -right-4 flex h-24 w-48 items-center justify-center rounded-xl border border-navy-700 bg-navy-800 shadow-lg">
              <div className="text-center">
                <p className="font-mono text-2xl font-bold text-gold-500">15+</p>
                <p className="text-xs text-muted-foreground">Years of Excellence</p>
              </div>
            </div>
            <div className="absolute -left-4 -top-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gold-500">
              <span className="text-2xl font-bold text-navy-950">A</span>
            </div>
          </div>
        </div>

        {/* Right: content */}
        <div className="animate-fade-in-up">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Who We <span className="text-gold-500">Are</span>
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Aristotle Ascent is a premium education counselling firm founded by experienced
            professionals who understand what it takes to get into the world&apos;s most competitive
            institutions. Our team combines academic rigour with personalised mentorship to
            help every student reach their full potential.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We believe that the right guidance at the right time can transform a student&apos;s
            future. That&apos;s why we go beyond cookie-cutter advice to craft unique strategies
            tailored to each individual&apos;s strengths and aspirations.
          </p>

          <ul className="mt-8 space-y-3">
            {DIFFERENTIATORS.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                <span className="text-sm text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}
