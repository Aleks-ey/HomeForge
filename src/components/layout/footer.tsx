import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-[var(--color-primary-foreground)]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="text-lg font-bold tracking-tight mb-3">
              Home<span className="text-orange-400">Forge</span>{" "}
              <span className="text-sm font-medium opacity-70">LLC</span>
            </div>
            <p className="text-sm opacity-70 max-w-xs leading-relaxed">
              Licensed general contractor specializing in residential remodeling
              and commercial renovation across the region.
            </p>
          </div>
          <div className="md:text-right">
            <p className="text-sm font-semibold uppercase tracking-wider opacity-60 mb-3">
              Quick Links
            </p>
            <nav className="flex flex-col gap-2 md:items-end">
              <Link
                href="/"
                className="text-sm opacity-70 hover:opacity-100 transition-opacity"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm opacity-70 hover:opacity-100 transition-opacity"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm opacity-70 hover:opacity-100 transition-opacity"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
        <div className="border-t border-white/10 mt-10 pt-6 text-sm opacity-50 text-center">
          © 2025 HomeForge LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
