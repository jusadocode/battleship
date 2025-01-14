import { useEffect, useState } from "react";
import "./App.css";
import { boardLayout, bulletAmount } from "./constants/gameBoardConstants";
import EndGameScreen from "./components/EndGameScreen/EndGameScreen";
import StartScreen from "./components/StartScreen/StartScreen";
import GameScreen from "./components/GameScreen/GameScreen";
import generateShips from "./shared/utils/generateShipData";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameStopped, setGameStopped] = useState(false);
  const [bullets, setBullets] = useState(25);
  const [hits, setHits] = useState(0);
  const [shipsDestroyed, setShipsDestroyed] = useState([]);
  const [markedData, setMarkedData] = useState(new Map());
  const [shipData, setShipData] = useState(new Map());

  const handleStartClick = () => {
    // fetch info from the server for the game start
    setGameStarted(true);
  };

  const consumeBullet = () => {
    if (bullets > 1) {
      setBullets(bullets - 1);
    } else {
      initiateGameEnd();
    }
  };

  const initiateGameEnd = () => {
    setGameStopped(true);
    setGameStarted(false);

    const updatedMarkedData = new Map(markedData);

    shipData.forEach((_: string, key: string) => {
      if (!updatedMarkedData.has(key)) updatedMarkedData.set(key, 0);
    });

    setMarkedData(updatedMarkedData);
  };

  const isShotSuccessful = (x: number, y: number) => shipData.has(`${x}-${y}`);

  const updateHits = () => setHits(hits + 1);

  const handleRestartClick = () => {
    const generatedData = generateShips(boardLayout);
    setShipData(generatedData);
    setBullets(bulletAmount);
    setMarkedData(new Map());
    setHits(0);
    setShipsDestroyed([]);
    setGameStarted(true);
    setGameStopped(false);
  };

  useEffect(() => {
    // transfer this to server later
    const generatedData = generateShips(boardLayout);
    setShipData(generatedData);
  }, []);

  return gameStarted ? (
    <GameScreen
      bullets={bullets}
      consumeBullet={consumeBullet}
      updateHits={updateHits}
      setMarkedData={setMarkedData}
      markedData={markedData}
      isShotSuccessful={isShotSuccessful}
    />
  ) : gameStopped ? (
    <EndGameScreen
      hits={hits}
      shipsDestroyed={shipsDestroyed}
      handleRestartClick={handleRestartClick}
      markedData={markedData}
    />
  ) : (
    <StartScreen handleStartClick={handleStartClick} />
  );
}

export default App;
