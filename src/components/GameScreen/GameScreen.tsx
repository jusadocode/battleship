import GameBoard from "../GameBoard/GameBoard";
import InstructionsSection from "../InstructionsSection/InstructionSection";
import ShipInformation from "../ShipInformation/ShipInformation";
import { GameScreenProps } from "./types";
import {
  interactiveContainer,
  mainContainer,
  statisticsHeader,
} from "./styles";

function GameScreen({ markedData, bullets, handleShot }: GameScreenProps) {
  return (
    <>
      <div style={mainContainer}>
        <InstructionsSection />
        <div style={interactiveContainer}>
          <div style={statisticsHeader}>
            <h2>Shots remaining: {bullets}</h2>
          </div>
          <GameBoard markedData={markedData} handleShot={handleShot} />
        </div>
        <ShipInformation />
      </div>
    </>
  );
}

export default GameScreen;
