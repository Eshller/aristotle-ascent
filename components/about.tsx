import { SectionWrapper } from "./section-wrapper";
import { ABOUT } from "@/lib/constants";

export function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="animate-fade-in-up">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-600">
            {ABOUT.label}
          </p>
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.35rem] lg:leading-tight">
            {ABOUT.headlineBefore}{" "}
            <span className="text-gold-600">{ABOUT.headlineAccent}</span>
          </h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>{ABOUT.p1}</p>
            <p>{ABOUT.p2}</p>
          </div>
        </div>

        <div className="relative animate-fade-in">
          <div
            className="pointer-events-none absolute -right-3 -top-3 h-24 w-24 rounded-2xl border-2 border-gold-500/25"
            aria-hidden="true"
          />
          <figure className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/[0.06] via-card to-muted/30 p-10 sm:p-12">
            <div
              className="pointer-events-none absolute -right-4 -top-8 font-heading text-[7rem] leading-none text-gold-500/[0.12]"
              aria-hidden="true"
            >
              &ldquo;
            </div>
            <blockquote className="relative z-10">
              <p className="font-heading text-xl font-medium italic leading-relaxed text-foreground sm:text-2xl">
                {ABOUT.quote}
              </p>
              <figcaption className="mt-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-600">
                — {ABOUT.quoteAttr}
              </figcaption>
            </blockquote>
          </figure>
        </div>
      </div>
    </SectionWrapper>
  );
}
