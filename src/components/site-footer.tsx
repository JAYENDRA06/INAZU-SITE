import Image from "next/image";

import { appStoreUrl } from "@/lib/site-config";

const footerLinks = [
  { label: "Features", href: "/#capabilities" },
  { label: "FAQ", href: "/faq" },
  { label: "Support", href: "/support" },
  { label: "Privacy", href: "/privacy" },
  { label: "Delete account", href: "/delete-account" },
  { label: "Terms", href: "/terms" },
];

const guideLinks = [
  { label: "Ride tracking", href: "/ride-tracking" },
  { label: "Motorcycle tracker", href: "/motorcycle-ride-tracker" },
  { label: "Car trip tracker", href: "/car-trip-tracker" },
  { label: "Bike ride tracker", href: "/bike-ride-tracker" },
  { label: "Vehicle garage", href: "/vehicle-garage" },
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
              For bike and car enthusiasts—track rides, save recaps, and build momentum from one place.
            </p>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <nav className="grid gap-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-(--text-muted)">Site</p>
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
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-(--accent) transition hover:text-(--accent-strong)"
            >
              App Store
            </a>
          </nav>

          <nav className="grid gap-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-(--text-muted)">Guides</p>
            {guideLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-(--text-muted) transition hover:text-(--text-strong)"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
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
