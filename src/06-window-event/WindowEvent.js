import React, { useEffect } from "react";

export default function WindowEvent() {
  useEffect(() => {
    const doubleClick = () => alert("mouse pressed!");

    window.addEventListener("dblclick", doubleClick);

    return () => window.removeEventListener("dblclick", doubleClick);
  }, []);

  return (
    <div>
      <h2>Window Event Active</h2>
    </div>
  );
}
