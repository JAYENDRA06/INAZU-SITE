import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Page Not Found",
  description: "The page you are looking for could not be found on INAZU.",
  path: "/404",
  noIndex: true,
});

export default function NotFound() {
  return (
    <main className="section-shell relative min-h-screen overflow-x-hidden">
      <SiteHeader />
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        <p className="label-xs">404</p>
        <h1 className="font-display text-4xl font-bold text-(--text-strong)">Page not found</h1>
        <p className="max-w-md text-(--text-muted)">
          This page doesn&apos;t exist. Head back to the INAZU homepage to learn about ride tracking for bikes and
          cars.
        </p>
        <Link href="/" className="btn-primary">
          Back to home
        </Link>
      </div>
      <SiteFooter />
    </main>
  );
}
