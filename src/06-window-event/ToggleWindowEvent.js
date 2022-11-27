import React, { useState } from "react";
import WindowEvent from "./WindowEvent";

export default function ToggleWindowEvent() {
  const [show, setShow] = useState(false);

  const toggleIsShow = () => {
    setShow((curr) => !curr);
  };

  return (
    <div className="container">
      <h2>Window Event</h2>
      <button onClick={toggleIsShow}>Toggle Window Event</button>
      {show && <WindowEvent />}
    </div>
  );
}
