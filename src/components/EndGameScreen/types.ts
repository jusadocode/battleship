import { ShipInfo } from "../../shared/types/types";

export interface EndGameScreenProps {
  hits: number;
  shipsKilled: ShipInfo[];
  handleRestartClick: () => void;
}
