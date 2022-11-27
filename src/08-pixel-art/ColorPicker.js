import React, { useContext } from "react";
import { ColorContext } from "./context";

export default function ColorPicker() {
  const colors = ["red", "blue", "yellow", "green", "black", "white", "purple"];
  const { setColor } = useContext(ColorContext);

  return (
    <div>
      {colors.map((color) => (
        <button
          className="color-picker-button"
          key={color}
          style={{ backgroundColor: color }}
          onClick={() => setColor(color)}
        ></button>
      ))}
    </div>
  );
}
