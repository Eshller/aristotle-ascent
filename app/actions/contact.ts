"use server";

import { contactFormSchema } from "@/lib/schemas";
import { sendContactNotification } from "@/lib/email";
import type { ActionState } from "@/lib/types";
import { headers } from "next/headers";

// Basic in-memory rate limiting (resets on server restart)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT) {
    return true;
  }

  entry.count += 1;
  return false;
}

export async function submitContactForm(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  // Check honeypot
  const honeypot = formData.get("website");
  if (honeypot) {
    // Silently accept to fool the bot
    return {
      success: true,
      message: "Your inquiry has been submitted. We'll be in touch soon!",
    };
  }

  // Rate limiting
  const headersList = await headers();
  const ip =
    headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    headersList.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return {
      success: false,
      message: "Too many submissions. Please try again later.",
    };
  }

  // Parse and validate
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    programInterest: formData.get("programInterest"),
    message: formData.get("message"),
    website: formData.get("website"),
  };

  const result = contactFormSchema.safeParse(raw);

  if (!result.success) {
    const fieldErrors: Record<string, string[]> = {};
    for (const issue of result.error.issues) {
      const field = issue.path[0]?.toString() ?? "form";
      if (!fieldErrors[field]) {
        fieldErrors[field] = [];
      }
      fieldErrors[field].push(issue.message);
    }
    return {
      success: false,
      message: "Please fix the errors below.",
      errors: fieldErrors,
    };
  }

  // Send email notification
  const emailResult = await sendContactNotification(result.data);

  if (!emailResult.success) {
    return {
      success: false,
      message:
        "We couldn't process your inquiry at the moment. Please try again or email us directly.",
    };
  }

  return {
    success: true,
    message:
      "Your inquiry has been submitted successfully! Our team will get back to you within 24 hours.",
  };
}
