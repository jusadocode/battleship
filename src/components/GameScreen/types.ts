import { Dispatch, SetStateAction } from "react";

export interface GameScreenProps {
  bullets: number;
  consumeBullet: () => void;
  updateHits: () => void;
  markedData: Map<string, number>;
  setMarkedData: Dispatch<SetStateAction<Map<string, number>>>;
  isShotSuccessful: (x: number, y: number) => boolean;
}
