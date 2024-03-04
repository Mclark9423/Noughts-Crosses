import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

const WINNING_COMBNATIONS = [
  [
    {row:0,col:0},
    {row:0,col:1},
    {row:0,col:2}
  ]
];

function derivedActivePlayer(gameTurns) {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = derivedActivePlayer(gameTurns);

  function handleSelectSquare(rowIndex, colIndex) {

    setGameTurns((prevTurns) => {
      let currentPlayer = derivedActivePlayer(prevTurns);

      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O';
      }

      const updatedTurns = [
        {
          square: { row: rowIndex, col: colIndex },
          player: activePlayer,
          ...prevTurns
        }];

      return updatedTurns;
    });

  }

  return (
    <main>
      <div id="game-container">
        PLAYERS
        <ol id="players" className="highlight-player">
          <Player playerName={"Player 1"} symbol={"X"} isActive={activePlayer === 'X'} />
          <Player playerName={"Player 2"} symbol={"Y"} isActive={activePlayer === 'O'} />
        </ol>
        <ol>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare}
          turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
