import { SectionWrapper } from "./section-wrapper";
import { PROCESS_STEPS } from "@/lib/constants";

export function Process() {
  return (
    <SectionWrapper id="process">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          How It <span className="text-gold-500">Works</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          A structured, transparent process designed to maximise your chances of admission
          to your dream institution.
        </p>
      </div>

      <div className="relative mx-auto mt-14 max-w-3xl">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 hidden h-full w-px bg-navy-700 sm:block" />

        <div className="space-y-10">
          {PROCESS_STEPS.map((step) => (
            <div key={step.step} className="relative flex gap-6">
              {/* Step number */}
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-500 font-mono text-lg font-bold text-navy-950">
                {step.step}
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
