"use client";

import { SectionWrapper } from "./section-wrapper";
import { NotebookWithScroll } from "./notebook";
import { NotebookLeftPage } from "./notebook-left-page";
import { NotebookForm } from "./notebook-form";

export function ContactForm() {
  return (
    <SectionWrapper id="contact" tone="soft">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-600">
          Start here
        </p>
        <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Tell us what you&apos;re <span className="text-gold-600">working toward</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          Scroll to open the journal—then share a few details. We read every message and reply
          within one business day.
        </p>
      </div>

      <div className="mt-16">
        <NotebookWithScroll
          leftPage={<NotebookLeftPage />}
          rightPage={<NotebookForm />}
        />
      </div>
    </SectionWrapper>
  );
}
