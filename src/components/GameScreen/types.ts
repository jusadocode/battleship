export interface GameScreenProps {
  bullets: number;
  markedData: Map<string, number>;
  handleShot: (x: number, y: number) => void;
}
