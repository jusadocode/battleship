import { EndGameScreenProps } from "./types";

function EndGameScreen({
  hits,
  shipsKilled,
  handleRestartClick,
}: EndGameScreenProps) {
  return (
    <>
      <div>
        <div>You've hit {hits} times.</div>
        <div>
          {shipsKilled.length > 0
            ? `You've sunk ${shipsKilled.length} ships.`
            : "No ships sunk. You'll get them next time."}
        </div>
        <button onClick={handleRestartClick}>Rematch</button>
      </div>
    </>
  );
}

export default EndGameScreen;
