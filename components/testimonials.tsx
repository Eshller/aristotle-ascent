import { SectionWrapper } from "./section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { TESTIMONIALS } from "@/lib/constants";
import { Quote } from "lucide-react";

export function Testimonials() {
  return (
    <SectionWrapper id="testimonials" alternate>
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Student <span className="text-gold-500">Success Stories</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Hear from students who achieved their dreams with our guidance.
        </p>
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
                <Quote className="mb-4 h-8 w-8 text-gold-500/30" />
                <p className="text-sm leading-relaxed text-foreground">
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
                      {testimonial.program} — {testimonial.university}
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
