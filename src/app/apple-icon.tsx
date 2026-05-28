import { ImageResponse } from "next/og";

import { getLogoDataUrl } from "@/lib/og-logo";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
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
          padding: 24,
        }}
      >
        <img src={logoSrc} alt="" width={132} height={63} style={{ objectFit: "contain" }} />
      </div>
    ),
    { ...size },
  );
}
