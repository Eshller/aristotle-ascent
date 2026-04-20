"use client";

import { useActionState } from "react";
import { submitContactForm } from "@/app/actions/contact";
import { CONTACT_INFO, PROGRAM_OPTIONS } from "@/lib/constants";
import type { ActionState } from "@/lib/types";

const initialState: ActionState = {
  success: false,
  message: "",
};

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);

  return (
    <section id="contact" className="bg-[linear-gradient(135deg,#EBF6FC_0%,#FDFAF2_100%)] px-6 py-24 md:px-10 lg:px-[60px]">
      <div className="mx-auto max-w-[1200px]">
        <div className="mx-auto mb-14 max-w-[760px] text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.34em] text-[#4B9CC0]">Get In Touch</p>
          <h2 className="mt-4 font-heading text-[2.2rem] font-bold leading-[1.12] text-[#1E5F8A] sm:text-5xl">
            Let&apos;s Start a <span className="italic text-[#C9A840]">Conversation</span>
          </h2>
          <p className="mt-6 text-[20px] leading-[1.8] text-[#6B8599]">
            Reach out and discover how Aristotle Ascent can support your academic journey with thoughtful, practical guidance.
          </p>
        </div>

        <div className="grid gap-10 rounded-3xl border border-[#D4EAFA] bg-white p-8 shadow-[0_12px_34px_rgba(123,196,226,0.12)] lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div className="border-b border-[#D4EAFA]/70 pb-8 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-10">
            <h3 className="font-heading text-[30px] font-bold text-[#1E5F8A]">Private Advisory</h3>
            <p className="mt-4 text-[18px] leading-[1.75] text-[#6B8599]">
              We reply within one business day with clear next steps.
            </p>
            <div className="mt-8 space-y-4 text-[15px] text-[#2A3A4A]">
              <p><span className="font-semibold text-[#4B9CC0]">Email:</span> {CONTACT_INFO.email}</p>
              <p><span className="font-semibold text-[#4B9CC0]">Phone:</span> {CONTACT_INFO.phone}</p>
              <p><span className="font-semibold text-[#4B9CC0]">Address:</span> {CONTACT_INFO.address}</p>
              <p><span className="font-semibold text-[#4B9CC0]">Hours:</span> {CONTACT_INFO.hours}</p>
            </div>
          </div>

          <form action={formAction} className="flex flex-col gap-4">
          <input name="website" type="text" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#4B9CC0]">Name</label>
              <input name="name" required minLength={2} placeholder="John Doe" className="rounded-[10px] border border-[#D4EAFA] bg-[#F7FBFF] px-4 py-3 text-[14px] text-[#2A3A4A] outline-none focus:border-[#7BC4E2] focus:bg-white" />
              {state.errors?.name && <p className="text-sm text-red-600">{state.errors.name[0]}</p>}
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#4B9CC0]">Phone Number</label>
              <input name="phone" type="tel" placeholder="+1 000 000 0000" className="rounded-[10px] border border-[#D4EAFA] bg-[#F7FBFF] px-4 py-3 text-[14px] text-[#2A3A4A] outline-none focus:border-[#7BC4E2] focus:bg-white" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#4B9CC0]">Email Address</label>
            <input name="email" type="email" required placeholder="john@email.com" className="rounded-[10px] border border-[#D4EAFA] bg-[#F7FBFF] px-4 py-3 text-[14px] text-[#2A3A4A] outline-none focus:border-[#7BC4E2] focus:bg-white" />
            {state.errors?.email && <p className="text-sm text-red-600">{state.errors.email[0]}</p>}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#4B9CC0]">Service Of Interest</label>
            <select name="programInterest" required className="rounded-[10px] border border-[#D4EAFA] bg-[#F7FBFF] px-4 py-3 text-[14px] text-[#2A3A4A] outline-none focus:border-[#7BC4E2] focus:bg-white">
              <option value="">Select a service...</option>
              {PROGRAM_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {state.errors?.programInterest && (
              <p className="text-sm text-red-600">{state.errors.programInterest[0]}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#4B9CC0]">Your Message</label>
            <textarea name="message" required minLength={10} rows={5} placeholder="Tell us about your goals and how we can help you..." className="rounded-[10px] border border-[#D4EAFA] bg-[#F7FBFF] px-4 py-3 text-[14px] text-[#2A3A4A] outline-none focus:border-[#7BC4E2] focus:bg-white" />
            {state.errors?.message && <p className="text-sm text-red-600">{state.errors.message[0]}</p>}
          </div>

          {state.message && !state.success && <p className="text-sm text-red-600">{state.message}</p>}
          {state.success && <p className="text-sm text-[#4B9CC0]">{state.message}</p>}

            <button
              type="submit"
              disabled={pending}
              className="mt-3 inline-flex w-fit items-center rounded-full bg-[linear-gradient(135deg,#7BC4E2,#4B9CC0)] px-10 py-3 text-[12px] font-bold uppercase tracking-[0.18em] text-white shadow-[0_4px_18px_rgba(123,196,226,0.4)] transition hover:-translate-y-0.5 disabled:opacity-60"
            >
              {pending ? "Sending..." : "Send Message →"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
