import { LinkButton } from "./link-button";
import { HERO, SECTION } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-navy-950"
    >
      {/* Ambient mesh — distinct from grid-line aesthetic */}
      <div
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{
          background: `
            radial-gradient(ellipse 120% 80% at 80% 20%, oklch(0.42 0.09 195 / 0.35), transparent 55%),
            radial-gradient(ellipse 90% 70% at 10% 90%, oklch(0.28 0.08 262 / 0.5), transparent 50%),
            linear-gradient(165deg, oklch(0.12 0.045 262) 0%, oklch(0.16 0.05 262) 100%)
          `,
        }}
      />
      <div className="pointer-events-none absolute -right-32 top-1/4 h-[min(520px,50vw)] w-[min(520px,50vw)] rounded-full bg-gold-500/10 blur-3xl animate-float-soft" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-gold-500/5 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-28 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:py-24">
        <div className="animate-fade-in-up lg:col-span-7">
          <p className="mb-6 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-400">
            <span className="h-px w-8 bg-gold-500/60" aria-hidden="true" />
            {HERO.eyebrow}
          </p>

          <h1 className="font-heading text-[2.35rem] font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
            {HERO.titleBefore}{" "}
            <span className="text-gold-400">{HERO.titleAccent}</span>
            <br />
            <span className="text-white/95">{HERO.titleAfter}</span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-white/72 sm:text-lg">
            {HERO.sub}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <LinkButton
              href={SECTION.contact}
              size="lg"
              className="rounded-full bg-gold-500 px-8 py-3 text-base font-semibold text-navy-950 shadow-lg shadow-gold-500/20 transition hover:bg-gold-400"
            >
              {HERO.primaryCta}
            </LinkButton>
            <LinkButton
              href={SECTION.services}
              variant="outline"
              size="lg"
              className="rounded-full border-white/25 bg-white/5 px-8 py-3 text-base text-white backdrop-blur-sm transition hover:border-gold-400/50 hover:bg-white/10 hover:text-gold-300"
            >
              {HERO.secondaryCta}
            </LinkButton>
          </div>
        </div>

        {/* Abstract panel — editorial balance */}
        <div className="relative hidden animate-fade-in animation-delay-200 lg:col-span-5 lg:block">
          <div className="relative ml-auto aspect-[4/5] max-w-md overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl backdrop-blur-md">
            <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 via-transparent to-transparent" />
            <div className="relative flex h-full flex-col justify-between">
              <div>
                <p className="font-heading text-sm font-medium tracking-wide text-gold-400/90">
                  {HERO.eyebrow}
                </p>
                <p className="mt-6 font-heading text-2xl leading-snug text-white/90">
                  Strategy, narrative, and deadlines—handled in one coherent rhythm.
                </p>
              </div>
              <div className="space-y-4 border-t border-white/10 pt-6">
                <div className="flex justify-between text-sm text-white/55">
                  <span>Focus</span>
                  <span className="text-gold-400/90">Your outcomes</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-gold-500 to-gold-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-4 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40 sm:left-6 lg:left-8">
        <span className="h-10 w-px bg-gold-500/35" aria-hidden="true" />
        Scroll
      </div>
    </section>
  );
}
