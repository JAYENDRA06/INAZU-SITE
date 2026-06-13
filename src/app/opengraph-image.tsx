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
          alignItems: "center",
          justifyContent: "center",
          background: "#0c100b",
          color: "#f3f8ee",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            width: 640,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <img src={logoSrc} alt="" width={96} height={46} style={{ objectFit: "contain", flexShrink: 0 }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <div style={{ fontSize: 28, fontWeight: 800, lineHeight: 1.1 }}>{siteName}</div>
              <div style={{ fontSize: 15, color: "#9ca99a" }}>{siteTagline}</div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ fontSize: 26, fontWeight: 700, lineHeight: 1.2, letterSpacing: -0.5 }}>
              For bike & car enthusiasts
            </div>
            <div style={{ fontSize: 15, color: "#9ca99a", lineHeight: 1.35 }}>
              Ride tracking first · recaps · garage stats · progress
            </div>
          </div>

          <div style={{ fontSize: 15, color: "#dfff4f", fontWeight: 600 }}>inazu.app</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
