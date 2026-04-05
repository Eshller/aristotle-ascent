import { LinkButton } from "./link-button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Gold gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(10,22,40,0.15)_0%,_transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl">
          Ready to Begin Your Journey?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-navy-800">
          Take the first step towards your dream university. Book a free consultation with
          our expert counsellors and discover your path to academic excellence.
        </p>
        <div className="mt-8">
          <LinkButton
            href="#contact"
            size="lg"
            className="bg-navy-950 px-8 text-base font-semibold text-gold-400 hover:bg-navy-900"
          >
            Get Started Today
            <ArrowRight className="h-4 w-4" />
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
