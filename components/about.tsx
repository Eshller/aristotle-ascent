import { SectionWrapper } from "./section-wrapper";

export function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="animate-fade-in-up">
          <p className="mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-gold-500">
            <span className="h-px w-8 bg-gold-500" aria-hidden="true" />
            Our Philosophy
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Where Knowledge Meets <span className="text-gold-500">Ambition</span>
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Named after the great philosopher who believed in the pursuit of knowledge and the
              excellence of the human mind, Aristotle Ascent is dedicated to elevating each
              student&apos;s educational path.
            </p>
            <p>
              We provide holistic, personalized counselling that goes beyond grades — helping
              students understand themselves, align their values with their futures, and approach
              education with confidence and clarity.
            </p>
          </div>
        </div>

        <div className="relative animate-fade-in">
          <div
            className="pointer-events-none absolute -right-4 -top-4 h-28 w-28 border-2 border-gold-500/30"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden bg-navy-900 px-10 py-14 sm:px-12">
            <p
              className="pointer-events-none absolute -left-2 -top-6 font-heading text-[200px] leading-none text-gold-500/[0.08]"
              aria-hidden="true"
            >
              &ldquo;
            </p>
            <blockquote className="relative z-10">
              <p className="text-xl font-medium italic leading-relaxed text-foreground sm:text-2xl">
                Excellence is never an accident. It is always the result of high intention,
                sincere effort, and intelligent execution.
              </p>
              <footer className="mt-6 text-xs font-medium uppercase tracking-[0.25em] text-gold-500">
                — Aristotle
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
