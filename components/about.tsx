import { SectionWrapper } from "./section-wrapper";
import { ABOUT } from "@/lib/constants";

export function About() {
  return (
    <SectionWrapper id="about" className="bg-[#F7FBFF]">
      <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="animate-fade-in-up">
          <p className="text-[13px] font-bold uppercase tracking-[0.34em] text-[#4B9CC0]">
            {ABOUT.label}
          </p>
          <h2 className="mt-4 font-heading text-[2.1rem] font-bold leading-[1.12] tracking-tight text-[#1E5F8A] sm:text-4xl lg:text-[3rem]">
            {ABOUT.headlineBefore}{" "}
            <span className="italic text-[#C9A840]">{ABOUT.headlineAccent}</span>
          </h2>
          <div className="mt-6 space-y-6 text-[20px] leading-[1.85] text-[#6B8599]">
            <p>{ABOUT.p1}</p>
            <p>{ABOUT.p2}</p>
          </div>
        </div>

        <div className="animate-fade-in">
          <figure className="relative overflow-hidden rounded-[24px] border border-[#D4EAFA] bg-white px-8 py-10 shadow-[0_12px_36px_rgba(123,196,226,0.12)] sm:px-10 sm:py-12">
            <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#A8D8EF]/35 blur-2xl" />
            <span className="mb-3 block font-heading text-[96px] leading-[0.6] text-[#A8D8EF]" aria-hidden="true">
              &ldquo;
            </span>
            <blockquote className="relative">
              <p className="font-handwriting text-[27px] italic leading-[1.62] text-[#2A3A4A]">
                {ABOUT.quote}
              </p>
              <figcaption className="mt-6 text-[16px] font-bold uppercase tracking-[0.22em] text-[#4B9CC0]">
                — {ABOUT.quoteAttr}
              </figcaption>
            </blockquote>
          </figure>
        </div>
      </div>
    </SectionWrapper>
  );
}
