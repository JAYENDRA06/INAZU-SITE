import type { Metadata } from "next";
import Link from "next/link";

import { AppStoreCta, ContentPageShell, FaqList } from "@/components/content-page";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { faqItems } from "@/content/faq";
import { landingPages } from "@/content/landing-pages";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, faqPageJsonLd, webPageJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = buildPageMetadata({
  title: "FAQ",
  description:
    "Answers about INAZU: GPS ride tracking, garage, saved recaps, privacy, background tracking, profiles, and how to get help. Free on the App Store for iPhone.",
  path: "/faq",
  keywords: [
    "inazu faq",
    "inazu help",
    "does inazu track location when not riding",
    "inazu background tracking",
    "inazu garage",
    "inazu privacy",
    "how to use inazu app",
  ],
});

const topicLinks = [
  ...Object.values(landingPages).map((page) => ({
    label: page.title,
    href: `/${page.slug}`,
  })),
  { label: "Support", href: "/support" },
];

export default function FaqPage() {
  return (
    <main
      className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 pb-16 pt-15 sm:px-6 lg:px-8"
      aria-label="INAZU FAQ"
    >
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
          webPageJsonLd({
            path: "/faq",
            title: "FAQ — INAZU",
            description: "Frequently asked questions about INAZU ride tracking.",
          }),
          faqPageJsonLd(faqItems),
        ]}
      />
      <SiteHeader />
      <ContentPageShell>
        <SectionHeading
          eyebrow="FAQ"
          title="Questions about INAZU"
          description="GPS ride tracking, garage, saved recaps, privacy, and what's coming next—answered in one place."
          titleAs="h1"
        />

        <AppStoreCta className="mt-8" />
        <FaqList items={faqItems} />

        <section className="mt-12 border-t border-(--border-soft) pt-8">
          <h2 className="font-display text-xl font-bold text-(--text-strong)">Explore by topic</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {topicLinks.map((link) => (
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

        <section className="mt-12 surface-card rounded-3xl p-6 sm:p-8">
          <h2 className="font-display text-xl font-bold text-(--text-strong)">Still need help?</h2>
          <p className="mt-3 leading-7 text-(--text-muted)">
            Email{" "}
            <a href="mailto:support@inazu.app" className="text-(--accent) underline-offset-2 hover:underline">
              support@inazu.app
            </a>{" "}
            or visit the{" "}
            <Link href="/support" className="text-(--accent) underline-offset-2 hover:underline">
              Support page
            </Link>
            .
          </p>
        </section>
      </ContentPageShell>
      <SiteFooter />
    </main>
  );
}
