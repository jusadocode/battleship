import { useEffect, useState } from "react";
import "./App.css";
import { bulletAmount } from "./shared/constants/gameBoardConstants";
import EndGameScreen from "./components/EndGameScreen/EndGameScreen";
import StartScreen from "./components/StartScreen/StartScreen";
import GameScreen from "./components/GameScreen/GameScreen";
import { useGameService } from "./shared/hooks/useGameService";
import { Ship } from "./shared/types/types";
import ServerError from "./components/ServerError/ServerError";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameStopped, setGameStopped] = useState(false);
  const [bullets, setBullets] = useState(25);
  const [hits, setHits] = useState(0);
  const [shipsDestroyed, setShipsDestroyed] = useState<Ship[]>([]);
  const [markedData, setMarkedData] = useState(new Map());
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState(false);

  const { createGame, registerShot, getEndGameState } = useGameService();

  const handleStartClick = () => {
    initiateGameStart();
  };

  const consumeBullet = () => {
    if (bullets > 1) {
      setBullets(bullets - 1);
    } else {
      initiateGameEnd();
    }
  };

  const initiateGameStart = () => {
    setIsLoading(true);
    createGame()
      .then(() => {
        setGameStarted(true);
      })
      .catch(() => {
        setServerError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const initiateGameEnd = () => {
    getEndGameState()
      .then((response) => {
        if (!response) {
          console.error("Failed to get the end game state.");
          return;
        }

        const resultShipData: Map<string, string> = new Map(
          Object.entries(response.coordinateMap)
        );

        const updatedMarkedData = new Map(markedData);

        resultShipData.forEach((_: string, key: string) => {
          if (!updatedMarkedData.has(key)) updatedMarkedData.set(key, 0);
        });

        setMarkedData(updatedMarkedData);

        setGameStopped(true);
        setGameStarted(false);
      })
      .catch(() => {
        setServerError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleShot = (x: number, y: number) => {
    if (markedData.has(`${x}-${y}`)) return;

    registerShot(x, y)
      .then((response) => {
        if (response) {
          const newMap = new Map(markedData);

          if (response.hit) {
            newMap.set(`${x}-${y}`, 1);
          } else {
            newMap.set(`${x}-${y}`, -1);
          }

          if (response.shipDestroyed) {
            response.shipDestroyed.coordinates.forEach(([row, col]) => {
              newMap.set(`${row}-${col}`, 2);
            });
          }

          setMarkedData(newMap);

          setShipsDestroyed((prev: Ship[]) => {
            return response.shipDestroyed
              ? [...prev, response.shipDestroyed]
              : prev;
          });

          if (response.hit) {
            updateHits();
          } else {
            consumeBullet();
          }
        }
      })
      .catch(() => {
        setServerError(true);
      });
  };

  const updateHits = () => {
    setHits(hits + 1);
  };

  const handleRestartClick = () => {
    setBullets(bulletAmount);
    setMarkedData(new Map());
    setHits(0);
    setShipsDestroyed([]);
    setGameStopped(false);
    setServerError(false);
    initiateGameStart();
  };

  useEffect(() => {
    if (hits === 24) {
      initiateGameEnd();
    }
  }, [hits]);

  if (isLoading) return <h2>Loading...</h2>;

  if (serverError)
    return <ServerError handleRestartClick={handleRestartClick} />;

  return gameStarted ? (
    <GameScreen
      bullets={bullets}
      markedData={markedData}
      handleShot={handleShot}
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
