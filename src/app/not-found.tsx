import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0A0A0A] px-6 text-center">
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#EAB308] sm:text-xs">
        Error 404
      </span>
      <h1 className="mt-6 font-serif text-5xl font-black leading-none tracking-tight sm:text-6xl md:text-8xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-[#818281] sm:text-base">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex items-center justify-center gap-2 rounded-sm border border-[#EAB308] px-6 py-3 font-mono text-xs uppercase tracking-widest text-[#EAB308] transition-colors hover:bg-[#EAB308] hover:text-[#0A0A0A] sm:text-sm"
      >
        Back to home
        <span className="text-base leading-none sm:text-lg">&rarr;</span>
      </Link>
    </div>
  );
}
