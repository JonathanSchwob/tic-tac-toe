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
  const [board, setBoard] = useState(Array(9).fill(null));

  function handleClick(position) {
    let newBoard = board.slice();
    newBoard[position] = "X";
    setBoard(newBoard);
    console.log(newBoard);
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
    </>
  );
}

export default Game;
