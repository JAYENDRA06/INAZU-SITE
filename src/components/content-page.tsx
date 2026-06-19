import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { appStoreUrl } from "@/lib/site-config";

type AppStoreCtaProps = {
  className?: string;
  label?: string;
  note?: string;
};

export function AppStoreCta({
  className = "",
  label = "Download on the App Store",
  note = "Free · iPhone · Requires iOS 15.1+",
}: AppStoreCtaProps) {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <a
        href={appStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary w-fit"
      >
        {label}
        <ArrowRight className="h-4 w-4" />
      </a>
      {note ? <p className="text-xs text-(--text-muted)">{note}</p> : null}
    </div>
  );
}

type ContentPageShellProps = {
  children: React.ReactNode;
  breadcrumbs?: { name: string; path: string }[];
};

export function ContentPageShell({ children }: ContentPageShellProps) {
  return (
    <div className="mx-auto mt-12 w-full max-w-3xl">
      {children}
    </div>
  );
}

type FaqListProps = {
  items: { question: string; answer: string }[];
};

export function FaqList({ items }: FaqListProps) {
  return (
    <div className="mt-8 space-y-3">
      {items.map((item) => (
        <details
          key={item.question}
          className="group surface-card rounded-2xl border border-(--border-soft) px-5 py-4 open:border-(--accent)"
        >
          <summary className="cursor-pointer list-none font-semibold text-(--text-strong) marker:content-none [&::-webkit-details-marker]:hidden">
            <span className="flex items-start justify-between gap-4">
              {item.question}
              <span className="mt-0.5 shrink-0 text-(--text-muted) transition group-open:rotate-45">+</span>
            </span>
          </summary>
          <p className="mt-3 text-sm leading-7 text-(--text-muted)">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

type RelatedPagesProps = {
  links: { label: string; href: string }[];
};

export function RelatedPages({ links }: RelatedPagesProps) {
  if (links.length === 0) return null;

  return (
    <section className="mt-12 border-t border-(--border-soft) pt-8">
      <h2 className="font-display text-xl font-bold text-(--text-strong)">Related</h2>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="block rounded-xl border border-(--border-soft) bg-(--surface-soft) px-4 py-3 text-sm font-medium text-(--text-strong) transition hover:border-(--accent)"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
