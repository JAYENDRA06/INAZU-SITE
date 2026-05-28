import { ImageResponse } from "next/og";

import { getLogoDataUrl } from "@/lib/og-logo";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default async function Icon() {
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
        }}
      >
        <img src={logoSrc} alt="" width={320} height={153} style={{ objectFit: "contain" }} />
      </div>
    ),
    { ...size },
  );
}
