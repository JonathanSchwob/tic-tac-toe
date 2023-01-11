import './App.css';

function Square({onSquareClick}) {
  return <button onClick={onSquareClick} className="square"></button>
}

function Board() {
  function handleClick() {
    console.log('x')
  }

  return (
    <>
      <div className="board-row">
        <Square onSquareClick={() => handleClick()} />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}

export default Board;
