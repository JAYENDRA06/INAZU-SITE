import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ActivityAppHandoff } from "@/components/activity-app-handoff";
import { ActivityLinkFallback } from "@/components/activity-link-fallback";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { buildActivityWebUrl } from "@/lib/activity-links";
import {
  fetchPublicActivity,
  formatActivityDistance,
  formatActivityDuration,
  normalizeRideId,
} from "@/lib/activity-public-api";
import { buildPageMetadata } from "@/lib/seo";
import {
  appStoreUrl,
  playStoreUrl,
  siteName,
  siteTagline,
} from "@/lib/site-config";

type PageProps = {
  params: Promise<{ rideId: string }>;
};

function activityDescription(
  title: string,
  distance: string | null,
  duration: string | null,
): string {
  const parts = [title];
  if (distance) parts.push(distance);
  if (duration) parts.push(duration);
  const summary = parts.join(" · ");
  return `${summary} on ${siteName}. ${siteTagline}. Open in the app for the full recap.`;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { rideId } = await params;
  const id = normalizeRideId(rideId);

  if (!id) {
    return buildPageMetadata({
      title: "Activity not found",
      description: "This INAZU activity link is invalid.",
      path: "/a",
      noIndex: true,
    });
  }

  const activity = await fetchPublicActivity(id);

  if (!activity) {
    return buildPageMetadata({
      title: "Activity",
      description: `View this ride on ${siteName}. Open in the app for route, stats, and more.`,
      path: `/a/${id}`,
    });
  }

  return buildPageMetadata({
    title: activity.activityTitle,
    description: activityDescription(
      activity.activityTitle,
      formatActivityDistance(activity.distanceM),
      formatActivityDuration(activity.durationSec),
    ),
    path: `/a/${id}`,
    keywords: ["inazu activity", "ride recap", activity.activityType],
  });
}

export default async function ActivityLinkPage({ params }: PageProps) {
  const { rideId } = await params;
  const id = normalizeRideId(rideId);

  if (!id) {
    notFound();
  }

  const activity = await fetchPublicActivity(id);

  if (!activity) {
    return (
      <>
        <ActivityAppHandoff rideId={id} />
        <ActivityLinkFallback rideId={id} />
      </>
    );
  }

  const activityUrl = buildActivityWebUrl(id);
  const distance = formatActivityDistance(activity.distanceM);
  const duration = formatActivityDuration(activity.durationSec);

  return (
    <>
      <ActivityAppHandoff rideId={id} />
      <SiteHeader />
      <main className="mx-auto flex min-h-[70vh] w-full max-w-3xl flex-col items-center px-6 pb-16 pt-24 text-center sm:pt-28">
        {activity.polylineImageDark ? (
          <div className="mb-6 w-full max-w-sm overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface-2)]">
            <Image
              src={activity.polylineImageDark}
              alt={`${activity.activityTitle} route preview`}
              width={400}
              height={240}
              className="h-auto w-full object-cover"
              unoptimized
            />
          </div>
        ) : (
          <div className="mb-6 flex h-24 w-24 items-center justify-center overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface-2)]">
            <span className="text-3xl font-semibold text-[color:var(--text-muted)]">↗</span>
          </div>
        )}

        <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--text-muted)]">
          {siteName} activity
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[color:var(--text)]">
          {activity.activityTitle}
        </h1>
        {distance || duration ? (
          <p className="mt-2 text-base text-[color:var(--text-muted)]">
            {[distance, duration].filter(Boolean).join(" · ")}
          </p>
        ) : null}
        <p className="mt-4 max-w-md text-sm text-[color:var(--text-muted)]">
          View the full route, stats, and speed chart in INAZU.
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
