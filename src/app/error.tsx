"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Unhandled error:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-dark px-6 text-center">
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent sm:text-xs">
        Something went wrong
      </span>
      <h1 className="mt-6 font-serif text-5xl font-black leading-none tracking-tight sm:text-6xl md:text-8xl">
        Unexpected error
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-muted sm:text-base">
        An unexpected error occurred. Please try again.
      </p>
      <button
        onClick={reset}
        className="mt-10 inline-flex items-center justify-center gap-2 rounded-sm border border-accent px-6 py-3 font-mono text-xs uppercase tracking-widest text-accent transition-colors hover:bg-accent hover:text-[#0A0A0A] sm:text-sm"
      >
        Try again
      </button>
    </div>
  );
}
