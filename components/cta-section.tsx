import { LinkButton } from "./link-button";
import { ArrowRight } from "lucide-react";
import { SECTION } from "@/lib/constants";

export function CTASection() {
  return (
    <section className="bg-[linear-gradient(135deg,#EBF6FC_0%,#FDFAF2_100%)] px-6 py-24 text-center md:px-10 lg:px-[60px]">
      <div className="mx-auto max-w-[760px]">
        <p className="text-[13px] font-bold uppercase tracking-[0.34em] text-[#4B9CC0]">Begin Today</p>
        <h2 className="mt-4 font-heading text-[2.2rem] font-bold leading-[1.1] text-[#1E5F8A] sm:text-5xl">
          Ready to <span className="italic text-[#C9A840]">Ascend?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-[620px] text-[22px] leading-[1.75] text-[#6B8599]">
          Book your free discovery session and take the first step toward the academic future you
          deserve. Every considered journey begins with a single, well-informed decision.
        </p>
        <div className="mt-10">
          <LinkButton
            href={SECTION.contact}
            size="lg"
            className="inline-flex h-auto min-h-12 w-full max-w-[420px] items-center justify-center gap-2 rounded-full bg-[#7BC4E2] px-6 py-3 text-center text-[14px] font-bold uppercase leading-tight tracking-[0.12em] whitespace-normal text-white shadow-[0_4px_18px_rgba(123,196,226,0.45)] transition hover:-translate-y-0.5 hover:bg-[#4B9CC0] sm:w-auto sm:px-9 sm:text-[16px] sm:tracking-[0.18em]"
          >
            Book a Free Consultation
            <ArrowRight className="h-4 w-4" />
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
