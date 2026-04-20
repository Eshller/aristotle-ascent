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
          flexDirection: "row",
        }}
      >
        <div
          style={{
            width: "54%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: 64,
            background: "#fbfaf7",
          }}
        >
          <div
            style={{
              fontSize: 18,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#c9a840",
              marginBottom: 20,
              fontWeight: 600,
            }}
          >
            {SITE_TAGLINE}
          </div>
          <div
            style={{
              fontSize: 56,
              fontWeight: 600,
              color: "#2a3a4a",
              lineHeight: 1.05,
              maxWidth: 520,
              fontFamily: "Georgia, serif",
            }}
          >
            {SITE_NAME}
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#6b8599",
              marginTop: 24,
              maxWidth: 480,
              lineHeight: 1.45,
            }}
          >
            Clarity for your next chapter in higher education
          </div>
        </div>
        <div
          style={{
            width: "46%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: 56,
            background:
              "radial-gradient(ellipse 95% 85% at 88% 12%, rgba(237,217,122,0.45), transparent 52%), linear-gradient(165deg, #1e5f8a 0%, #1a4a70 100%)",
          }}
        >
          <div
            style={{
              fontSize: 28,
              fontWeight: 500,
              color: "rgba(255,255,255,0.92)",
              lineHeight: 1.35,
              maxWidth: 400,
              fontFamily: "Georgia, serif",
            }}
          >
            Strategy, narrative, and calm execution—for students and families.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
