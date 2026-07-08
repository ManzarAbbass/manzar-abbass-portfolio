import { z } from "zod";

export const ContactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  message: z
    .string()
    .min(20, "Message must be at least 20 characters")
    .max(5000),
});

export type ContactState = {
  success: boolean;
  error?: string;
};
