"use client";

import { SectionWrapper } from "./section-wrapper";
import { NotebookWithScroll } from "./notebook";
import { NotebookLeftPage } from "./notebook-left-page";
import { NotebookForm } from "./notebook-form";

export function ContactForm() {
  return (
    <SectionWrapper id="contact" tone="soft">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
        <div className="lg:col-span-5 lg:text-left">
          <p className="text-[10px] font-semibold uppercase tracking-[0.36em] text-gold-600">
            Start here
          </p>
          <h2 className="mt-4 font-heading text-[2.1rem] font-medium leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-[2.65rem]">
            Tell us what you&apos;re <span className="italic text-gold-600">working toward</span>
          </h2>
        </div>
        <p className="text-base leading-relaxed text-muted-foreground lg:col-span-6 lg:col-start-7">
          Open the journal when you&apos;re ready—then share a few details. We read every message
          and reply within one business day.
        </p>
      </div>

      <div className="mt-16 lg:mt-20">
        <NotebookWithScroll
          leftPage={<NotebookLeftPage />}
          rightPage={<NotebookForm />}
        />
      </div>
    </SectionWrapper>
  );
}
