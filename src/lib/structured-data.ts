import { appStoreUrl, contactEmail, defaultDescription, siteName, siteTagline, siteUrl } from "@/lib/site-config";
import { absoluteUrl } from "@/lib/seo";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/logo.svg`,
    description: defaultDescription,
    email: contactEmail,
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: contactEmail,
        contactType: "customer support",
        availableLanguage: ["English"],
      },
    ],
  };
}

export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: siteName,
    alternateName: ["Inazu", "INAZU app", "inazu.app"],
    url: siteUrl,
    description: defaultDescription,
    publisher: { "@id": `${siteUrl}/#organization` },
    inLanguage: "en-US",
  };
}

export function softwareApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${siteUrl}/#software`,
    name: siteName,
    alternateName: siteTagline,
    applicationCategory: "SportsApplication",
    applicationSubCategory: "Ride Tracking",
    operatingSystem: "iOS",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    downloadUrl: appStoreUrl,
    installUrl: appStoreUrl,
    description: defaultDescription,
    url: siteUrl,
    image: `${siteUrl}/opengraph-image`,
    featureList: [
      "GPS ride tracking with live stats and route on the map",
      "Saved ride recaps with path and session stats",
      "Garage-linked vehicle and profile statistics",
      "Weekly and monthly progress views",
      "Speed vs distance charts and ride notes",
      "Friend requests and social connections",
    ],
    publisher: { "@id": `${siteUrl}/#organization` },
  };
}

export function webPageJsonLd({
  path,
  title,
  description,
}: {
  path: string;
  title: string;
  description: string;
}) {
  const url = absoluteUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#software` },
    inLanguage: "en-US",
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function homePageJsonLdGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationJsonLd(), webSiteJsonLd(), softwareApplicationJsonLd(), webPageJsonLd({
      path: "/",
      title: `${siteName} — Home for Bike & Car Enthusiasts`,
      description: defaultDescription,
    })],
  };
}
