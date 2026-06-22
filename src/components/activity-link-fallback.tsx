import Link from "next/link";

import { buildActivityWebUrl } from "@/lib/activity-links";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  appStoreUrl,
  playStoreUrl,
  siteName,
} from "@/lib/site-config";

type Props = {
  rideId: string;
  title?: string;
};

export function ActivityLinkFallback({ rideId, title }: Props) {
  const activityUrl = buildActivityWebUrl(rideId);
  const heading = title?.trim() || "Activity";

  return (
    <>
      <SiteHeader />
      <main className="mx-auto flex min-h-[70vh] w-full max-w-3xl flex-col items-center px-6 pb-16 pt-24 text-center sm:pt-28">
        <div className="mb-6 flex h-24 w-24 items-center justify-center overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface-2)]">
          <span className="text-3xl font-semibold text-[color:var(--text-muted)]">↗</span>
        </div>

        <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--text-muted)]">
          {siteName} activity
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[color:var(--text)]">
          {heading}
        </h1>
        <p className="mt-4 max-w-md text-sm text-[color:var(--text-muted)]">
          Open this activity in the INAZU app to view the route, stats, and more.
        </p>

        <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href={appStoreUrl}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[color:var(--primary)] px-6 text-sm font-semibold text-[color:var(--primary-foreground)]"
          >
            Download on the App Store
          </a>
          <a
            href={playStoreUrl}
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-6 text-sm font-semibold text-[color:var(--text)]"
          >
            Get it on Google Play
          </a>
        </div>

        <p className="mt-8 max-w-lg text-xs text-[color:var(--text-muted)]">
          Already have INAZU installed?{" "}
          <Link href={activityUrl} className="underline underline-offset-4">
            Open this activity link
          </Link>{" "}
          again to jump into the app.
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
