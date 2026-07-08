import { describe, it, expect } from "vitest";
import { ContactSchema } from "./contact";

describe("ContactSchema", () => {
  it("accepts valid input", () => {
    const result = ContactSchema.safeParse({
      name: "Sarah Chen",
      email: "sarah@example.com",
      message: "I want to build an MVP for my startup.",
    });
    expect(result.success).toBe(true);
  });

  it("rejects name shorter than 2 characters", () => {
    const result = ContactSchema.safeParse({
      name: "A",
      email: "sarah@example.com",
      message: "I want to build an MVP for my startup.",
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toBe(
        "Name must be at least 2 characters",
      );
    }
  });

  it("rejects invalid email", () => {
    const result = ContactSchema.safeParse({
      name: "Sarah Chen",
      email: "not-an-email",
      message: "I want to build an MVP for my startup.",
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toBe("Invalid email address");
    }
  });

  it("rejects short message", () => {
    const result = ContactSchema.safeParse({
      name: "Sarah Chen",
      email: "sarah@example.com",
      message: "Hi",
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toBe(
        "Message must be at least 20 characters",
      );
    }
  });

  it("rejects empty fields", () => {
    const result = ContactSchema.safeParse({
      name: "",
      email: "",
      message: "",
    });
    expect(result.success).toBe(false);
  });
});
