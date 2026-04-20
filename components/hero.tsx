import { LinkButton } from "./link-button";
import { HERO, SECTION } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[min(100svh,52rem)] border-b border-border lg:min-h-[min(90svh,54rem)]"
    >
      <div className="mx-auto grid min-h-[inherit] max-w-[min(100%,88rem)] lg:grid-cols-12">
        {/* Editorial column */}
        <div className="relative flex flex-col justify-center bg-background px-5 py-20 sm:px-10 sm:py-24 lg:col-span-7 lg:border-r lg:border-border/80 lg:px-14 lg:py-28 xl:px-20">
          <div
            className="pointer-events-none absolute inset-0 text-foreground/[0.055]"
            style={{
              backgroundImage:
                "radial-gradient(currentColor 0.45px, transparent 0.45px)",
              backgroundSize: "26px 26px",
            }}
            aria-hidden="true"
          />
          <div className="relative max-w-xl animate-fade-in-up">
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-12 shrink-0 bg-gold-500/70" aria-hidden="true" />
              <span className="h-px flex-1 max-w-[6rem] bg-border" aria-hidden="true" />
            </div>

            <p className="text-[10px] font-semibold uppercase tracking-[0.38em] text-gold-600">
              {HERO.eyebrow}
            </p>

            <h1 className="mt-5 font-heading text-[2.65rem] font-medium leading-[1.02] tracking-tight text-navy-950 sm:text-5xl lg:text-[3.5rem] xl:text-[3.75rem]">
              {HERO.titleBefore}{" "}
              <span className="font-normal italic text-gold-600">{HERO.titleAccent}</span>
              <br />
              <span className="text-navy-900">{HERO.titleAfter}</span>
            </h1>

            <div className="mt-10 max-w-lg border-l-2 border-gold-500/35 pl-6 sm:pl-8">
              <p className="text-base leading-[1.75] text-muted-foreground sm:text-[1.0625rem]">
                {HERO.sub}
              </p>
            </div>

            <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
              <LinkButton
                href={SECTION.contact}
                size="lg"
                className="rounded-sm border border-gold-600/25 bg-gold-500 px-10 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-primary-foreground transition hover:bg-gold-600"
              >
                {HERO.primaryCta}
              </LinkButton>
              <LinkButton
                href={SECTION.services}
                variant="outline"
                size="lg"
                className="rounded-sm border-navy-950/20 bg-transparent px-10 py-3.5 text-[13px] font-semibold uppercase tracking-[0.1em] text-navy-950 transition hover:border-gold-500/40 hover:bg-muted/50"
              >
                {HERO.secondaryCta}
              </LinkButton>
            </div>
          </div>
        </div>

        {/* Ledger column */}
        <div className="relative flex min-h-[36vh] flex-col justify-center bg-navy-950 px-6 py-16 sm:px-10 lg:col-span-5 lg:min-h-0 lg:px-12 xl:px-16">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse 90% 70% at 72% 22%, oklch(0.62 0.14 42 / 0.32), transparent 55%),
                radial-gradient(ellipse 80% 55% at 0% 100%, oklch(0.32 0.04 55 / 0.48), transparent 45%),
                linear-gradient(168deg, oklch(0.19 0.024 55) 0%, oklch(0.28 0.028 55) 100%)
              `,
            }}
            aria-hidden="true"
          />
          <div className="pointer-events-none absolute -right-16 top-1/3 h-64 w-64 rounded-full bg-gold-500/12 blur-3xl animate-float-soft" />
          <div className="relative mx-auto w-full max-w-md space-y-0 lg:mx-0 lg:ml-auto">
            <div className="animate-fade-in animation-delay-200 border-y border-white/15 py-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.36em] text-gold-300/95">
                {HERO.eyebrow}
              </p>
            </div>
            <div className="animate-fade-in animation-delay-200 border-b border-white/10 py-8">
              <p className="font-heading text-[1.35rem] font-normal leading-snug text-white/90 sm:text-2xl">
                Strategy, narrative, and deadlines—handled in one coherent rhythm.
              </p>
            </div>
            <div className="animate-fade-in animation-delay-300 flex items-end justify-between gap-6 border-b border-white/10 py-6">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/45">
                  Focus
                </p>
                <p className="mt-1 font-heading text-lg text-gold-300/95">Your outcomes</p>
              </div>
              <div className="h-1 w-32 overflow-hidden rounded-full bg-white/10 sm:w-40">
                <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-gold-500 to-gold-400" />
              </div>
            </div>
            <p className="animate-fade-in animation-delay-400 pt-6 text-[10px] font-medium uppercase tracking-[0.28em] text-white/35">
              Private counselling · Higher education
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
