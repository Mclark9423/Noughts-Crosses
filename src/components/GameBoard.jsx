import { useState } from "react";

//initial state of the board, i.e with nothing pressed
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

export default function GameBoard() {

    const [gameBoard,setGameBoard] = useState(initialGameBoard);

    function handleSquare(rowIndex,colIndex){
        setGameBoard((prevGameBoard) => {
        const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
        updatedBoard[rowIndex][colIndex] = 'X';
        return updatedBoard;
    });
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => (
                    <li key={colIndex}>
                        <button onClick={() => handleSquare(rowIndex,colIndex)}>
                            {playerSymbol}
                        </button>
                    </li>))}
                </ol>
            </li>))}
        </ol>
    )
}