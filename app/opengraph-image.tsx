import { ImageResponse } from "next/og";

// OpenGraph image — 1200x630 (standard social-share dimensions).
// Renders the Frontier Methods hero pitch in brand colours.
export const alt =
  "Frontier Methods — AI methods for the people building the next frontier of science";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#1B2F3C",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 60,
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Radial gradient accent */}
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -200,
            width: 700,
            height: 700,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,255,188,0.18) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -200,
            left: -200,
            width: 700,
            height: 700,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,177,255,0.14) 0%, transparent 70%)",
          }}
        />

        {/* Top: brand mark + tag */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 16,
              height: 60,
              background: "#00FFBC",
              borderRadius: 4,
            }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                color: "white",
                fontSize: 28,
                fontWeight: 700,
                letterSpacing: -0.5,
              }}
            >
              Frontier Methods
            </div>
            <div
              style={{
                color: "rgba(255,255,255,0.5)",
                fontSize: 14,
                textTransform: "uppercase",
                letterSpacing: 2,
                marginTop: 4,
              }}
            >
              Open-source AI capability for UK frontier R&D
            </div>
          </div>
        </div>

        {/* Middle: the headline */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 20,
            color: "white",
            fontSize: 80,
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: -2,
            maxWidth: 1000,
          }}
        >
          <div style={{ display: "flex" }}>AI methods for the people</div>
          <div style={{ display: "flex", color: "#00FFBC" }}>
            building the next frontier of science.
          </div>
        </div>

        {/* Bottom: stat row */}
        <div
          style={{
            display: "flex",
            gap: 40,
            color: "rgba(255,255,255,0.7)",
            fontSize: 18,
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ color: "#00FFBC", fontWeight: 700 }}>30+</span>
            <span>open-source skills · Year 1</span>
          </div>
          <div style={{ color: "rgba(255,255,255,0.25)" }}>·</div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ color: "#00FFBC", fontWeight: 700 }}>8–12</span>
            <span>embedded Fellows</span>
          </div>
          <div style={{ color: "rgba(255,255,255,0.25)" }}>·</div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ color: "#00FFBC", fontWeight: 700 }}>£3m</span>
            <span>Year 1 · phase-gated</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
