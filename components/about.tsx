import { SectionWrapper } from "./section-wrapper";
import { ABOUT, EXCLUSIVITY, SECTION } from "@/lib/constants";

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

          <div className="mt-8 rounded-2xl border border-[#EDD97A]/60 bg-[#FDFAF2] px-6 py-5 shadow-[0_8px_24px_rgba(201,168,64,0.08)]">
            <p className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.22em] text-[#C9A840]">
              <span
                className="inline-block h-1.5 w-1.5 rounded-full bg-[#C9A840]"
                aria-hidden="true"
              />
              By invitation · Limited cohort
            </p>
            <h3 className="mt-3 font-heading text-[22px] font-bold leading-[1.2] text-[#1E5F8A] sm:text-[26px]">
              {EXCLUSIVITY.headline}
            </h3>
            <p className="mt-3 text-[17px] leading-[1.7] text-[#6B8599]">
              {EXCLUSIVITY.body}
            </p>
            <a
              href={SECTION.contact}
              className="mt-4 inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.18em] text-[#4B9CC0] transition-[gap] hover:gap-3"
            >
              {EXCLUSIVITY.cta} →
            </a>
          </div>
        </div>

        <div className="animate-fade-in">
          <figure className="relative overflow-hidden rounded-[24px] border border-[#D4EAFA] bg-white px-7 py-6 shadow-[0_12px_36px_rgba(123,196,226,0.12)] sm:px-9 sm:py-8">
            <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#A8D8EF]/35 blur-2xl" />
            <span className="mb-0 block font-heading text-[82px] leading-[0.56] text-[#A8D8EF]" aria-hidden="true">
              &ldquo;
            </span>
            <blockquote className="relative">
              <p className="font-handwriting text-[27px] italic leading-[1.42] text-[#2A3A4A]">
                {ABOUT.quote}
              </p>
              <figcaption className="mt-1 text-[16px] font-bold uppercase tracking-[0.16em] text-[#4B9CC0]">
                — {ABOUT.quoteAttr}
              </figcaption>
            </blockquote>
          </figure>
        </div>
      </div>
    </SectionWrapper>
  );
}
