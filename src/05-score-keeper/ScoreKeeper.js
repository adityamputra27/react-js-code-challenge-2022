import React, { useEffect, useState } from "react";

export default function ScoreKeeper() {
  const [score, setScore] = useState(localStorage.getItem("score") || 0);

  useEffect(() => {
    // localStorage.removeItem("score");
    localStorage.setItem("score", score);
  }, [score]);

  return (
    <div className="container">
      <h2>Your Score Is : {score}</h2>
      <button
        style={{
          fontSize: "2.5em",
          width: "50px",
          height: "50px",
          margin: "16px 1em 0 0",
        }}
        onClick={() => setScore((prevScore) => prevScore - 1)}
      >
        -
      </button>
      <button
        style={{ fontSize: "2.5em", width: "50px", height: "50px" }}
        onClick={() => setScore((prevScore) => prevScore + 1)}
      >
        +
      </button>
    </div>
  );
}
