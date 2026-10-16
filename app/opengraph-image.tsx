import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Pherada Cosmetics Ltd. - Dermo-Cosmetic OEM/ODM Laboratory";
export const size = {
  width: 1200,
  height: 630
};
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
          justifyContent: "space-between",
          padding: "60px 70px",
          backgroundColor: "#04091A",
          backgroundImage: "radial-gradient(circle at 80% 20%, rgba(72, 172, 214, 0.25) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(0, 56, 174, 0.45) 0%, transparent 60%)",
          color: "white",
          fontFamily: "sans-serif"
        }}
      >
        {/* Top Header Telemetry */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "8px 20px",
              borderRadius: "999px",
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(72, 172, 214, 0.4)"
            }}
          >
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#48ACD6" }} />
            <span style={{ fontSize: "14px", fontWeight: "bold", letterSpacing: "2px", color: "#9EE4FF" }}>
              DERMO-COSMETIC OEM / ODM LAB
            </span>
          </div>

          <span style={{ fontSize: "14px", color: "#94a3b8", letterSpacing: "1px" }}>
            EST. 2022 • YALA, THAILAND
          </span>
        </div>

        {/* Main Brand Title & Description */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "950px" }}>
          <h1
            style={{
              fontSize: "64px",
              fontWeight: 900,
              letterSpacing: "-1.5px",
              margin: 0,
              background: "linear-gradient(90deg, #FFFFFF 0%, #D4F1FF 60%, #48ACD6 100%)",
              backgroundClip: "text",
              color: "transparent"
            }}
          >
            PHERADA COSMETICS
          </h1>
          <p style={{ fontSize: "28px", fontWeight: 700, color: "#CBEBFF", margin: 0, lineHeight: 1.3 }}>
            โรงงานวิจัยและผลิตเวชสำอาง • สกินแคร์มาตรฐานครบวงจร
          </p>
          <p style={{ fontSize: "18px", color: "#94a3b8", margin: 0 }}>
            Facial Care, Body Care, Hair & Scalp, Thai FDA Registration, and BMR Traceability
          </p>
        </div>

        {/* Bottom Assurance Pills & Contact */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255, 255, 255, 0.12)",
            paddingTop: "24px"
          }}
        >
          <div style={{ display: "flex", gap: "14px" }}>
            {["Cleanroom Protocol", "จดแจ้ง อย. 100%", "BMR Batch Record", "MOQ เริ่มต้น 100 ชิ้น"].map((item) => (
              <span
                key={item}
                style={{
                  padding: "6px 14px",
                  borderRadius: "8px",
                  fontSize: "13px",
                  fontWeight: "bold",
                  backgroundColor: "rgba(255, 255, 255, 0.06)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  color: "#E2E8F0"
                }}
              >
                {item}
              </span>
            ))}
          </div>

          <span style={{ fontSize: "15px", fontWeight: "bold", color: "#48ACD6" }}>
            LINE: @440bqhfk | โทร: 064-2451536
          </span>
        </div>
      </div>
    ),
    {
      ...size
    }
  );
}
