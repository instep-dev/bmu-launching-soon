import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "BMU Healthcare - Healthcare Investment: Two Decades Strong";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "72px 80px",
          background:
            "linear-gradient(135deg, #1abfbb 0%, #7b4ba0 55%, #9b2356 100%)",
          position: "relative",
        }}
      >
        {/* Decorative overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 60%)",
          }}
        />

        {/* Top right accent line */}
        <div
          style={{
            position: "absolute",
            top: 72,
            right: 80,
            width: 80,
            height: 3,
            background: "rgba(255,255,255,0.5)",
            borderRadius: 2,
          }}
        />

        {/* Company legal name */}
        <div
          style={{
            fontSize: 22,
            fontWeight: 400,
            color: "rgba(255,255,255,0.75)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: 18,
          }}
        >
          PT. Brawijaya Medika Utama
        </div>

        {/* Main brand name */}
        <div
          style={{
            fontSize: 88,
            fontWeight: 900,
            color: "#ffffff",
            lineHeight: 1,
            marginBottom: 24,
          }}
        >
          BMU Healthcare
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 30,
            fontWeight: 300,
            color: "rgba(255,255,255,0.88)",
            letterSpacing: "0.04em",
            marginBottom: 40,
          }}
        >
          Healthcare Investment: Two Decades Strong
        </div>

        {/* Bottom stats row */}
        <div
          style={{
            display: "flex",
            gap: 48,
            paddingTop: 32,
            borderTop: "1px solid rgba(255,255,255,0.3)",
            width: "100%",
          }}
        >
          {[
            { num: "20+", label: "Years Experience" },
            { num: "3000+", label: "Professionals Supported" },
            { num: "500+", label: "Healthcare Facilities" },
          ].map((item) => (
            <div
              key={item.num}
              style={{ display: "flex", flexDirection: "column", gap: 4 }}
            >
              <span
                style={{
                  fontSize: 32,
                  fontWeight: 700,
                  color: "#ffffff",
                  lineHeight: 1,
                }}
              >
                {item.num}
              </span>
              <span
                style={{
                  fontSize: 16,
                  color: "rgba(255,255,255,0.7)",
                  fontWeight: 300,
                }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: 36,
            right: 80,
            fontSize: 18,
            color: "rgba(255,255,255,0.55)",
            letterSpacing: "0.06em",
          }}
        >
          www.bmuhealthcare.com
        </div>
      </div>
    ),
    { ...size }
  );
}
