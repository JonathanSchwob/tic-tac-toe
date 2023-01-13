import { useState } from "react";
import "./App.css";

function Square({ onSquareClick, value }) {
  return (
    <button onClick={onSquareClick} className="square">
      {value}
    </button>
  );
}

function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [board, setBoard] = useState(Array(9).fill(null));

  function handleClick(position) {
    if (board[position] || calculateWinner()) {
      return;
    }

    let newBoard = board.slice();

    if (xIsNext) {
      newBoard[position] = "X";
      setXIsNext(false);
    } else {
      newBoard[position] = "O";
      setXIsNext(true);
    }

    setBoard(newBoard);
  }

  function calculateWinner() {
    const winStates = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winStates.length; i++) {
      let [a, b, c] = winStates[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a] + " Wins!";
      }
    }

    if (!board.includes(null)) {
      return "Draw";
    }

    return null;
  }

  return (
    <>
      <div className="board-row">
        <Square onSquareClick={() => handleClick(0)} value={board[0]} />
        <Square onSquareClick={() => handleClick(1)} value={board[1]} />
        <Square onSquareClick={() => handleClick(2)} value={board[2]} />
      </div>
      <div className="board-row">
        <Square onSquareClick={() => handleClick(3)} value={board[3]} />
        <Square onSquareClick={() => handleClick(4)} value={board[4]} />
        <Square onSquareClick={() => handleClick(5)} value={board[5]} />
      </div>
      <div className="board-row">
        <Square onSquareClick={() => handleClick(6)} value={board[6]} />
        <Square onSquareClick={() => handleClick(7)} value={board[7]} />
        <Square onSquareClick={() => handleClick(8)} value={board[8]} />
      </div>
      <div className="status">
        {calculateWinner()
          ? "Result: " + calculateWinner()
          : "Current Turn: " + (xIsNext ? "X" : "O")}
      </div>
    </>
  );
}

export default Game;
