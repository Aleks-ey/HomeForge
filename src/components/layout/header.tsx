import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[var(--color-background)]/95 backdrop-blur-sm border-b border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-lg font-bold tracking-tight text-[var(--color-foreground)]">
            Home<span className="text-orange-500">Forge</span>
          </span>
          <span className="text-xs font-medium text-[var(--color-muted-foreground)] uppercase tracking-widest hidden sm:block">
            LLC
          </span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium bg-[var(--color-primary)] text-[var(--color-primary-foreground)] px-4 py-2 rounded-md hover:bg-[var(--color-primary)]/90 transition-colors"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
