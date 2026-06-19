import type { Metadata } from "next";
import Link from "next/link";

import { ContentPageShell } from "@/components/content-page";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { buildPageMetadata } from "@/lib/seo";
import { supportEmail } from "@/lib/site-config";
import { breadcrumbJsonLd, webPageJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Delete Your Account",
  description:
    "Request deletion of your INAZU account and associated data. Delete in the app from Settings or email support@inazu.app.",
  path: "/delete-account",
  keywords: [
    "inazu delete account",
    "inazu account deletion",
    "delete inazu data",
    "inazu data deletion request",
  ],
});

const deletedData = [
  "Account information (email, username, and login credentials)",
  "Profile information (display name, preferences, and public profile data)",
  "Saved rides and activity history (routes, stats, charts, and notes)",
  "Garage and vehicle details linked to your account",
  "Social connections (followers, following, and friend relationships)",
  "Search history and in-app preferences associated with your account",
];

const retainedData = [
  {
    item: "Backup copies",
    detail: "Removed on a rolling basis within our standard backup retention cycle (typically up to 90 days).",
  },
  {
    item: "Legal or security records",
    detail: "Limited information we must keep to comply with law, resolve disputes, or prevent fraud.",
  },
  {
    item: "Anonymized or aggregated data",
    detail: "Data that can no longer be linked to you may be retained for analytics and service improvement.",
  },
];

export default function DeleteAccountPage() {
  const mailto = `mailto:${supportEmail}?subject=${encodeURIComponent("INAZU account deletion request")}&body=${encodeURIComponent("Please delete my INAZU account and associated data.\n\nRegistered email:\n\n(Optional) Reason for leaving:\n")}`;

  return (
    <main
      className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 pb-16 pt-15 sm:px-6 lg:px-8"
      aria-label="INAZU account deletion"
    >
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Delete account", path: "/delete-account" },
          ]),
          webPageJsonLd({
            path: "/delete-account",
            title: "Delete Your Account — INAZU",
            description: "How to request deletion of your INAZU account and associated data.",
          }),
        ]}
      />
      <SiteHeader />
      <ContentPageShell>
        <SectionHeading
          eyebrow="Account & privacy"
          title="Delete your INAZU account"
          description="You can request deletion of your account and associated personal data at any time. Account deletion is permanent."
          titleAs="h1"
        />

        <section className="mt-10 surface-card space-y-4 rounded-3xl p-6 sm:p-8">
          <h2 className="font-display text-xl font-bold text-(--text-strong)">Option 1 — Delete in the app</h2>
          <ol className="list-decimal space-y-3 pl-6 text-sm leading-7 text-(--text-muted)">
            <li>Open INAZU on your iPhone.</li>
            <li>Go to <strong className="text-(--text-strong)">Settings</strong>.</li>
            <li>Select <strong className="text-(--text-strong)">Account</strong> (or account management).</li>
            <li>Choose <strong className="text-(--text-strong)">Delete account</strong> and confirm.</li>
          </ol>
          <p className="text-sm leading-7 text-(--text-muted)">
            You must be signed in to the account you want to delete. Deletion starts immediately and cannot be undone.
          </p>
        </section>

        <section className="mt-6 surface-card space-y-4 rounded-3xl p-6 sm:p-8">
          <h2 className="font-display text-xl font-bold text-(--text-strong)">Option 2 — Request by email</h2>
          <p className="text-sm leading-7 text-(--text-muted)">
            If you cannot access the app, email us from the address linked to your INAZU account. Include the email
            you used to register so we can verify ownership.
          </p>
          <a
            href={mailto}
            className="inline-flex text-base font-semibold text-(--accent) underline-offset-2 hover:underline"
          >
            {supportEmail}
          </a>
          <p className="text-sm leading-7 text-(--text-muted)">
            We will process verified deletion requests within a reasonable period, typically within 30 days.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="font-display text-xl font-bold text-(--text-strong)">Data that is deleted</h2>
          <p className="text-sm leading-7 text-(--text-muted)">
            When your account is deleted, we remove or anonymize the following data associated with your account:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-sm leading-7 text-(--text-muted)">
            {deletedData.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="font-display text-xl font-bold text-(--text-strong)">Data that may be retained</h2>
          <p className="text-sm leading-7 text-(--text-muted)">
            Some information may be kept for a limited time after deletion, as described in our Privacy Policy:
          </p>
          <ul className="space-y-3">
            {retainedData.map((row) => (
              <li
                key={row.item}
                className="rounded-2xl border border-(--border-soft) bg-(--surface-soft) px-5 py-4 text-sm leading-7 text-(--text-muted)"
              >
                <strong className="text-(--text-strong)">{row.item}.</strong> {row.detail}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10 surface-card rounded-3xl p-6 sm:p-8">
          <h2 className="font-display text-xl font-bold text-(--text-strong)">Before you delete</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-sm leading-7 text-(--text-muted)">
            <li>Account deletion is permanent. Your ride history, profile, and garage data cannot be restored.</li>
            <li>Export or save any ride information you want to keep before deleting.</li>
          </ul>
        </section>

        <p className="mt-10 text-sm leading-7 text-(--text-muted)">
          For more detail, see our{" "}
          <Link href="/privacy" className="text-(--accent) underline-offset-2 hover:underline">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/terms" className="text-(--accent) underline-offset-2 hover:underline">
            Terms & Conditions
          </Link>
          . Questions?{" "}
          <Link href="/support" className="text-(--accent) underline-offset-2 hover:underline">
            Contact support
          </Link>
          .
        </p>
      </ContentPageShell>
      <SiteFooter />
    </main>
  );
}
