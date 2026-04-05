"use client";

import { SectionWrapper } from "./section-wrapper";
import { NotebookWithScroll } from "./notebook";
import { NotebookLeftPage } from "./notebook-left-page";
import { NotebookForm } from "./notebook-form";

export function ContactForm() {
  return (
    <SectionWrapper id="contact">
      <div className="text-center">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-gold-500">
          Get In Touch
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Let&apos;s Start a <span className="text-gold-500">Conversation</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Reach out today and discover how Aristotle Ascent can help you or your child achieve
          academic greatness. Scroll to open the notebook and send us a message.
        </p>
      </div>

      <div className="mt-14">
        <NotebookWithScroll
          leftPage={<NotebookLeftPage />}
          rightPage={<NotebookForm />}
        />
      </div>
    </SectionWrapper>
  );
}
