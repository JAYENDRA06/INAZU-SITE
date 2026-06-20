import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { buildProfileWebUrl } from "@/lib/profile-links";
import {
  appStoreUrl,
  playStoreUrl,
  siteName,
} from "@/lib/site-config";

type Props = {
  username: string;
};

export function ProfileLinkFallback({ username }: Props) {
  const handle = username.trim();
  const profileUrl = buildProfileWebUrl(handle);

  return (
    <>
      <SiteHeader />
      <main className="mx-auto flex min-h-[70vh] w-full max-w-3xl flex-col items-center px-6 py-16 text-center">
        <div className="mb-6 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border border-[color:var(--border)] bg-[color:var(--surface-2)]">
          <span className="text-3xl font-semibold text-[color:var(--text-muted)]">
            {handle.slice(0, 1).toUpperCase() || "@"}
          </span>
        </div>

        <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--text-muted)]">
          {siteName} profile
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[color:var(--text)]">
          @{handle}
        </h1>
        <p className="mt-4 max-w-md text-sm text-[color:var(--text-muted)]">
          Open this profile in the INAZU app to view rides, stats, and more.
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
