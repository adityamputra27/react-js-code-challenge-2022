import React, { useEffect, useRef } from "react";

export default function FocusAnInput() {
  const focusAnInput = useRef(null);

  useEffect(() => {
    focusAnInput.current.focus();
  }, []);

  return (
    <div className="container">
      <h2>Focus me on page load!</h2>
      <input type="text" className="focus-an-input" ref={focusAnInput} />
    </div>
  );
}
