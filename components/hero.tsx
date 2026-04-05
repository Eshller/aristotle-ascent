import { LinkButton } from "./link-button";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,168,67,0.08)_0%,_transparent_60%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 79px, rgba(212,168,67,1) 79px, rgba(212,168,67,1) 80px),
            repeating-linear-gradient(90deg, transparent, transparent 79px, rgba(212,168,67,1) 79px, rgba(212,168,67,1) 80px)`,
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-7 flex items-center gap-3.5">
            <span className="h-px w-10 bg-gold-500" aria-hidden="true" />
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold-500">
              Aristotle Ascent Education
            </p>
          </div>

          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.05]">
            Unlock Your <em className="text-gold-500 not-italic">Greatest</em> Academic Potential
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            We believe every student has the potential to achieve greatness. Our mission is to
            guide learners through their educational journeys, helping them discover their
            passions and reach their academic goals.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <LinkButton
              href="#contact"
              size="lg"
              className="bg-gold-500 px-8 text-base font-semibold text-navy-950 hover:bg-gold-400"
            >
              Start Your Journey
            </LinkButton>
            <LinkButton
              href="#services"
              variant="outline"
              size="lg"
              className="border-gold-500/50 px-8 text-base text-gold-400 hover:bg-gold-500/10 hover:text-gold-300"
            >
              Explore Services
            </LinkButton>
          </div>
        </div>

        <div className="absolute bottom-10 left-4 flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.25em] text-muted-foreground sm:left-6 lg:left-8">
          <span className="h-12 w-px bg-gold-500/40" aria-hidden="true" />
          Scroll
        </div>
      </div>
    </section>
  );
}
