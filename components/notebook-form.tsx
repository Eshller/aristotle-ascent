"use client";

import { useActionState, useEffect } from "react";
import { submitContactForm } from "@/app/actions/contact";
import { PROGRAM_OPTIONS } from "@/lib/constants";
import type { ActionState } from "@/lib/types";
import { useNotebookClose } from "./notebook";

const initialState: ActionState = {
  success: false,
  message: "",
};

export function NotebookForm() {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);
  const closeNotebook = useNotebookClose();

  // Close notebook after successful submission
  useEffect(() => {
    if (state.success) {
      const timer = setTimeout(() => closeNotebook(), 2000);
      return () => clearTimeout(timer);
    }
  }, [state.success, closeNotebook]);

  if (state.success) {
    return (
      <div className="flex h-full flex-col items-center justify-center py-16 text-center">
        <h3 className="font-handwriting text-4xl font-semibold text-gold-400">
          Thank You!
        </h3>
        <p className="mt-4 font-handwriting text-2xl text-gold-400/60">
          We&apos;ll be reaching out soon...
        </p>
      </div>
    );
  }

  return (
    <form action={formAction}>
      {/* Honeypot */}
      <input
        name="website"
        type="text"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      {/* Title */}
      <h3 className="notebook-line pb-3 pt-2 font-handwriting text-2xl font-semibold text-gold-500">
        Send us a message
      </h3>

      <div className="space-y-1">
        {/* Name */}
        <div className="notebook-line py-2">
          <div className="flex items-baseline gap-3">
            <label htmlFor="nb-name" className="shrink-0 text-sm font-semibold uppercase tracking-wider text-gold-500/50">
              Name *
            </label>
            <input
              id="nb-name"
              name="name"
              required
              minLength={2}
              placeholder="Your name"
              className="notebook-input"
            />
          </div>
          {state.errors?.name && (
            <p className="text-sm text-red-400">{state.errors.name[0]}</p>
          )}
        </div>

        {/* Email */}
        <div className="notebook-line py-2">
          <div className="flex items-baseline gap-3">
            <label htmlFor="nb-email" className="shrink-0 text-sm font-semibold uppercase tracking-wider text-gold-500/50">
              Email *
            </label>
            <input
              id="nb-email"
              name="email"
              type="email"
              required
              placeholder="john@email.com"
              className="notebook-input"
            />
          </div>
          {state.errors?.email && (
            <p className="text-sm text-red-400">{state.errors.email[0]}</p>
          )}
        </div>

        {/* Phone */}
        <div className="notebook-line py-2">
          <div className="flex items-baseline gap-3">
            <label htmlFor="nb-phone" className="shrink-0 text-sm font-semibold uppercase tracking-wider text-gold-500/50">
              Phone
            </label>
            <input
              id="nb-phone"
              name="phone"
              type="tel"
              placeholder="+1 000 000 0000"
              className="notebook-input"
            />
          </div>
        </div>

        {/* Program Interest */}
        <div className="notebook-line py-2">
          <div className="flex items-baseline gap-3">
            <label htmlFor="nb-program" className="shrink-0 text-sm font-semibold uppercase tracking-wider text-gold-500/50">
              Service *
            </label>
            <select
              id="nb-program"
              name="programInterest"
              required
              className="notebook-input cursor-pointer"
            >
              <option value="">Select a service...</option>
              {PROGRAM_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          {state.errors?.programInterest && (
            <p className="text-sm text-red-400">{state.errors.programInterest[0]}</p>
          )}
        </div>

        {/* Message */}
        <div className="notebook-line py-2">
          <label htmlFor="nb-message" className="mb-1 block text-sm font-semibold uppercase tracking-wider text-gold-500/50">
            Message *
          </label>
          <textarea
            id="nb-message"
            name="message"
            required
            minLength={10}
            rows={3}
            placeholder="Tell us about your goals and how we can help you..."
            className="notebook-input resize-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(transparent, transparent 35px, rgba(212,168,67,0.25) 35px, rgba(212,168,67,0.25) 36px)",
              lineHeight: "36px",
            }}
          />
          {state.errors?.message && (
            <p className="text-sm text-red-400">{state.errors.message[0]}</p>
          )}
        </div>
      </div>

      {state.message && !state.success && (
        <p className="notebook-line py-1 text-base text-red-400">{state.message}</p>
      )}

      {/* Submit */}
      <div className="notebook-line pt-5 pb-2">
        <button
          type="submit"
          disabled={pending}
          className="rounded-lg bg-gold-500 px-8 py-3 text-base font-semibold text-navy-950 shadow-md transition-all hover:bg-gold-400 hover:shadow-lg disabled:opacity-50"
        >
          {pending ? "Sending..." : "Send Message →"}
        </button>
      </div>

      <div className="mt-4 text-center font-handwriting text-base text-gold-500/30">— 2 —</div>
    </form>
  );
}
