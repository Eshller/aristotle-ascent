"use server";

import { contactFormSchema } from "@/lib/schemas";
import { sendContactNotification, sendInquiryAutoReply } from "@/lib/email";
import type { ActionState } from "@/lib/types";
import { headers } from "next/headers";

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function rateLimitConfig() {
  const max = Math.max(
    1,
    Number.parseInt(process.env.INQUIRY_RATE_LIMIT_MAX ?? "5", 10) || 5
  );
  const windowMs = Math.max(
    60_000,
    Number.parseInt(
      process.env.INQUIRY_RATE_LIMIT_WINDOW_MS ?? String(60 * 60 * 1000),
      10
    ) || 60 * 60 * 1000
  );
  return { max, windowMs };
}

function isRateLimited(ip: string): boolean {
  const { max, windowMs } = rateLimitConfig();
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + windowMs });
    return false;
  }

  if (entry.count >= max) {
    return true;
  }

  entry.count += 1;
  return false;
}

export async function submitContactForm(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const honeypot = formData.get("website");
  if (honeypot) {
    return {
      success: true,
      message: "Your inquiry has been submitted. We'll be in touch soon!",
    };
  }

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

  const emailResult = await sendContactNotification(result.data);

  if (!emailResult.success) {
    return {
      success: false,
      message:
        "We couldn't process your inquiry at the moment. Please try again or email us directly.",
    };
  }

  const autoReply = await sendInquiryAutoReply(result.data);
  if (!autoReply.success) {
    console.error("[contact] Auto-reply failed:", autoReply.error);
  }

  return {
    success: true,
    message:
      "Your inquiry has been submitted successfully! Our team will get back to you within 24 hours.",
  };
}
