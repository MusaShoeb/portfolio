import React, { CSSProperties } from "react";

const divStyle: CSSProperties = {
  marginTop: "117px",
  height: "100%",
  display: "flex",
  flexDirection: "row",
  backgroundImage: "url(/BackgroundLofi.jpeg)",
  alignItems: "center",
  justifyContent: "flex-end",
};

export default function Home() {
  return <div style={divStyle}>This is my Home page</div>;
}
