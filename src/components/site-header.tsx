import Image from "next/image";

const links = [
  { href: "#capabilities", label: "Capabilities" },
  { href: "#platform", label: "Platform" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#download", label: "Get Early Access" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 mx-auto flex w-full max-w-7xl items-center justify-between gap-4 rounded-full border border-(--border-soft) bg-[color-mix(in_srgb,var(--surface)_82%,transparent)] px-4 py-3 backdrop-blur-xl sm:px-6 lg:px-8">
      <a href="#top" className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-(--border-strong) bg-[radial-gradient(circle_at_top,#ecff95,transparent_55%),var(--surface-soft)] font-display text-sm uppercase tracking-[0.28em] text-(--text-strong)">
          <Image
            src="/logo.svg"
            alt="Inazu logo"
            width={20}
            height={20}
            className="h-auto w-auto"
            priority
          />
        </span>
        <div className="hidden sm:block">
          <p className="font-display text-lg uppercase tracking-[0.35em] text-(--text-strong)">
            INAZU
          </p>
          <p className="text-xs uppercase tracking-[0.25em] text-(--text-muted)">
            Performance telemetry
          </p>
        </div>
      </a>

      <nav className="hidden items-center gap-6 md:flex">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-(--text-muted) transition hover:text-(--text-strong)"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <a
        href="#download"
        className="inline-flex items-center rounded-full bg-(--accent) px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.2em] text-(--background) transition hover:scale-[1.02] hover:bg-(--accent-strong)"
      >
        Join Beta
      </a>
    </header>
  );
}
