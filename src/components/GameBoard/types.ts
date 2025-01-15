export interface GameBoardProps {
  markedData: Map<string, number>;
  handleShot: (x: number, y: number) => void;
}
