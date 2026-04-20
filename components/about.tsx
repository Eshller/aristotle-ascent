import { SectionWrapper } from "./section-wrapper";
import { ABOUT } from "@/lib/constants";

export function About() {
  return (
    <SectionWrapper id="about" className="pt-4 md:pt-8">
      <div className="grid items-start gap-16 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-0">
        <div className="lg:col-span-5 animate-fade-in-up">
          <p className="text-[10px] font-semibold uppercase tracking-[0.36em] text-gold-600">
            {ABOUT.label}
          </p>
          <h2 className="mt-5 font-heading text-[2.1rem] font-medium leading-[1.12] tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            {ABOUT.headlineBefore}{" "}
            <span className="italic text-gold-600">{ABOUT.headlineAccent}</span>
          </h2>
        </div>

        <div className="lg:col-span-7 lg:row-span-2 lg:pt-2">
          <div className="space-y-6 text-base leading-[1.8] text-muted-foreground sm:text-lg">
            <p>{ABOUT.p1}</p>
            <p>{ABOUT.p2}</p>
          </div>
        </div>

        <div className="lg:col-span-12 lg:-mt-4 animate-fade-in">
          <figure className="relative border border-border bg-card px-8 py-12 sm:px-14 sm:py-16 lg:px-20 lg:py-20">
            <div
              className="pointer-events-none absolute left-6 top-6 h-12 w-12 border-l-2 border-t-2 border-gold-500/25 sm:left-10 sm:top-10"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute right-6 bottom-6 h-12 w-12 border-b-2 border-r-2 border-gold-500/25 sm:right-10 sm:bottom-10"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute left-1/2 top-8 -translate-x-1/2 font-heading text-[clamp(4rem,12vw,9rem)] leading-none text-gold-500/[0.07]"
              aria-hidden="true"
            >
              &ldquo;
            </div>
            <blockquote className="relative z-10 mx-auto max-w-4xl text-center">
              <p className="font-heading text-xl font-normal italic leading-relaxed text-foreground sm:text-2xl lg:text-[1.75rem] lg:leading-[1.55]">
                {ABOUT.quote}
              </p>
              <figcaption className="mt-10 text-[10px] font-semibold uppercase tracking-[0.28em] text-gold-600">
                — {ABOUT.quoteAttr}
              </figcaption>
            </blockquote>
          </figure>
        </div>
      </div>
    </SectionWrapper>
  );
}
