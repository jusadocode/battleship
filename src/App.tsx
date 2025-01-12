import { useState } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard/GameBoard";

function App() {
  const [gameStarted, setGameStarted] = useState(false);

  const handleStartClick = () => {
    // fetch info from the server for the game start
    setGameStarted(true);
  };
  return gameStarted ? (
    <GameBoard />
  ) : (
    <>
      <button onClick={handleStartClick}>Begin</button>
    </>
  );
}

export default App;
