import { SectionWrapper } from "./section-wrapper";
import { PROCESS_STEPS } from "@/lib/constants";

export function Process() {
  return (
    <SectionWrapper id="process">
      <div className="mx-auto mb-16 max-w-3xl text-center lg:max-w-4xl">
        <p className="text-[11px] font-bold uppercase tracking-[0.34em] text-[#4B9CC0]">
          How we work
        </p>
        <h2 className="mt-4 font-heading text-[2.2rem] font-bold leading-[1.1] tracking-tight text-[#1E5F8A] sm:text-5xl">
          Your Journey in <span className="italic text-[#C9A840]">Four Steps</span>
        </h2>
      </div>

      <div className="mx-auto max-w-[1200px]">
        <ol className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {PROCESS_STEPS.map((step, i) => (
            <li
              key={step.title}
              className="rounded-2xl border border-[#D4EAFA] bg-white p-7 text-left shadow-[0_8px_24px_rgba(123,196,226,0.1)]"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#7BC4E2] bg-white font-heading text-[18px] font-black text-[#4B9CC0]">
                {step.stepLabel}
              </div>
              <h3 className="font-heading text-[21px] font-bold tracking-tight text-[#1E5F8A]">
                {step.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.7] text-[#6B8599]">
                {step.description}
              </p>
              <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#4B9CC0]/80">
                Step {String(i + 1).padStart(2, "0")}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </SectionWrapper>
  );
}
