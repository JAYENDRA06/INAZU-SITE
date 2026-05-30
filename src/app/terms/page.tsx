import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { LegalDocument } from "@/components/legal-document";
import { SectionHeading } from "@/components/section-heading";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { termsEffectiveDate, termsSections } from "@/content/legal/terms-of-service";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, webPageJsonLd } from "@/lib/structured-data";

type TermsPageProps = {
  searchParams: Promise<{ ref?: string }>;
};

export async function generateMetadata({ searchParams }: TermsPageProps): Promise<Metadata> {
  const { ref } = await searchParams;

  return buildPageMetadata({
    title: "Terms & Conditions",
    description:
      "Terms and conditions for using INAZU, the ride tracking app for bikes and cars, including licensing, responsible use, accounts, and liability.",
    path: "/terms",
    noIndex: ref === "app",
  });
}

export default async function TermsPage({ searchParams }: TermsPageProps) {
  const { ref } = await searchParams;
  const isEmbedded = ref === "app";

  return (
    <main
      className={`mx-auto flex min-h-screen max-w-7xl flex-col px-4 pb-16 ${!isEmbedded ? "pt-15" : ""} sm:px-6 lg:px-8`}
      aria-label="INAZU Terms and Conditions"
    >
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Terms & Conditions", path: "/terms" },
          ]),
          webPageJsonLd({
            path: "/terms",
            title: "Terms & Conditions — INAZU",
            description: "The rules and guidelines for using the INAZU ride tracking application.",
          }),
        ]}
      />
      {!isEmbedded && <SiteHeader />}
      <div className="mx-auto mt-12 w-full max-w-3xl">
        <SectionHeading
          eyebrow="Terms"
          title="Terms & Conditions"
          description="The rules and guidelines for using INAZU."
          titleAs="h1"
        />
        <div className="mt-3 text-sm text-(--text-muted)">Last updated: {termsEffectiveDate}</div>
        <LegalDocument sections={termsSections} />
      </div>
      {!isEmbedded && <SiteFooter />}
    </main>
  );
}
