import GameBoard from "../GameBoard/GameBoard";
import InstructionsSection from "../InstructionsSection/InstructionSection";
import ShipInformation from "../ShipInformation/ShipInformation";
import { GameScreenProps } from "./types";
import {
  interactiveContainer,
  mainContainer,
  statisticsHeader,
} from "./styles";

function GameScreen({
  markedData,
  setMarkedData,
  bullets,
  consumeBullet,
  updateHits,
  isShotSuccessful,
}: GameScreenProps) {
  return (
    <>
      <div style={mainContainer}>
        <InstructionsSection />
        <div style={interactiveContainer}>
          <div style={statisticsHeader}>
            <h2>Shots remaning: {bullets}</h2>
          </div>
          <GameBoard
            markedData={markedData}
            setMarkedData={setMarkedData}
            consumeBullet={() => consumeBullet()}
            updateHits={() => updateHits()}
            isShotSuccessful={isShotSuccessful}
          />
        </div>
        <ShipInformation />
      </div>
    </>
  );
}

export default GameScreen;
