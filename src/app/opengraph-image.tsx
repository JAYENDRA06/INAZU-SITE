import { ImageResponse } from "next/og";

import { getLogoDataUrl } from "@/lib/og-logo";
import { siteName, siteTagline } from "@/lib/site-config";

export const alt = `${siteName} — ${siteTagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logoSrc = await getLogoDataUrl();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: 72,
          background: "#0c100b",
          color: "#f3f8ee",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <img src={logoSrc} alt="" width={280} height={134} style={{ objectFit: "contain" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ fontSize: 48, fontWeight: 800, letterSpacing: -1 }}>{siteName}</div>
            <div style={{ fontSize: 26, color: "#9ca99a" }}>{siteTagline}</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 880 }}>
          <div style={{ fontSize: 44, fontWeight: 700, lineHeight: 1.1, letterSpacing: -1.5 }}>
            Ride tracking for bikes & cars
          </div>
          <div style={{ fontSize: 24, color: "#c8d4c4", lineHeight: 1.35 }}>
            Offline GPS · saved recaps · garage stats · weekly progress
          </div>
        </div>

        <div style={{ fontSize: 22, color: "#dfff4f", fontWeight: 600 }}>inazu.app</div>
      </div>
    ),
    { ...size },
  );
}
