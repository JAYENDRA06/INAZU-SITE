import type { Metadata } from "next";
import Link from "next/link";

import { AppStoreCta } from "@/components/content-page";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { faqItems } from "@/content/faq";
import { landingPages } from "@/content/landing-pages";
import { buildPageMetadata } from "@/lib/seo";
import { supportEmail } from "@/lib/site-config";
import { breadcrumbJsonLd, webPageJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Support",
  description:
    "INAZU support: help with ride tracking, GPS, garage, account access, privacy, and the App Store download. Email support@inazu.app.",
  path: "/support",
  keywords: [
    "inazu support",
    "inazu help",
    "inazu contact",
    "inazu app support",
  ],
});

const quickHelp = [
  {
    title: "Start or save a ride",
    body: "Open the Ride tab, pick a vehicle from your garage, and start tracking. When you finish, save with a title and notes to keep your recap.",
    href: "/ride-tracking",
  },
  {
    title: "Background GPS during rides",
    body: "INAZU can record in the background while your screen is off during an active ride only. Location is not used when you are not riding.",
    href: "/faq",
  },
  {
    title: "Garage and vehicle stats",
    body: "Add bikes and cars to your garage and select one before each session. Stats update when you save a ride.",
    href: "/vehicle-garage",
  },
  {
    title: "Privacy and account deletion",
    body: "Manage privacy settings, private profiles, and account deletion from Settings—or use our account deletion page.",
    href: "/delete-account",
  },
];

export default function SupportPage() {
  const topFaq = faqItems.slice(0, 6);

  return (
    <main
      className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 pb-16 pt-15 sm:px-6 lg:px-8"
      aria-label="INAZU Support"
    >
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Support", path: "/support" },
          ]),
          webPageJsonLd({
            path: "/support",
            title: "Support — INAZU",
            description: "Contact INAZU support for help with the app.",
          }),
        ]}
      />
      <SiteHeader />
      <div className="mx-auto mt-12 w-full max-w-3xl">
        <SectionHeading
          eyebrow="Support"
          title="How can we help?"
          description="Questions about INAZU, your account, or ride tracking—we're here."
          titleAs="h1"
        />

        <AppStoreCta className="mt-8" label="Get INAZU on the App Store" />

        <div className="mt-10 space-y-8 text-(--text-muted)">
          <section className="surface-card space-y-4 rounded-3xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-(--text-strong)">Contact support</h2>
            <p className="leading-7">
              Email us and we&apos;ll get back to you as soon as we can. Include your device model, iOS version, and a
              short description of the issue if you&apos;re reporting a bug.
            </p>
            <a
              href={`mailto:${supportEmail}`}
              className="inline-flex text-base font-semibold text-(--accent) underline-offset-2 hover:underline"
            >
              {supportEmail}
            </a>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-(--text-strong)">Quick help</h2>
            <ul className="grid gap-3">
              {quickHelp.map((item) => (
                <li key={item.title} className="surface-card rounded-2xl p-5">
                  <h3 className="font-semibold text-(--text-strong)">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7">{item.body}</p>
                  <Link
                    href={item.href}
                    className="mt-3 inline-block text-sm font-semibold text-(--accent) underline-offset-2 hover:underline"
                  >
                    Learn more
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-lg font-semibold text-(--text-strong)">Common questions</h2>
              <Link href="/faq" className="text-sm font-semibold text-(--accent) underline-offset-2 hover:underline">
                View all FAQ
              </Link>
            </div>
            <ul className="space-y-3">
              {topFaq.map((item) => (
                <li key={item.question} className="rounded-2xl border border-(--border-soft) bg-(--surface-soft) px-5 py-4">
                  <h3 className="font-medium text-(--text-strong)">{item.question}</h3>
                  <p className="mt-2 text-sm leading-7">{item.answer}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-(--text-strong)">Guides</h2>
            <ul className="grid gap-2 sm:grid-cols-2">
              {Object.values(landingPages).map((page) => (
                <li key={page.slug}>
                  <Link
                    href={`/${page.slug}`}
                    className="block rounded-xl border border-(--border-soft) bg-(--surface-soft) px-4 py-3 text-sm font-medium text-(--text-strong) transition hover:border-(--accent)"
                  >
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-(--text-strong)">Policies</h2>
            <p className="leading-7">
              For legal and privacy information, see our{" "}
              <Link href="/privacy" className="text-(--accent) underline-offset-2 hover:underline">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="/terms" className="text-(--accent) underline-offset-2 hover:underline">
                Terms & Conditions
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
      <SiteFooter />
    </main>
  );
}
