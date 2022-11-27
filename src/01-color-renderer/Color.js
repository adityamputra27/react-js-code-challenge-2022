import React from "react";

export default function Color({ hex, name }) {
  return (
    <div className="color" style={{ backgroundColor: hex }}>
      <h2>{name}</h2>
    </div>
  );
}
