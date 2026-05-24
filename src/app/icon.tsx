import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 112,
        }}
      >
        <div
          style={{
            width: 280,
            height: 280,
            borderRadius: 64,
            background: "#dfff4f",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#0c100b",
            fontSize: 160,
            fontWeight: 800,
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Z
        </div>
      </div>
    ),
    { ...size },
  );
}
