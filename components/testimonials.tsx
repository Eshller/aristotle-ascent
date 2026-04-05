import { SectionWrapper } from "./section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  return (
    <SectionWrapper id="testimonials" alternate>
      <div className="text-center">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-gold-500">
          Student Stories
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Voices of <span className="text-gold-500">Success</span>
        </h2>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((testimonial) => {
          const initials = testimonial.name
            .split(" ")
            .map((n) => n[0])
            .join("");
          return (
            <Card
              key={testimonial.name}
              className="border-navy-700 bg-navy-800/50"
            >
              <CardContent className="pt-6">
                <p className="mb-4 text-sm tracking-widest text-gold-500" aria-hidden="true">
                  ★★★★★
                </p>
                <p className="text-sm italic leading-relaxed text-foreground">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-navy-700 pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-500/10 font-semibold text-gold-500">
                    {initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.credential}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
