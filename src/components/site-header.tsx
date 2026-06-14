"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteTagline } from "@/lib/site-config";

const links = [
  { href: "/#capabilities", label: "Features" },
  { href: "/#roadmap", label: "Roadmap" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-(--border-soft) bg-[color-mix(in_srgb,var(--background)_88%,transparent)] backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="INAZU home">
          <span
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-(--border-strong)"
            style={{ backgroundColor: "var(--logo-bg)" }}
          >
            <Image src="/logo.svg" alt="Inazu logo" width={18} height={18} priority />
          </span>
          <div className="hidden sm:block">
            <p className="font-display text-base font-bold text-(--text-strong)">INAZU</p>
            <p className="text-xs text-(--text-muted)">{siteTagline}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
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
          <Link href="/#download" className="btn-primary px-4 py-2 text-sm">
            Join beta
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-(--border-strong) bg-(--surface) text-(--text-strong)"
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="border-t border-(--border-soft) bg-(--surface) px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-(--text-strong) hover:bg-(--surface-soft)"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/#download" onClick={() => setIsOpen(false)} className="btn-primary mt-2">
              Join beta
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
