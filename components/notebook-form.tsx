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

const labelCls =
  "shrink-0 text-xs font-semibold uppercase tracking-wider text-stone-500";

export function NotebookForm() {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);
  const closeNotebook = useNotebookClose();

  useEffect(() => {
    if (state.success) {
      const timer = setTimeout(() => closeNotebook(), 2000);
      return () => clearTimeout(timer);
    }
  }, [state.success, closeNotebook]);

  if (state.success) {
    return (
      <div className="flex h-full flex-col items-center justify-center py-16 text-center text-stone-800">
        <h3 className="font-heading text-3xl font-semibold text-gold-600">Received</h3>
        <p className="mt-3 text-base text-stone-600">
          We&apos;ll reply within one business day.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="text-stone-800">
      <input
        name="website"
        type="text"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <h3 className="notebook-line pb-3 pt-2 font-heading text-xl font-semibold text-navy-950">
        Your note
      </h3>

      <div className="space-y-1">
        <div className="notebook-line py-2">
          <div className="flex items-baseline gap-3">
            <label htmlFor="nb-name" className={labelCls}>
              Name *
            </label>
            <input
              id="nb-name"
              name="name"
              required
              minLength={2}
              placeholder="Full name"
              className="notebook-input"
            />
          </div>
          {state.errors?.name && (
            <p className="text-sm text-red-600">{state.errors.name[0]}</p>
          )}
        </div>

        <div className="notebook-line py-2">
          <div className="flex items-baseline gap-3">
            <label htmlFor="nb-email" className={labelCls}>
              Email *
            </label>
            <input
              id="nb-email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="notebook-input"
            />
          </div>
          {state.errors?.email && (
            <p className="text-sm text-red-600">{state.errors.email[0]}</p>
          )}
        </div>

        <div className="notebook-line py-2">
          <div className="flex items-baseline gap-3">
            <label htmlFor="nb-phone" className={labelCls}>
              Phone
            </label>
            <input
              id="nb-phone"
              name="phone"
              type="tel"
              placeholder="Optional"
              className="notebook-input"
            />
          </div>
        </div>

        <div className="notebook-line py-2">
          <div className="flex items-baseline gap-3">
            <label htmlFor="nb-program" className={labelCls}>
              Focus *
            </label>
            <select
              id="nb-program"
              name="programInterest"
              required
              className="notebook-input cursor-pointer"
            >
              <option value="">Choose a focus area…</option>
              {PROGRAM_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          {state.errors?.programInterest && (
            <p className="text-sm text-red-600">{state.errors.programInterest[0]}</p>
          )}
        </div>

        <div className="notebook-line py-2">
          <label htmlFor="nb-message" className={`mb-1 block ${labelCls}`}>
            Context *
          </label>
          <textarea
            id="nb-message"
            name="message"
            required
            minLength={10}
            rows={3}
            placeholder="Year of entry, countries or schools you’re considering, and what you’d like help with…"
            className="notebook-input resize-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(transparent, transparent 35px, oklch(0.52 0.11 195 / 0.12) 35px, oklch(0.52 0.11 195 / 0.12) 36px)",
              lineHeight: "36px",
            }}
          />
          {state.errors?.message && (
            <p className="text-sm text-red-600">{state.errors.message[0]}</p>
          )}
        </div>
      </div>

      {state.message && !state.success && (
        <p className="notebook-line py-1 text-sm text-red-600">{state.message}</p>
      )}

      <div className="notebook-line pt-5 pb-2">
        <button
          type="submit"
          disabled={pending}
          className="rounded-full bg-navy-950 px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-navy-900 disabled:opacity-50"
        >
          {pending ? "Sending…" : "Send note →"}
        </button>
      </div>

      <div className="mt-4 text-center text-sm text-stone-400">— 2 —</div>
    </form>
  );
}
