import TicHooks from '../hooks/TicHooks';
function TicTacToe() {
  
    const {board,winningInfo,handleClick,resetGame,getStatusMsg} = TicHooks();
  return (
    <>
   <div className="game">
   <div className="status">
    {getStatusMsg()}
    <button className="reset" onClick={resetGame}>Reset Game</button>
   </div>
   <div className="board">{board.map((b, index) => {
    const isWinningCell = winningInfo && winningInfo.indices.includes(index);
    return (
      <button className = "cell" key={index} onClick= {() => handleClick(index)} disabled={b!==null} style={{
        backgroundColor: isWinningCell ? (b === "X" ? "lightgreen" : "lightcoral") : "black",
        color: isWinningCell ? (b === "X" ? "black" : "black") : "white",
    }}>{b}</button>
    );
   })}</div>
   </div>
   </>
  )
}

export default TicTacToe;
