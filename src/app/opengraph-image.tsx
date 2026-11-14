import { ImageResponse } from "next/og";
export const alt = "AqlVest — Investing with Knowledge. Guided by Principles.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 80,
        background: "#0b2132",
        color: "#fff",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", fontSize: 42 }}>
        Aql<span style={{ color: "#d9b977" }}>Vest</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 70,
          letterSpacing: -3,
        }}
      >
        <span>Investing with Knowledge.</span>
        <span style={{ color: "#70d4b2" }}>Guided by Principles.</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          color: "#bfd0d8",
          fontSize: 22,
        }}
      >
        <span>ISLAMIC INVESTMENT EDUCATION & DIGITAL RESOURCES</span>
        <span>aqlvest.com</span>
      </div>
    </div>,
    size,
  );
}
