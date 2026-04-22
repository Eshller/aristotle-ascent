import { SectionWrapper } from "./section-wrapper";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-[linear-gradient(135deg,#1E5F8A_0%,#1A4A70_100%)] px-6 py-24 md:px-10 lg:px-[60px] lg:py-[120px]">
      <div className="mx-auto max-w-[1200px]">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[13px] font-bold uppercase tracking-[0.34em] text-[#EDD97A]">
          Outcomes
        </p>
        <h2 className="mt-4 font-heading text-[2.2rem] font-bold leading-[1.1] tracking-tight text-white sm:text-5xl">
          Voices of <span className="italic text-[#EDD97A]">Success</span>
        </h2>
        <p className="mt-4 text-[18px] leading-relaxed text-white/75">
          Experiences shared in their own words—details anonymised where requested.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-[1200px] gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((testimonial) => (
          <figure
            key={testimonial.name}
            className="rounded-2xl border border-[#7BC4E2]/35 bg-white/8 p-8 transition hover:bg-white/12"
          >
            <p className="mb-4 text-[16px] tracking-[2px] text-[#EDD97A]" aria-hidden="true">
              ★★★★★
            </p>
            <blockquote>
              <p className="font-handwriting text-[21px] italic leading-[1.75] text-white/85">
                {testimonial.quote}
              </p>
            </blockquote>
            <figcaption className="mt-6 border-t border-white/15 pt-5">
              <p className="text-[16px] font-bold uppercase tracking-[0.2em] text-[#EDD97A]">{testimonial.name}</p>
              <p className="mt-1 text-[16px] leading-relaxed text-white/45">
                {testimonial.credential}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
      </div>
    </section>
  );
}
