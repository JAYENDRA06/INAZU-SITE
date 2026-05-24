import type { Metadata, Viewport } from "next";
import { DM_Sans, IBM_Plex_Mono, Syne } from "next/font/google";

import { JsonLd } from "@/components/json-ld";
import { rootMetadata } from "@/lib/seo";
import { organizationJsonLd, webSiteJsonLd } from "@/lib/structured-data";
import { siteUrl } from "@/lib/site-config";

import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = rootMetadata;

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f4f0" },
    { media: "(prefers-color-scheme: dark)", color: "#0c100b" },
  ],
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="dns-prefetch" href={siteUrl} />
      </head>
      <body className={`${syne.variable} ${dmSans.variable} ${ibmPlexMono.variable} antialiased`}>
        <JsonLd data={[organizationJsonLd(), webSiteJsonLd()]} />
        {children}
      </body>
    </html>
  );
}
