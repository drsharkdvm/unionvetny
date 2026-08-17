"use server";

import { Resend } from "resend";
import { SITE } from "@/lib/site";

export interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  pet?: string;
  message: string;
  security: string;
}

export type ContactResult = { ok: true } | { ok: false; error: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Server Action — sends a contact-form submission via Resend.
 * The RESEND_API_KEY is read server-side only and is never exposed to the client.
 */
export async function sendContactEmail(data: ContactPayload): Promise<ContactResult> {
  // Never trust the client — validate again on the server.
  if (
    !data?.name?.trim() ||
    !EMAIL_RE.test(data.email ?? "") ||
    (data.message?.trim().length ?? 0) < 10 ||
    data.security?.trim() !== "7"
  ) {
    return { ok: false, error: "Please complete all the required fields." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set — cannot send contact email.");
    return { ok: false, error: "Email isn't set up yet — please call us at " + SITE.phone.display + "." };
  }

  const resend = new Resend(apiKey);
  const to = process.env.CONTACT_TO_EMAIL || SITE.email;
  // Must be an address on a domain verified in your Resend account.
  const from = process.env.CONTACT_FROM_EMAIL || "Union Vet Website <onboarding@resend.dev>";

  const body = [
    `Name:  ${data.name.trim()}`,
    `Email: ${data.email.trim()}`,
    data.phone?.trim() ? `Phone: ${data.phone.trim()}` : null,
    data.pet?.trim() ? `Pet:   ${data.pet.trim()}` : null,
    "",
    data.message.trim(),
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: data.email.trim(),
      subject: `New website enquiry from ${data.name.trim().replace(/[\r\n]+/g, " ")}`,
      text: body,
    });
    if (error) {
      console.error("Resend send error:", error);
      return { ok: false, error: "Sorry — your message couldn't be sent. Please call us instead." };
    }
    return { ok: true };
  } catch (err) {
    console.error("Contact send failed:", err);
    return { ok: false, error: "Sorry — your message couldn't be sent. Please call us instead." };
  }
}
