import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/constants";

export const alt = `${SITE_NAME} — ${SITE_TAGLINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background: `
            radial-gradient(ellipse 100% 80% at 90% 10%, oklch(0.45 0.09 195 / 0.45), transparent 55%),
            linear-gradient(155deg, oklch(0.14 0.045 262) 0%, oklch(0.18 0.05 262) 100%)
          `,
        }}
      >
        <div
          style={{
            fontSize: 20,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "oklch(0.72 0.09 195)",
            marginBottom: 20,
            fontWeight: 600,
          }}
        >
          {SITE_TAGLINE}
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 600,
            color: "white",
            lineHeight: 1.05,
            maxWidth: 900,
          }}
        >
          {SITE_NAME}
        </div>
        <div
          style={{
            fontSize: 26,
            color: "rgba(255,255,255,0.72)",
            marginTop: 28,
            maxWidth: 780,
            lineHeight: 1.45,
          }}
        >
          Clarity for your next chapter in higher education
        </div>
      </div>
    ),
    { ...size }
  );
}
