import { ImageResponse } from "next/og";
export const alt =
  "AqlVest — Learn Halal Investing & Trading. Ramadan 2027, insha Allah.";
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
          fontSize: 66,
          letterSpacing: -3,
        }}
      >
        <span>Learn halal investing.</span>
        <span style={{ color: "#70d4b2" }}>From basics to advanced.</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          color: "#bfd0d8",
          fontSize: 22,
        }}
      >
        <span>RAMADAN 2027, INSHA ALLAH · EDUCATION & EXCEL TOOLS</span>
        <span>aqlvest.com</span>
      </div>
    </div>,
    size,
  );
}
