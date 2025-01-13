import { useState } from "react";
import "./App.css";
import { bulletAmount } from "./constants/gameBoardConstants";
import EndGameScreen from "./components/EndGameScreen/EndGameScreen";
import StartScreen from "./components/StartScreen/StartScreen";
import GameScreen from "./components/GameScreen/GameScreen";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameStopped, setGameStopped] = useState(false);
  const [bullets, setBullets] = useState(25);
  const [hits, setHits] = useState(0);
  const [shipsKilled, setShipsKilled] = useState([]);

  const handleStartClick = () => {
    // fetch info from the server for the game start
    setGameStarted(true);
  };

  const consumeBullet = () => {
    if (bullets > 1) {
      setBullets(bullets - 1);
    } else {
      setGameStopped(true);
      setGameStarted(false);
    }
  };

  const updateHits = () => setHits(hits + 1);

  const handleRestartClick = () => {
    setBullets(bulletAmount);
    setHits(0);
    setShipsKilled([]);
    setGameStarted(true);
    setGameStopped(false);
  };

  return gameStarted ? (
    <GameScreen
      bullets={bullets}
      consumeBullet={consumeBullet}
      updateHits={updateHits}
    />
  ) : gameStopped ? (
    <EndGameScreen
      hits={hits}
      shipsKilled={shipsKilled}
      handleRestartClick={handleRestartClick}
    />
  ) : (
    <StartScreen handleStartClick={handleStartClick} />
  );
}

export default App;
