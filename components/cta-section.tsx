import { LinkButton } from "./link-button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Gold gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(10,22,40,0.15)_0%,_transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-navy-800/80">
          Begin Today
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl">
          Ready to <em className="font-bold not-italic text-gold-700">Ascend?</em>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg font-light leading-relaxed text-navy-800">
          Book your free discovery session and take the first step toward the academic future you
          deserve. Every great journey begins with a single decision.
        </p>
        <div className="mt-8">
          <LinkButton
            href="#contact"
            size="lg"
            className="bg-navy-950 px-8 text-base font-semibold text-gold-400 hover:bg-navy-900"
          >
            Book a Free Consultation
            <ArrowRight className="h-4 w-4" />
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
