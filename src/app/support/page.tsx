import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, webPageJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Support",
  description:
    "Get help with INAZU. Contact our support team for app issues, account questions, and feedback.",
  path: "/support",
});

const supportEmail = "support@inazu.app";

export default function SupportPage() {
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

        <div className="mt-8 space-y-8 text-(--text-muted)">
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

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-(--text-strong)">Common topics</h2>
            <ul className="list-disc space-y-2 pl-6 leading-7">
              <li>Account access, login, and profile settings</li>
              <li>Ride recording, GPS, and background tracking</li>
              <li>Saved rides, stats, and garage data</li>
              <li>Privacy, data deletion, and account removal</li>
              <li>General feedback and feature requests</li>
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
