import ResultBoard from "../ResultBoard/ResultBoard";
import { mainContainer } from "./styles";
import { EndGameScreenProps } from "./types";

function EndGameScreen({
  hits,
  shipsDestroyed,
  handleRestartClick,
  markedData,
}: EndGameScreenProps) {
  return (
    <>
      <div style={mainContainer}>
        <div>
          <div>You've hit {hits} times.</div>
          <div>
            {shipsDestroyed.length > 0
              ? `You've sunk ${shipsDestroyed.length} ships.`
              : "No ships sunk. You'll get them next time."}
          </div>
        </div>

        <ResultBoard markedData={markedData} />
        <button onClick={handleRestartClick}>Rematch</button>
      </div>
    </>
  );
}

export default EndGameScreen;
