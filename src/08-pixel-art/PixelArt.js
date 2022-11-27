import React, { useState } from "react";
import ColorPicker from "./ColorPicker";
import { ColorContext } from "./context";
import Pixels from "./Pixels";

export default function PixelArt() {
  const [color, setColor] = useState("");

  return (
    <ColorContext.Provider value={{ color, setColor }}>
      <div className="container">
        <h1>Choose a color</h1>
        <ColorPicker />
        <Pixels />
      </div>
    </ColorContext.Provider>
  );
}
