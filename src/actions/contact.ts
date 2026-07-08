"use server";

import { Resend } from "resend";
import { z } from "zod";
import { ContactSchema, type ContactState } from "@/lib/contact-schema";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

type ContactInput = z.infer<typeof ContactSchema>;

export async function sendContactMessage(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const raw: ContactInput = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
  };

  const parsed = ContactSchema.safeParse(raw);
  if (!parsed.success) {
    const messages = parsed.error.issues.map((i) => i.message);
    return { success: false, error: messages.join(". ") };
  }

  const { name, email, message } = parsed.data;

  try {
    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["manzarja32@gmail.com"],
      subject: `New Portfolio Message from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message)}</p>
      `,
    });

    if (error) {
      return { success: false, error: "Something went wrong. Try again." };
    }

    return { success: true };
  } catch {
    return { success: false, error: "Something went wrong. Try again." };
  }
}
