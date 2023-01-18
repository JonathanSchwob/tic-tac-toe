import React from "react";

function Square({ onSquareClick, value }) {
  return (
    <button onClick={onSquareClick} className="square">
      {value}
    </button>
  );
}

export default Square;
