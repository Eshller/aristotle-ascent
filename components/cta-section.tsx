import { LinkButton } from "./link-button";
import { ArrowRight } from "lucide-react";
import { SECTION } from "@/lib/constants";

export function CTASection() {
  return (
    <section className="border-y border-border">
      <div className="mx-auto grid max-w-[min(100%,88rem)] lg:grid-cols-2">
        <div className="flex flex-col justify-center border-border bg-muted/25 px-6 py-16 sm:px-10 sm:py-20 lg:border-r lg:px-14 lg:py-24 xl:px-20">
          <p className="text-[10px] font-semibold uppercase tracking-[0.36em] text-gold-600">
            Next step
          </p>
          <h2 className="mt-4 max-w-md font-heading text-[2rem] font-medium leading-[1.12] tracking-tight text-foreground sm:text-4xl">
            Ready for a focused plan?
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
            Book a short intro call. We&apos;ll outline whether we&apos;re the right fit, what a
            realistic timeline looks like, and how to move forward without obligation.
          </p>
        </div>

        <div className="relative flex flex-col justify-center overflow-hidden px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24 xl:px-20">
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-gold-500 via-gold-600 to-gold-700"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -right-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-white/10 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative">
            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-white/75">
              Availability
            </p>
            <p className="mt-3 max-w-sm font-heading text-xl font-normal leading-snug text-white/95">
              We keep intro calls deliberately short—clarity first, then you decide.
            </p>
            <div className="mt-10">
              <LinkButton
                href={SECTION.contact}
                size="lg"
                className="inline-flex gap-2 rounded-sm border-2 border-white bg-white px-8 py-3.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-gold-700 shadow-lg transition hover:bg-white/95 hover:text-gold-600"
              >
                Schedule intro call
                <ArrowRight className="h-4 w-4" />
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
