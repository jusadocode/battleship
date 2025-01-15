import ResultBoard from "../ResultBoard/ResultBoard";
import ShipInformation from "../ShipInformation/ShipInformation";
import { mainContainer, resultContainer } from "./styles";
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
    <>
      <div style={mainContainer}>
        <div style={resultContainer}>
          <div>
            <div>You've hit {hits} times.</div>
            <div>
              {shipsDestroyed.length > 0 ? (
                <div>
                  <div>
                    {" "}
                    {`You've sunk ${shipsDestroyed.length} ship${
                      shipsDestroyed.length > 1 ? "s" : ""
                    }.`}
                  </div>
                  {Object.entries(getGroupedShips()).map(
                    ([shipName, count]) => (
                      <div key={shipName}>
                        {shipName} {count > 1 ? `x${count}` : ""}
                      </div>
                    )
                  )}
                </div>
              ) : (
                "No ships sunk. You'll get them next time."
              )}
            </div>
          </div>
          <ResultBoard markedData={markedData} />
          <ShipInformation />
        </div>
        <button onClick={handleRestartClick}>Rematch</button>
      </div>
    </>
  );
}

export default EndGameScreen;
