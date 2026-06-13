/** Production site URL — set NEXT_PUBLIC_SITE_URL in deploy env if different. */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://inazu.app";

export const siteName = "INAZU";

export const siteTagline = "For bike & car enthusiasts";

export const defaultDescription =
  "INAZU is built for bike and car enthusiasts—starting with ride tracking, saved recaps, garage stats, and progress. One place to grow from your first session onward.";

export const contactEmail = "hello@inazu.app";

export const supportEmail = "support@inazu.app";

/** Set NO_INDEX=true on preview/staging deploys to block crawlers. */
export const allowIndexing = process.env.NO_INDEX !== "true";

export const locale = "en_US";

export const keywords = [
  "INAZU",
  "inazu app",
  "ride tracking app",
  "bike ride tracker",
  "car trip tracker",
  "GPS ride tracker",
  "offline ride tracking",
  "background GPS tracking",
  "motorcycle ride tracker",
  "cycling tracker app",
  "ride recap app",
  "garage stats tracker",
  "weekly ride progress",
  "bike and car tracker",
] as const;

export const publicRoutes = [
  { path: "/", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/privacy", changeFrequency: "monthly" as const, priority: 0.4 },
  { path: "/terms", changeFrequency: "monthly" as const, priority: 0.4 },
  { path: "/support", changeFrequency: "monthly" as const, priority: 0.5 },
];
