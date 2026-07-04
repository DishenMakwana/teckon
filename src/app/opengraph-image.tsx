import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Teckon™ Quality Spares";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        background:
          "linear-gradient(135deg, #0B0F19 0%, #111827 50%, #1E293B 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        padding: "40px",
      }}
    >
      {/* Glow orbs */}
      <div
        style={{
          position: "absolute",
          top: "-150px",
          left: "-150px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "rgba(255, 190, 0, 0.12)",
          filter: "blur(100px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-150px",
          right: "-150px",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background: "rgba(30, 64, 175, 0.12)",
          filter: "blur(120px)",
        }}
      />

      {/* Brand Card */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "24px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          borderRadius: "32px",
          padding: "32px 48px",
          boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            borderRadius: "16px",
            border: "1px solid rgba(255, 190, 0, 0.4)",
            backgroundColor: "#FFBE00",
            padding: "16px 28px",
            fontSize: "44px",
            fontWeight: 900,
            letterSpacing: "0.15em",
            color: "#0B0F19",
          }}
        >
          TECKON
        </div>

        {/* Divider */}
        <div
          style={{
            width: "2px",
            height: "80px",
            backgroundColor: "rgba(255, 255, 255, 0.15)",
          }}
        />

        {/* Text block */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontSize: "26px",
              fontWeight: 700,
              color: "#ffffff",
            }}
          >
            Quality Spares
          </div>
          <div
            style={{
              fontSize: "16px",
              textTransform: "uppercase",
              letterSpacing: "0.25em",
              color: "#94A3B8",
              marginTop: "4px",
            }}
          >
            Shreeji Hydraulics
          </div>
        </div>
      </div>

      {/* Subtitle Tagline */}
      <div
        style={{
          fontSize: "20px",
          color: "rgba(255, 255, 255, 0.7)",
          marginTop: "40px",
          fontWeight: 500,
          letterSpacing: "0.05em",
        }}
      >
        Premium Hydraulic Parts & Spares for Heavy Machinery
      </div>
    </div>,
    {
      ...size,
    }
  );
}
