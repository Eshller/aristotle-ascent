"use client";

import { SectionWrapper } from "./section-wrapper";
import { NotebookWithScroll } from "./notebook";
import { NotebookLeftPage } from "./notebook-left-page";
import { NotebookForm } from "./notebook-form";

export function ContactForm() {
  return (
    <SectionWrapper id="contact">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Get in <span className="text-gold-500">Touch</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Scroll down and watch the notebook open — then write to us.
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
