import { useState } from "react";

const initialBoard = () => Array(9).fill(null);
const TicHooks = () =>{
    const [board,setBoard] = useState(initialBoard());
    const [isNext,setIsNext] = useState(true);
    const [winningInfo, setWinningInfo] = useState(null);
    const winnigPattern = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];
    const calculateWinner = (currBoard) =>{
        for(let i=0;i<winnigPattern.length;i++){
            const[a,b,c] = winnigPattern[i];
            if(currBoard[a] && currBoard[a]===currBoard[b] && currBoard[a]===currBoard[c]){
                return { winner: currBoard[a], indices: [a, b, c] };
            }
        }
        return null;
    };
    const handleClick = (index) => {
        //check winner
        const winnerInfo = calculateWinner(board);
        //const winner = calculateWinner(board)
        if(winnerInfo || board[index]) return;

        const newBoard = [...board];
        newBoard[index] = isNext ? "X" : "O";
        setBoard(newBoard);
        setIsNext(!isNext);
        setWinningInfo(calculateWinner(newBoard));
    };
    const getStatusMsg = () => {
        if(winningInfo){
            return `Player ${winningInfo.winner} Wins`;
        }
        if(!board.includes(null)) return `It's a Draw`;
        return `Player ${isNext ?"X" : "O"} Turn`;
    };
    const resetGame = () => {
        setBoard(initialBoard());  
        setIsNext(true);
        setWinningInfo(null);
        
    };
    return {board,winningInfo,handleClick,getStatusMsg,resetGame};
    
}
export default TicHooks;