import { SectionWrapper } from "./section-wrapper";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  return (
    <SectionWrapper id="testimonials" tone="paper">
      <div className="mx-auto max-w-3xl text-center lg:max-w-4xl">
        <p className="text-[10px] font-semibold uppercase tracking-[0.36em] text-gold-600">
          Outcomes
        </p>
        <h2 className="mt-4 font-heading text-[2.1rem] font-medium leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-[2.65rem]">
          Voices from <span className="italic text-gold-600">recent work</span>
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          Experiences shared in their own words—details anonymised where requested.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-4xl space-y-16 sm:mt-20 sm:space-y-20 lg:max-w-5xl">
        {TESTIMONIALS.map((testimonial) => (
          <figure
            key={testimonial.name}
            className="grid gap-8 border-l-2 border-gold-500/35 pl-8 sm:pl-10 lg:grid-cols-12 lg:gap-10 lg:pl-12"
          >
            <div
              className="font-heading text-5xl leading-none text-gold-500/20 sm:text-6xl lg:col-span-2 lg:text-7xl"
              aria-hidden="true"
            >
              &ldquo;
            </div>
            <blockquote className="lg:col-span-7">
              <p className="font-heading text-lg font-normal italic leading-relaxed text-foreground sm:text-xl lg:text-[1.35rem] lg:leading-[1.65]">
                {testimonial.quote}
              </p>
            </blockquote>
            <figcaption className="border-t border-border pt-6 lg:col-span-3 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">
              <p className="font-heading text-base font-semibold text-navy-950">{testimonial.name}</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {testimonial.credential}
              </p>
              <p className="mt-4 text-[10px] tracking-[0.25em] text-gold-600/90" aria-hidden="true">
                ★★★★★
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </SectionWrapper>
  );
}
