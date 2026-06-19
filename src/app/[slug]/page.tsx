import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { AppStoreCta, ContentPageShell, RelatedPages } from "@/components/content-page";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getLandingPage, landingPageSlugs, landingPages } from "@/content/landing-pages";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, webPageJsonLd } from "@/lib/structured-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return landingPageSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getLandingPage(slug);
  if (!page) return {};

  return buildPageMetadata({
    title: page.title,
    description: page.description,
    path: `/${page.slug}`,
    keywords: [...page.keywords],
    ogImageAlt: `${page.title} — INAZU`,
  });
}

export default async function LandingPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getLandingPage(slug);
  if (!page) notFound();

  const relatedLinks = [
    ...page.relatedSlugs
      .map((relatedSlug) => landingPages[relatedSlug])
      .filter(Boolean)
      .map((related) => ({ label: related.title, href: `/${related.slug}` })),
    { label: "FAQ", href: "/faq" },
    { label: "Support", href: "/support" },
  ];

  return (
    <main
      className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 pb-16 pt-15 sm:px-6 lg:px-8"
      aria-label={page.title}
    >
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: page.title, path: `/${page.slug}` },
          ]),
          webPageJsonLd({
            path: `/${page.slug}`,
            title: `${page.title} — INAZU`,
            description: page.description,
          }),
        ]}
      />
      <SiteHeader />
      <ContentPageShell>
        <SectionHeading
          eyebrow={page.eyebrow}
          title={page.title}
          description={page.intro}
          titleAs="h1"
        />

        <AppStoreCta className="mt-8" />

        <div className="mt-12 space-y-8">
          {page.sections.map((section) => (
            <section key={section.title} className="surface-card space-y-4 rounded-3xl p-6 sm:p-8">
              <h2 className="font-display text-xl font-bold text-(--text-strong) sm:text-2xl">{section.title}</h2>
              <p className="leading-7 text-(--text-muted)">{section.body}</p>
              {section.bullets ? (
                <ul className="list-disc space-y-2 pl-6 text-sm leading-7 text-(--text-muted)">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>

        <section className="mt-12 surface-card rounded-3xl p-6 sm:p-8">
          <h2 className="font-display text-xl font-bold text-(--text-strong)">Download INAZU</h2>
          <p className="mt-3 leading-7 text-(--text-muted)">
            Free on the App Store for iPhone. Start tracking rides, saving recaps, and building your garage today.
          </p>
          <AppStoreCta className="mt-6" />
        </section>

        <RelatedPages links={relatedLinks} />

        <p className="mt-8 text-sm text-(--text-muted)">
          Questions? See the{" "}
          <Link href="/faq" className="text-(--accent) underline-offset-2 hover:underline">
            FAQ
          </Link>{" "}
          or{" "}
          <Link href="/support" className="text-(--accent) underline-offset-2 hover:underline">
            contact support
          </Link>
          .
        </p>
      </ContentPageShell>
      <SiteFooter />
    </main>
  );
}
