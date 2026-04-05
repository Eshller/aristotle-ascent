import { SectionWrapper } from "./section-wrapper";
import { PROCESS_STEPS } from "@/lib/constants";

export function Process() {
  return (
    <SectionWrapper id="process">
      <div className="text-center">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-gold-500">
          Our Approach
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Your Journey in <span className="text-gold-500">Four Steps</span>
        </h2>
      </div>

      <div className="relative mx-auto mt-14 max-w-3xl">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 hidden h-full w-px bg-navy-700 sm:block" />

        <div className="space-y-10">
          {PROCESS_STEPS.map((step) => (
            <div key={step.title} className="relative flex gap-6">
              {/* Step number */}
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-gold-500 bg-navy-950 font-heading text-lg font-bold text-gold-500">
                {step.stepLabel}
              </div>

              {/* Content */}
              <div className="pb-2 pt-1">
                <h3 className="text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
