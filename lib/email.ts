import { Resend } from "resend";
import type { ContactFormData } from "./schemas";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactNotification(
  data: ContactFormData
): Promise<{ success: boolean; error?: string }> {
  const contactEmail = process.env.CONTACT_EMAIL ?? "contact@aristotleascent.com";

  try {
    await resend.emails.send({
      from: "Aristotle Ascent <onboarding@resend.dev>",
      to: contactEmail,
      subject: `New Inquiry: ${data.name} — ${data.programInterest}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0f1d35;">New Student Inquiry</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Name</td>
              <td style="padding: 8px 0;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${data.email}">${data.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Phone</td>
              <td style="padding: 8px 0;">${data.phone || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Program Interest</td>
              <td style="padding: 8px 0;">${data.programInterest}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Message</td>
              <td style="padding: 8px 0;">${data.message}</td>
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
