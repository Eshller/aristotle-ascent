import { Resend } from "resend";
import type { ContactFormData } from "./schemas";
import { SITE_NAME, SITE_TAGLINE } from "./constants";
import { escapeHtml } from "./html-escape";

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

function adminFromAddress(): string {
  return (
    process.env.RESEND_FROM ??
    "Aristotle Ascent <onboarding@resend.dev>"
  );
}

function autoReplyFromAddress(): string {
  return process.env.RESEND_AUTO_REPLY_FROM ?? adminFromAddress();
}

function parseBccList(): string[] | undefined {
  const raw = process.env.INQUIRY_BCC_EMAILS?.trim();
  if (!raw) return undefined;
  const list = raw
    .split(/[,;]/)
    .map((e) => e.trim())
    .filter(Boolean);
  return list.length ? list : undefined;
}

export async function sendContactNotification(
  data: ContactFormData
): Promise<{ success: boolean; error?: string }> {
  const resend = getResend();
  if (!resend) {
    return { success: false, error: "Email is not configured" };
  }

  const contactEmail =
    process.env.CONTACT_EMAIL ?? "contact@aristotleascent.com";
  const bcc = parseBccList();

  const safe = {
    name: escapeHtml(data.name),
    email: escapeHtml(data.email),
    phone: escapeHtml(data.phone?.trim() || ""),
    programInterest: escapeHtml(data.programInterest),
    message: escapeHtml(data.message),
  };

  try {
    await resend.emails.send({
      from: adminFromAddress(),
      to: contactEmail,
      ...(bcc ? { bcc } : {}),
      replyTo: data.email,
      subject: `New Inquiry: ${data.name} — ${data.programInterest}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0f1d35;">New Student Inquiry</h2>
          <p style="color:#666;font-size:14px;">Reply directly to this email to reach the student at <strong>${safe.email}</strong>.</p>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Name</td>
              <td style="padding: 8px 0;">${safe.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${data.email.replace(/"/g, "")}">${safe.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Phone</td>
              <td style="padding: 8px 0;">${safe.phone || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Service</td>
              <td style="padding: 8px 0;">${safe.programInterest}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555; vertical-align: top;">Message</td>
              <td style="padding: 8px 0; white-space: pre-wrap;">${safe.message}</td>
            </tr>
          </table>
        </div>
      `,
    });
    return { success: true };
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Failed to send email";
    return { success: false, error: message };
  }
}

/**
 * Optional confirmation email to the submitter (lead experience + audit trail).
 * Disabled when INQUIRY_AUTO_REPLY=0 or when RESEND_API_KEY is missing.
 */
export async function sendInquiryAutoReply(
  data: ContactFormData
): Promise<{ success: boolean; error?: string }> {
  if (process.env.INQUIRY_AUTO_REPLY === "0") {
    return { success: true };
  }

  const resend = getResend();
  if (!resend) {
    return { success: true };
  }

  const safeName = escapeHtml(data.name);
  const safeService = escapeHtml(data.programInterest);

  try {
    await resend.emails.send({
      from: autoReplyFromAddress(),
      to: data.email,
      subject: `We received your message — ${SITE_NAME}`,
      html: `
        <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto; line-height: 1.6; color: #333;">
          <p>Hi ${safeName},</p>
          <p>Thank you for contacting <strong>${escapeHtml(SITE_NAME)}</strong>. We have received your inquiry regarding <strong>${safeService}</strong> and will respond within <strong>24 hours</strong>.</p>
          <p style="color:#666;font-size:14px;">${escapeHtml(SITE_TAGLINE)}</p>
          <p style="margin-top:24px;font-size:13px;color:#888;">This is an automated confirmation. Please do not reply to this message if it was sent from a no-reply address.</p>
        </div>
      `,
    });
    return { success: true };
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Failed to send auto-reply";
    return { success: false, error: message };
  }
}
