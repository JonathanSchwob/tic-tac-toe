import './App.css';

function Square() {
  return <div className="square"></div>
}

function Board() {
  return (
    <>
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </>
  );
}

export default Board;
