import { ShipInfo } from "../../shared/types/types";

export interface EndGameScreenProps {
  hits: number;
  shipsDestroyed: ShipInfo[];
  handleRestartClick: () => void;
  markedData: Map<string, number>;
}
