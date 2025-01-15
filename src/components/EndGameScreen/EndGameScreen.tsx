import ResultBoard from "../ResultBoard/ResultBoard";
import ShipInformation from "../ShipInformation/ShipInformation";
import {
  mainContainer,
  resultContainer,
  infoSection,
  hitMessage,
  groupedShipName,
  gameEndHeader,
  restartButton,
} from "./styles";
import { EndGameScreenProps } from "./types";

function EndGameScreen({
  hits,
  shipsDestroyed,
  handleRestartClick,
  markedData,
}: EndGameScreenProps) {
  const getGroupedShips = () => {
    return shipsDestroyed.reduce((acc, ship) => {
      acc[ship.name] = (acc[ship.name] || 0) + 1;
      return acc;
    }, {} as { [key: string]: number });
  };

  return (
    <div style={mainContainer}>
      <div style={resultContainer}>
        <div style={infoSection}>
          <div style={hitMessage}>You've hit {hits} times.</div>

          {shipsDestroyed.length > 0 ? (
            <div>
              <div style={hitMessage}>
                {`You've sunk ${shipsDestroyed.length} ship${
                  shipsDestroyed.length > 1 ? "s" : ""
                }.`}
              </div>
              {Object.entries(getGroupedShips()).map(([shipName, count]) => (
                <div key={shipName} style={groupedShipName}>
                  {shipName} {count > 1 ? `x${count}` : ""}
                </div>
              ))}
            </div>
          ) : (
            <div style={hitMessage}>No ships sunk</div>
          )}

          <div style={hitMessage}>
            {shipsDestroyed.length >= 3
              ? "Well done!"
              : "You'll get them all next time!"}
          </div>
          <button style={restartButton} onClick={handleRestartClick}>
            Again
          </button>
        </div>

        <div>
          <div style={gameEndHeader}>
            <h2>Game ended</h2>
          </div>
          <ResultBoard markedData={markedData} />
        </div>

        <ShipInformation />
      </div>
    </div>
  );
}

export default EndGameScreen;
