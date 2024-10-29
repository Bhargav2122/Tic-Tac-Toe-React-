import './App.css';
import { useState } from 'react';
function Square ({cellValue, onCellClick}) {
  return ( 
   <button className="cell" onClick={onCellClick}>
      {cellValue}
    </button> 
  );
}


function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [nxtMove, setnxtMove] = useState(true);

  function handleClick(i) {
    if(squares[i] || checkWinner(squares)){
      return;
    }
    const nextCell = squares.slice();

    nextCell[i] = nxtMove ? 'X' : 'O';
     setSquares(nextCell);
     setnxtMove(!nxtMove);
  }
  
const restartGame = () => {
    setSquares(Array(9).fill(null));
    nxtMove(true);
};

  const winner = checkWinner(squares);
  let message;
  if(winner) {
    message = `Winner is  ${winner}`;
  }else if(squares.every(Boolean)){
    message = "It's a Draw !";
  }
  else {
    message = 'Next move: ' + (nxtMove ? 'X' : 'O');
  }
  return (
    <>
    <div className="game-board">
      <div className="msg">{message}</div>
      <div className="board-row">
        <Square cellValue = {squares[0]} onCellClick={ () => handleClick(0)} />
        <Square cellValue = {squares[1]} onCellClick={ () => handleClick(1)} />
        <Square cellValue = {squares[2]} onCellClick={ () => handleClick(2)} />
        <Square cellValue = {squares[3]} onCellClick={ () => handleClick(3)} />
        <Square cellValue = {squares[4]} onCellClick={ () => handleClick(4)} />
        <Square cellValue = {squares[5]} onCellClick={ () => handleClick(5)} />
        <Square cellValue = {squares[6]} onCellClick={ () => handleClick(6)} />
        <Square cellValue = {squares[7]} onCellClick={ () => handleClick(7)} />
        <Square cellValue = {squares[8]} onCellClick={ () => handleClick(8)} />
      </div>
       
       <div className="new-game">
           <button className='newgamebtn' onClick={restartGame}>New Game</button>
        </div>  
    </div>
     
    </>
  )
}
function checkWinner(squares) {
   const chances = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
   ];

   for (let index = 0; index < chances.length; index++) {
    const [a, b, c] = chances[index];
     if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return squares[a];
     }
    
   }
   return null;
}

export default Board
