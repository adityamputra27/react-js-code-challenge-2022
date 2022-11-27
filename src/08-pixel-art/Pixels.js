import React from "react";
import Pixel from "./Pixel";

export default function Pixels() {
  const pixels = [];
  for (let index = 0; index < 100; index++) pixels.push(<Pixel />);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(10, 1fr)",
        width: "500px",
        margin: "1em auto 0 auto",
      }}
    >
      {pixels}
    </div>
  );
}
