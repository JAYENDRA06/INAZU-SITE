import type { Metadata } from "next";
import { Orbitron, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-display",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "INAZU | Your Ride Companion",
  description:
    "INAZU is a performance-focused ride tracking and analytics platform for car and bike enthusiasts built for precision, competition, and real-world speed intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${orbitron.variable} ${spaceGrotesk.variable}`}>
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
