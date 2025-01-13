import GameBoard from "../GameBoard/GameBoard";
import InstructionsSection from "../InstructionsSection/InstructionSection";
import ShipInformation from "../ShipInformation/ShipInformation";
import { GameScreenProps } from "./types";
import {
  interactiveContainer,
  mainContainer,
  statisticsHeader,
} from "./styles";

function GameScreen({ bullets, consumeBullet, updateHits }: GameScreenProps) {
  return (
    <>
      <div style={mainContainer}>
        <InstructionsSection />
        <div style={interactiveContainer}>
          <div style={statisticsHeader}>
            <h2>Shots remaning: {bullets}</h2>
          </div>
          <GameBoard
            consumeBullet={() => consumeBullet()}
            updateHits={() => updateHits()}
          />
        </div>
        <ShipInformation />
      </div>
    </>
  );
}

export default GameScreen;
