import { SectionWrapper } from "./section-wrapper";
import { PROCESS_STEPS } from "@/lib/constants";

export function Process() {
  return (
    <SectionWrapper id="process">
      <div className="mx-auto max-w-3xl text-center lg:max-w-4xl">
        <p className="text-[10px] font-semibold uppercase tracking-[0.36em] text-gold-600">
          How we work
        </p>
        <h2 className="mt-4 font-heading text-[2.1rem] font-medium leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-[2.65rem]">
          A calm, four-stage <span className="italic text-gold-600">method</span>
        </h2>
      </div>

      <div className="mx-auto mt-16 max-w-5xl border border-border bg-border sm:mt-20">
        <ol className="grid gap-px sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, i) => (
            <li
              key={step.title}
              className="relative flex min-h-[14rem] flex-col bg-background p-8 sm:min-h-[15rem] sm:p-9 lg:min-h-[16rem]"
            >
              <span className="font-heading text-[10px] font-semibold tabular-nums uppercase tracking-[0.28em] text-gold-600">
                Phase {step.stepLabel}
              </span>
              <h3 className="mt-6 font-heading text-xl font-semibold tracking-tight text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
              <span
                className="pointer-events-none absolute bottom-4 right-4 font-heading text-5xl font-medium text-gold-500/[0.08]"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </SectionWrapper>
  );
}
