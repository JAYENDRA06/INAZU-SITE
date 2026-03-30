import Image from "next/image";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Roadmap", href: "/#roadmap" },
  { label: "Early Access", href: "/#download" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export function SiteFooter() {
  return (
    <footer className="mx-auto mt-12 w-full max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
      <div className="rounded-4xl border border-(--border-soft) bg-[color-mix(in_srgb,var(--surface)_84%,transparent)] p-6 sm:p-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-4">
            <span
              className="flex h-12 w-12 items-center justify-center rounded-full border border-(--border-strong) bg-(--logo-bg)"
              style={{ backgroundColor: "var(--logo-bg)" }}
            >
              <Image src="/logo.svg" alt="Inazu logo" width={24} height={24} />
            </span>
            <div>
              <p className="font-display text-lg uppercase tracking-[0.3em] text-(--text-strong)">INAZU</p>
              <p className="mt-2 max-w-sm text-sm text-(--text-muted)">
                Track rides, review stats, and stay consistent across bikes and cars.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-(--text-muted) transition hover:text-(--text-strong)"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-(--border-soft) pt-6 text-xs uppercase tracking-[0.3em] text-(--text-muted) sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 INAZU</span>
          <a href="mailto:hello@inazu.app" className="text-(--text-muted) transition hover:text-(--text-strong)">
            hello@inazu.app
          </a>
        </div>
      </div>
    </footer>
  );
}
