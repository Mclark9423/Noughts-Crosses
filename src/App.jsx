import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  

  return (
    <main>
      <div id="game-container">
        PLAYERS
        <ol id="players">
            <Player playerName={"Player 1"} symbol={"X"} />
            <Player playerName={"Player 2"} symbol={"Y"} />
        </ol>
        <ol>

        </ol>
        <GameBoard />
      </div>
    </main>
  )
}

export default App
