import { SectionWrapper } from "./section-wrapper";
import { PROCESS_STEPS } from "@/lib/constants";

export function Process() {
  return (
    <SectionWrapper id="process">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-600">
          How we work
        </p>
        <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          A calm, four-stage <span className="text-gold-600">method</span>
        </h2>
      </div>

      <div className="relative mx-auto mt-16 max-w-6xl">
        <div
          className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-gold-500/35 to-transparent lg:block"
          aria-hidden="true"
        />

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {PROCESS_STEPS.map((step) => (
            <div key={step.title} className="relative text-center lg:px-2">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold-500/40 bg-background font-heading text-lg font-semibold text-gold-600 shadow-sm">
                {step.stepLabel}
              </div>
              <h3 className="mt-6 font-heading text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
