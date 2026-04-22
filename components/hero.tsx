import { LinkButton } from "./link-button";
import { HERO, SECTION } from "@/lib/constants";
import Image from "next/image";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-border/70">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #EBF6FC 0%, #F7FBFF 50%, #FDF9EE 100%)",
        }}
      />
      <div className="pointer-events-none absolute -right-16 top-8 h-56 w-56 rounded-full bg-[#A8D8EF]/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-12 bottom-8 h-44 w-44 rounded-full bg-[#F5E9AE]/35 blur-3xl" />

      <div className="relative mx-auto grid min-h-[min(88svh,52rem)] max-w-[1200px] items-center gap-12 px-6 pb-14 pt-28 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-[60px] lg:pb-20 lg:pt-32">
        <div className="animate-fade-in-up">
          <p className="mb-6 inline-flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.34em] text-[#4B9CC0]">
            <span className="h-[2px] w-8 bg-[#7BC4E2]" aria-hidden="true" />
            {HERO.eyebrow}
          </p>
          <h1 className="font-heading text-[2.7rem] leading-[1.08] tracking-tight text-[#1E5F8A] sm:text-[3.4rem] lg:text-[4rem]">
            {HERO.titleBefore}{" "}
            <span className="italic text-[#C9A840]">{HERO.titleAccent}</span>
            <br />
            <span className="text-[#1E5F8A]">{HERO.titleAfter}</span>
          </h1>
          <div className="mt-8 max-w-2xl space-y-4 text-[1.16rem] leading-[1.8] text-[#6B8599]">
            <p>{HERO.p1}</p>
            <p>{HERO.p2}</p>
          </div>
          <div className="mt-11 flex flex-wrap gap-3">
            <LinkButton
              href={SECTION.contact}
              size="lg"
              className="rounded-full bg-[#7BC4E2] px-8 py-3 text-[16px] font-bold uppercase tracking-[0.18em] text-white shadow-[0_4px_18px_rgba(123,196,226,0.45)] transition hover:-translate-y-0.5 hover:bg-[#4B9CC0]"
            >
              Start Your Journey
            </LinkButton>
            <LinkButton
              href={SECTION.services}
              variant="outline"
              size="lg"
              className="rounded-full border-2 border-[#7BC4E2] bg-white px-8 py-3 text-[16px] font-bold uppercase tracking-[0.18em] text-[#4B9CC0] transition hover:-translate-y-0.5 hover:bg-[#A8D8EF]/30"
            >
              Explore Services
            </LinkButton>
          </div>
        </div>

        <div className="animate-fade-in animation-delay-200">
          <div className="mx-auto max-w-[390px] rounded-3xl border border-[#D4EAFA] bg-white/92 p-8 shadow-[0_16px_42px_rgba(123,196,226,0.14)]">
            <div className="relative mx-auto h-44 w-44 overflow-hidden rounded-2xl border border-[#D4EAFA]/70 bg-[#F7FBFF]">
              <Image
                src="/Aristotle Logo.jpg"
                alt="Aristotle Ascent logo"
                fill
                sizes="176px"
                className="object-contain p-6"
              />
            </div>
            <p className="mt-7 text-center text-[20px] leading-[1.62] text-[#6B8599]">
              Guiding you toward
              <br />
              <strong className="font-semibold text-[#4B9CC0]">Academic Excellence</strong>
            </p>
            <p className="mt-5 text-center text-[13px] uppercase tracking-[0.24em] text-[#6B8599]/80">
              Calm guidance, thoughtful outcomes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
