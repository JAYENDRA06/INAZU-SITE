import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ProfileAppHandoff } from "@/components/profile-app-handoff";
import { ProfileLinkFallback } from "@/components/profile-link-fallback";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { buildProfileWebUrl } from "@/lib/profile-links";
import {
  fetchPublicProfile,
  formatProfileLocation,
  normalizeProfileHandle,
  type PublicProfilePreview,
} from "@/lib/profile-public-api";
import { buildPageMetadata } from "@/lib/seo";
import {
  appStoreUrl,
  playStoreUrl,
  siteName,
  siteTagline,
} from "@/lib/site-config";

type PageProps = {
  params: Promise<{ username: string }>;
};

function profileDescription(profile: PublicProfilePreview): string {
  const location = formatProfileLocation(profile);
  if (profile.is_private) {
    return `@${profile.username} on ${siteName} — private profile. Open in the app to connect.`;
  }
  if (location) {
    return `@${profile.username} on ${siteName} — rider profile from ${location}. ${siteTagline}.`;
  }
  return `@${profile.username} on ${siteName} — bike & car ride profile. ${siteTagline}.`;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { username } = await params;
  const handle = normalizeProfileHandle(username);
  if (!handle) {
    return buildPageMetadata({
      title: "Profile not found",
      description: "This INAZU profile link is invalid.",
      path: "/u",
      noIndex: true,
    });
  }

  const profile = await fetchPublicProfile(handle);

  if (!profile) {
    return buildPageMetadata({
      title: `@${handle}`,
      description: `View @${handle} on ${siteName}. Open in the app for rides, stats, and more.`,
      path: `/u/${handle}`,
    });
  }

  return buildPageMetadata({
    title: `@${profile.username}`,
    description: profileDescription(profile),
    path: `/u/${profile.username}`,
    keywords: ["inazu profile", profile.username, "ride tracker profile"],
  });
}

export default async function ProfileLinkPage({ params }: PageProps) {
  const { username } = await params;
  const handle = normalizeProfileHandle(username);

  if (!handle) {
    notFound();
  }

  const profile = await fetchPublicProfile(handle);

  if (!profile) {
    return (
      <>
        <ProfileAppHandoff username={handle} />
        <ProfileLinkFallback username={handle} />
      </>
    );
  }

  const location = formatProfileLocation(profile);
  const profileUrl = buildProfileWebUrl(profile.username);

  return (
    <>
      <ProfileAppHandoff username={profile.username} />
      <SiteHeader />
      <main className="mx-auto flex min-h-[70vh] w-full max-w-3xl flex-col items-center px-6 pb-16 pt-24 text-center sm:pt-28">
        <div className="mb-6 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border border-[color:var(--border)] bg-[color:var(--surface-2)]">
          {profile.profile_photo ? (
            <Image
              src={profile.profile_photo}
              alt={`${profile.username} profile photo`}
              width={96}
              height={96}
              className="h-full w-full object-cover"
              unoptimized
            />
          ) : (
            <span className="text-3xl font-semibold text-[color:var(--text-muted)]">
              {profile.username.slice(0, 1).toUpperCase()}
            </span>
          )}
        </div>

        <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--text-muted)]">
          {siteName} profile
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[color:var(--text)]">
          @{profile.username}
        </h1>
        {location ? (
          <p className="mt-2 text-base text-[color:var(--text-muted)]">{location}</p>
        ) : null}
        {profile.is_private ? (
          <p className="mt-4 max-w-md text-sm text-[color:var(--text-muted)]">
            This profile is private. Open INAZU to view more if you follow them.
          </p>
        ) : (
          <p className="mt-4 max-w-md text-sm text-[color:var(--text-muted)]">
            Track rides, save recaps, and follow progress on {siteName}.
          </p>
        )}

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
          <Link href={profileUrl} className="underline underline-offset-4">
            Open this profile link
          </Link>{" "}
          again to jump into the app.
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
