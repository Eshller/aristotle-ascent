"use client";

import { NotebookWithScroll } from "./notebook";
import { NotebookForm } from "./notebook-form";
import { NotebookLeftPage } from "./notebook-left-page";

export function ContactForm() {
  return (
    <section
      id="contact"
      className="bg-[linear-gradient(135deg,#EBF6FC_0%,#FDFAF2_100%)] px-6 py-24 md:px-10 lg:px-[60px]"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mx-auto mb-14 max-w-[760px] text-center">
          <p className="text-[13px] font-bold uppercase tracking-[0.34em] text-[#4B9CC0]">
            Get In Touch
          </p>
          <h2 className="mt-4 font-heading text-[2.2rem] font-bold leading-[1.12] text-[#1E5F8A] sm:text-5xl">
            Let&apos;s Start a <span className="italic text-[#C9A840]">Conversation</span>
          </h2>
          <p className="mt-6 text-[20px] leading-[1.8] text-[#6B8599]">
          Fill in the form below and share your goals. We will respond with a clear
            roadmap for your next step.
          </p>
        </div>

        <NotebookWithScroll leftPage={<NotebookLeftPage />} rightPage={<NotebookForm />} />
      </div>
    </section>
  );
}
