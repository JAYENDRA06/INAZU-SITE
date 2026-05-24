/** Production site URL — set NEXT_PUBLIC_SITE_URL in deploy env if different. */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://inazu.app";

export const siteName = "INAZU";

export const siteTagline = "Your Ride Companion";

export const defaultDescription =
  "INAZU is a ride tracking app for bikes and cars. Record sessions offline or in the background, save GPS recaps with stats and charts, sync garage-linked vehicle data, and follow weekly and monthly progress.";

export const contactEmail = "hello@inazu.app";

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
];
