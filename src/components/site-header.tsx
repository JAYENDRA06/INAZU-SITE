"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "/#capabilities", label: "Capabilities" },
  { href: "/#roadmap", label: "Roadmap" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-1/2 top-4 z-50 flex w-[calc(100%-2rem)] max-w-7xl -translate-x-1/2 items-center justify-between gap-4 rounded-full border border-(--border-soft) bg-[color-mix(in_srgb,var(--surface)_82%,transparent)] px-4 py-3 backdrop-blur-xl sm:w-[calc(100%-3rem)] sm:px-6 lg:w-[calc(100%-4rem)] lg:px-8">
      <Link href="/" className="flex items-center gap-3">
        <span
          className="flex h-10 w-10 items-center justify-center rounded-full border border-(--border-strong) bg-(--logo-bg) font-display text-sm uppercase tracking-[0.28em] text-(--text-strong)"
          style={{ backgroundColor: "var(--logo-bg)" }}
        >
          <Image
            src="/logo.svg"
            alt="Inazu logo"
            width={20}
            height={20}
            className="h-auto w-auto"
            priority
          />
        </span>
        <div className="hidden md:block">
          <p className="font-display text-lg uppercase tracking-[0.35em] text-(--text-strong)">
            INAZU
          </p>
          <p className="text-xs uppercase tracking-[0.25em] text-(--text-muted)">
            Performance telemetry
          </p>
        </div>
      </Link>

      <nav className="hidden items-center gap-6 lg:flex">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-(--text-muted) transition hover:text-(--text-strong)"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="hidden items-center gap-3 lg:flex">
        <ThemeToggle />
        <Link
          href="/#download"
          className="inline-flex items-center rounded-full bg-(--accent) px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.2em] text-(--background) transition hover:scale-[1.02] hover:bg-(--accent-strong)"
        >
          Join Beta
        </Link>
      </div>

      <div className="flex items-center gap-2 lg:hidden">
        <ThemeToggle />
        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-(--border-strong) bg-(--surface-soft) text-(--text-strong)"
        >
          {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {isOpen ? (
        <div className="absolute left-4 right-4 top-18 z-50 rounded-3xl border border-(--border-strong) bg-[color-mix(in_srgb,var(--surface)_95%,transparent)] p-4 shadow-[0_30px_80px_rgba(0,0,0,0.35)] lg:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl border border-(--border-soft) bg-(--surface-soft) px-4 py-3 text-sm font-medium text-(--text-strong)"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#download"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center rounded-full bg-(--accent) px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-(--background)"
            >
              Join Beta
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
