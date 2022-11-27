import React from "react";

export default function Color({ hex, name, setBackgroundColor }) {
  return (
    <button
      className="picker"
      style={{ backgroundColor: hex }}
      onClick={() => setBackgroundColor(hex)}
    >
      {name}
    </button>
  );
}
