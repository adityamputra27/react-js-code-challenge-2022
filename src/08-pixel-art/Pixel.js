import React, { useContext, useState } from "react";
import { ColorContext } from "./context";

export default function Pixel() {
  const { color } = useContext(ColorContext);
  const [pixelColor, setPixelColor] = useState("lightGrey");

  return (
    <div
      style={{
        width: "45px",
        height: "45px",
        backgroundColor: pixelColor,
        margin: "1px",
        cursor: "pointer",
      }}
      onClick={() => setPixelColor(color)}
    />
  );
}
