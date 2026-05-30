import Image from "next/image";

const footerLinks = [
  { label: "Features", href: "/#capabilities" },
  { label: "Roadmap", href: "/#roadmap" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export function SiteFooter() {
  return (
    <footer className="section-shell mx-auto mt-20 w-full max-w-7xl border-t border-(--border-soft) px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex items-start gap-4">
          <span
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-(--border-strong)"
            style={{ backgroundColor: "var(--logo-bg)" }}
          >
            <Image src="/logo.svg" alt="Inazu logo" width={20} height={20} />
          </span>
          <div>
            <p className="font-display text-lg font-bold text-(--text-strong)">INAZU</p>
            <p className="mt-2 max-w-xs text-sm leading-6 text-(--text-muted)">
              Ride tracking and recaps for bikes and cars—offline, in background, with garage-linked stats.
            </p>
          </div>
        </div>

        <nav className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-(--text-muted) transition hover:text-(--text-strong)"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#download"
            className="text-sm font-semibold text-(--accent) transition hover:text-(--accent-strong)"
          >
            Join beta
          </a>
        </nav>
      </div>

      <div className="mt-10 flex flex-col gap-2 border-t border-(--border-soft) pt-6 text-xs text-(--text-muted) sm:flex-row sm:items-center sm:justify-between">
        <span>© 2026 INAZU</span>
        <a href="mailto:hello@inazu.app" className="transition hover:text-(--text-strong)">
          hello@inazu.app
        </a>
      </div>
    </footer>
  );
}
