import React, { useState } from "react";
import Color from "./Color";

const colors = [
  {
    hex: "#91A6FF",
    name: "Cornflower Blue",
  },
  {
    hex: "#FF88DC",
    name: "Persian Pink",
  },
  {
    hex: "#80FF72",
    name: "Screamin Green",
  },
  {
    hex: "#FF5154",
    name: "Tart Orange",
  },
];

export default function ColorPicker() {
  const [backgroundColor, setBackgroundColor] = useState("");

  return (
    <div className="color-picker" style={{ backgroundColor: backgroundColor }}>
      <h2 className="title">Color Picker</h2>
      <div className="pickers">
        {colors.map((color) => (
          <Color
            key={color.hex}
            hex={color.hex}
            name={color.name}
            setBackgroundColor={setBackgroundColor}
          />
        ))}
      </div>
    </div>
  );
}
