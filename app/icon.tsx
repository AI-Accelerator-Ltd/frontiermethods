import { ImageResponse } from "next/og";

// Favicon — renders a 32x32 turquoise vertical bar mark on Gable Green.
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
        }}
      >
        <div
          style={{
            width: 6,
            height: 22,
            background: "#00FFBC",
            borderRadius: 1,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
