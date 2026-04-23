import nodemailer from "nodemailer";
import type { ContactFormData } from "./schemas";
import { SITE_NAME, SITE_TAGLINE } from "./constants";
import { escapeHtml } from "./html-escape";

/** Common providers when the login is a normal email address. */
const SMTP_HOST_BY_DOMAIN: Record<string, string> = {
  "gmail.com": "smtp.gmail.com",
  "googlemail.com": "smtp.gmail.com",
  "outlook.com": "smtp-mail.outlook.com",
  "hotmail.com": "smtp-mail.outlook.com",
  "live.com": "smtp-mail.outlook.com",
  "yahoo.com": "smtp.mail.yahoo.com",
  "yahoo.co.uk": "smtp.mail.yahoo.com",
};

function resolveSmtpHost(user: string): string | null {
  const override = process.env.SMTP_HOST?.trim();
  if (override) {
    return override;
  }

  const at = user.indexOf("@");
  if (at === -1) {
    return null;
  }

  const domain = user.slice(at + 1).toLowerCase();
  return SMTP_HOST_BY_DOMAIN[domain] ?? `smtp.${domain}`;
}

function getSmtpTransport() {
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim();
  if (!user || !pass) {
    return null;
  }

  const host = resolveSmtpHost(user);
  if (!host) {
    return null;
  }

  const port = Number(process.env.SMTP_PORT ?? "587") || 587;
  const secure =
    process.env.SMTP_SECURE === "true" ||
    process.env.SMTP_SECURE === "1" ||
    port === 465;

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });
}

function fromAddress(): string {
  const user = process.env.SMTP_USER?.trim();
  return user ? `${SITE_NAME} <${user}>` : `${SITE_NAME} <noreply@localhost>`;
}

/** Inbox for new inquiries — same account as SMTP_USER if CONTACT_EMAIL is unset. */
function inquiryInbox(): string {
  return (
    process.env.CONTACT_EMAIL?.trim() ??
    process.env.SMTP_USER?.trim() ??
    "aristotleascent.info@gmail.com"
  );
}

export async function sendContactNotification(
  data: ContactFormData
): Promise<{ success: boolean; error?: string }> {
  const transporter = getSmtpTransport();
  if (!transporter) {
    return {
      success: false,
      error:
        "Email is not configured. Set SMTP_USER (full email) and SMTP_PASS. If your host is not smtp.<your-domain>, set SMTP_HOST.",
    };
  }

  const safe = {
    name: escapeHtml(data.name),
    email: escapeHtml(data.email),
    phone: escapeHtml(data.phone?.trim() || ""),
    programInterest: escapeHtml(data.programInterest),
    message: escapeHtml(data.message),
  };

  try {
    await transporter.sendMail({
      from: fromAddress(),
      to: inquiryInbox(),
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

export async function sendInquiryAutoReply(
  data: ContactFormData
): Promise<{ success: boolean; error?: string }> {
  if (process.env.INQUIRY_AUTO_REPLY === "0") {
    return { success: true };
  }

  const transporter = getSmtpTransport();
  if (!transporter) {
    return { success: true };
  }

  const safeName = escapeHtml(data.name);
  const safeService = escapeHtml(data.programInterest);

  try {
    await transporter.sendMail({
      from: fromAddress(),
      to: data.email,
      subject: `We received your message — ${SITE_NAME}`,
      html: `
        <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto; line-height: 1.6; color: #333;">
          <p>Hi ${safeName},</p>
          <p>Thank you for contacting <strong>${escapeHtml(SITE_NAME)}</strong>. We have received your inquiry regarding <strong>${safeService}</strong> and will respond within <strong>24 hours</strong>.</p>
          <p style="color:#666;font-size:14px;">${escapeHtml(SITE_TAGLINE)}</p>
          <p style="margin-top:24px;font-size:13px;color:#888;">This is an automated confirmation.</p>
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
