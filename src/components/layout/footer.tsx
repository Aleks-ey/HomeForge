import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-[var(--color-primary-foreground)]">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <div className="mb-3 text-lg font-bold tracking-tight">
              Home<span className="text-orange-400">Forge</span>{" "}
              <span className="text-sm font-medium opacity-70">LLC</span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed opacity-70">
              Licensed general contractor serving homeowners and businesses
              across Colorado.
            </p>
          </div>
          <div className="md:text-right">
            <p className="mb-3 text-sm font-semibold tracking-wider uppercase opacity-60">
              Quick Links
            </p>
            <nav className="flex flex-col gap-2 md:items-end">
              <Link
                href="/"
                className="text-sm opacity-70 transition-opacity hover:opacity-100"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm opacity-70 transition-opacity hover:opacity-100"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm opacity-70 transition-opacity hover:opacity-100"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm opacity-50">
          © 2025 HomeForge LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
