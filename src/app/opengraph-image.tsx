import { ImageResponse } from "next/og";

import { siteName, siteTagline } from "@/lib/site-config";

export const alt = `${siteName} — ${siteTagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(145deg, #0c100b 0%, #1a2118 55%, #121810 100%)",
          color: "#f3f8ee",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 20,
              background: "#dfff4f",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#0c100b",
              fontSize: 36,
              fontWeight: 800,
            }}
          >
            Z
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 52, fontWeight: 800, letterSpacing: -1 }}>{siteName}</div>
            <div style={{ fontSize: 28, color: "#9ca99a", marginTop: 4 }}>{siteTagline}</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 900 }}>
          <div style={{ fontSize: 56, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2 }}>
            Ride tracking for bikes & cars
          </div>
          <div style={{ fontSize: 28, color: "#c8d4c4", lineHeight: 1.4 }}>
            Offline GPS · saved recaps · garage stats · weekly progress
          </div>
        </div>

        <div style={{ fontSize: 24, color: "#dfff4f", fontWeight: 600 }}>inazu.app</div>
      </div>
    ),
    { ...size },
  );
}
