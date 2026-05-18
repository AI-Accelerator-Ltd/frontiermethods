import { ImageResponse } from "next/og";

// Apple touch icon — 180x180.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#1B2F3C",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 32,
        }}
      >
        <div
          style={{
            width: 30,
            height: 120,
            background: "#00FFBC",
            borderRadius: 4,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
