import Board from "./Board.js";
import { useState } from "react";
import "./Game.css";

function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentBoard = history[history.length - 1];

  function handlePlay(nextBoard) {
    setHistory([...history, nextBoard]);
    setXIsNext(!xIsNext);
  }

  function handleReset() {
    let resetBoard = Array(9).fill(null);
    setHistory([Array(9).fill(null)]);
    setXIsNext(true);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board
          xIsNext={xIsNext}
          board={currentBoard}
          onPlay={handlePlay}
          onReset={handleReset}
        />
      </div>
      <div className="game-info">
        <ol></ol>
      </div>
    </div>
  );
}

export default Game;
