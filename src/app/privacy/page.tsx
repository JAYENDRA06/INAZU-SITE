import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { LegalDocument } from "@/components/legal-document";
import { SectionHeading } from "@/components/section-heading";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { privacyPolicyEffectiveDate, privacyPolicySections } from "@/content/legal/privacy-policy";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, webPageJsonLd } from "@/lib/structured-data";

type PrivacyPageProps = {
  searchParams: Promise<{ ref?: string }>;
};

export async function generateMetadata({ searchParams }: PrivacyPageProps): Promise<Metadata> {
  const { ref } = await searchParams;

  return buildPageMetadata({
    title: "Privacy Policy",
    description:
      "INAZU Privacy Policy: how we collect, use, store, and protect your information when you use our ride tracking app for bikes and cars.",
    path: "/privacy",
    noIndex: ref === "app",
  });
}

export default async function PrivacyPage({ searchParams }: PrivacyPageProps) {
  const { ref } = await searchParams;
  const isEmbedded = ref === "app";

  return (
    <main
      className={`mx-auto flex min-h-screen max-w-7xl flex-col px-4 pb-16 ${!isEmbedded ? "pt-15" : ""} sm:px-6 lg:px-8`}
      aria-label="INAZU Privacy Policy"
    >
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Privacy Policy", path: "/privacy" },
          ]),
          webPageJsonLd({
            path: "/privacy",
            title: "Privacy Policy — INAZU",
            description:
              "How INAZU collects, uses, discloses, and safeguards your information when you use the ride tracking app.",
          }),
        ]}
      />
      {!isEmbedded && <SiteHeader />}
      <div className="mx-auto mt-12 w-full max-w-3xl">
        <SectionHeading
          eyebrow="Privacy"
          title="Privacy Policy"
          description="How INAZU collects, uses, discloses, and protects your information."
          titleAs="h1"
        />
        <div className="mt-3 text-sm text-(--text-muted)">Last updated: {privacyPolicyEffectiveDate}</div>
        <LegalDocument sections={privacyPolicySections} />
      </div>
      {!isEmbedded && <SiteFooter />}
    </main>
  );
}
