import type { Metadata } from "next";
import { Playfair_Display, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import { Toaster } from "sonner";
import "./globals.css";

const serif = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
  preload: false,
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  preload: false,
});

export const metadata: Metadata = {
  title: "Manzar Abbass — Full Stack Developer",
  description:
    "Full Stack Developer specialising in web apps and SaaS tools built with Next.js, TypeScript, and modern databases.",
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${mono.variable}`}>
      <body className="font-mono antialiased">
        <Navbar />
        <main>{children}</main>
        <Toaster
          position="bottom-right"
          theme="dark"
          toastOptions={{
            style: {
              background: "#0A0A0A",
              border: "1px solid rgba(234,179,8,0.3)",
              color: "#fff",
              fontFamily: "var(--font-mono), monospace",
              fontSize: "13px",
            },
          }}
        />
      </body>
    </html>
  );
}
