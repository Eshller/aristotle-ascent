import { SectionWrapper } from "./section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  return (
    <SectionWrapper id="testimonials" tone="deep">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-400">
          Outcomes
        </p>
        <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Voices from <span className="text-gold-400">recent work</span>
        </h2>
        <p className="mt-4 text-sm text-white/65">
          Experiences shared in their own words—details anonymised where requested.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((testimonial) => (
          <Card
            key={testimonial.name}
            className="border-white/10 bg-white/[0.04] backdrop-blur-sm transition-colors hover:border-gold-500/25"
          >
            <CardContent className="pt-8 pb-6">
              <p className="mb-5 text-xs tracking-widest text-gold-400/90" aria-hidden="true">
                ★★★★★
              </p>
              <p className="text-sm italic leading-relaxed text-white/88">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-8 border-t border-white/10 pt-5">
                <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                <p className="mt-1 text-xs text-white/50">{testimonial.credential}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
