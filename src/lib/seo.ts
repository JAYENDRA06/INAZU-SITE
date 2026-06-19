import type { Metadata } from "next";

import {
  allowIndexing,
  contactEmail,
  defaultDescription,
  keywords,
  locale,
  siteName,
  siteTagline,
  siteUrl,
} from "@/lib/site-config";

const titleTemplate = `%s | ${siteName}`;

export type PageSeoInput = {
  title: string;
  description?: string;
  path: string;
  noIndex?: boolean;
  ogImageAlt?: string;
  keywords?: string[];
};

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (normalized === "/") return siteUrl;
  return `${siteUrl}${normalized}`;
}

export function buildPageMetadata({
  title,
  description = defaultDescription,
  path,
  noIndex = false,
  ogImageAlt,
  keywords: pageKeywords,
}: PageSeoInput): Metadata {
  const url = absoluteUrl(path);
  const indexable = allowIndexing && !noIndex;
  const ogTitle = path === "/" ? title : `${title} | ${siteName}`;
  const mergedKeywords = pageKeywords
    ? [...new Set([...pageKeywords, ...keywords])]
    : [...keywords];

  return {
    title: path === "/" ? { absolute: title } : title,
    description,
    keywords: mergedKeywords,
    authors: [{ name: siteName, url: siteUrl }],
    creator: siteName,
    publisher: siteName,
    applicationName: siteName,
    category: "Sports & Fitness",
    alternates: {
      canonical: url,
    },
    robots: indexable
      ? {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        }
      : {
          index: false,
          follow: false,
          googleBot: { index: false, follow: false },
        },
    openGraph: {
      type: path === "/" ? "website" : "article",
      locale,
      url,
      siteName,
      title: ogTitle,
      description,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: ogImageAlt ?? `${siteName} — ${siteTagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: ["/twitter-image"],
    },
    other: {
      "contact:email": contactEmail,
    },
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — Home for Bike & Car Enthusiasts`,
    template: titleTemplate,
  },
  description: defaultDescription,
  keywords: [...keywords],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  applicationName: siteName,
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: allowIndexing
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      }
    : { index: false, follow: false },
  openGraph: {
    type: "website",
    locale,
    url: siteUrl,
    siteName,
    title: `${siteName} — Home for Bike & Car Enthusiasts`,
    description: defaultDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${siteName} — ${siteTagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} — Home for Bike & Car Enthusiasts`,
    description: defaultDescription,
    images: ["/twitter-image"],
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    yandex: process.env.YANDEX_SITE_VERIFICATION,
    other: process.env.BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
      : undefined,
  },
};
