import type { MetadataRoute } from "next";

import { defaultDescription, siteName, siteTagline, siteUrl } from "@/lib/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteName} — ${siteTagline}`,
    short_name: siteName,
    description: defaultDescription,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#0c100b",
    theme_color: "#0c100b",
    lang: "en",
    orientation: "portrait",
    categories: ["sports", "navigation", "utilities"],
    icons: [
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    id: siteUrl,
  };
}
