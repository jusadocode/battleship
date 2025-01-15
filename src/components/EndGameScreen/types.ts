import { Ship } from "../../shared/types/types";

export interface EndGameScreenProps {
  hits: number;
  shipsDestroyed: Ship[];
  handleRestartClick: () => void;
  markedData: Map<string, number>;
}
