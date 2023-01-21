import Board from "./Board.js";
import { useState } from "react";
import "./Game.css";
import Darkmode from "darkmode-js";

new Darkmode().showWidget();

function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentBoard = history[history.length - 1];

  function handlePlay(currentBoard) {
    setHistory([...history, currentBoard]);
    setXIsNext(!xIsNext);
  }

  function handleReset() {
    setHistory([Array(9).fill(null)]);
    setXIsNext(true);
  }

  function renderHistory() {
    console.log(history, "hello");
  }

  function jumpTo(nextMove) {
    //TODO
  }

  const moves = history.map((board, move) => {
    let description;
    if (move > 0) {
      description = "Go to move#" + move;
    } else {
      description = "Go to game start";
    }

    return (
      <li>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });
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
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

export default Game;
