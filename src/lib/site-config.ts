/** Production site URL — set NEXT_PUBLIC_SITE_URL in deploy env if different. */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://inazu.app";

export const siteName = "INAZU";

export const siteTagline = "Your ride companion";

export const defaultDescription =
  "INAZU is built for bike and car enthusiasts—starting with ride tracking, saved recaps, garage stats, and progress. One place to grow from your first session onward.";

export const contactEmail = "hello@inazu.app";

export const supportEmail = "support@inazu.app";

export const appStoreUrl = "https://apps.apple.com/us/app/inazu/id6775971770";

/** Set NO_INDEX=true on preview/staging deploys to block crawlers. */
export const allowIndexing = process.env.NO_INDEX !== "true";

export const locale = "en_US";

/** Global keywords — merged with page-specific keywords in buildPageMetadata. */
export const keywords = [
  "INAZU",
  "inazu app",
  "inazu ride tracker",
  "inazu app store",
  "inazu motorcycle",
  "inazu garage",
  "ride tracking app",
  "gps ride tracker",
  "bike ride tracker",
  "car trip tracker",
  "motorcycle ride tracker",
  "motorcycle ride tracker iphone",
  "car trip tracker iphone",
  "bike ride tracker iphone",
  "cycling tracker app",
  "ride recap app",
  "vehicle garage app",
  "bike and car tracker",
  "track rides iphone",
  "gps ride tracker iphone free",
  "background gps tracking active ride",
  "weekly ride progress",
  "garage stats tracker",
  "follow riders app",
  "your ride companion",
] as const;

export const publicRoutes = [
  { path: "/", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/faq", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/motorcycle-ride-tracker", changeFrequency: "monthly" as const, priority: 0.85 },
  { path: "/car-trip-tracker", changeFrequency: "monthly" as const, priority: 0.85 },
  { path: "/bike-ride-tracker", changeFrequency: "monthly" as const, priority: 0.85 },
  { path: "/ride-tracking", changeFrequency: "monthly" as const, priority: 0.85 },
  { path: "/vehicle-garage", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/support", changeFrequency: "monthly" as const, priority: 0.6 },
  { path: "/privacy", changeFrequency: "monthly" as const, priority: 0.4 },
  { path: "/terms", changeFrequency: "monthly" as const, priority: 0.4 },
] as const;
