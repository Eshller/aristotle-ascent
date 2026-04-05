import { LinkButton } from "./link-button";
import { ArrowRight } from "lucide-react";
import { SECTION } from "@/lib/constants";

export function CTASection() {
  return (
    <section className="relative border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,oklch(0.52_0.11_195/0.08),transparent)]" />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-600">
          Next step
        </p>
        <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Ready for a <span className="text-gold-600">focused</span> plan?
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-muted-foreground">
          Book a short intro call. We&apos;ll outline whether we&apos;re the right fit, what a
          realistic timeline looks like, and how to move forward without obligation.
        </p>
        <div className="mt-10">
          <LinkButton
            href={SECTION.contact}
            size="lg"
            className="inline-flex gap-2 rounded-full bg-navy-950 px-8 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-navy-900"
          >
            Schedule intro call
            <ArrowRight className="h-4 w-4" />
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
