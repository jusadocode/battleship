import { ShipInfo } from "../types/types";
import { ships } from "../../constants/gameBoardConstants";

const generateShips = (grid: number[][]) => {
  const gridSize = grid.length;
  const shipData = new Map();

  const placeShip = (ship: ShipInfo) => {
    let amountPlaced = 0;

    while (amountPlaced < ship.amount) {
      const isHorizontal = Math.random() < 0.5;
      const row = Math.floor(Math.random() * gridSize);
      const col = Math.floor(Math.random() * gridSize);

      let validPlacement = true;
      const coordinates = [];

      for (let i = 0; i < ship.size; i++) {
        const newRow = isHorizontal ? row : row + i;
        const newCollumn = isHorizontal ? col + i : col;

        if (
          newRow >= gridSize ||
          newCollumn >= gridSize ||
          grid[newRow][newCollumn] === 1 ||
          shipData.has(`${newRow}-${newCollumn}`)
        ) {
          validPlacement = false;
          break;
        }

        coordinates.push([newRow, newCollumn]);
      }

      if (validPlacement) {
        coordinates.forEach((entry) => {
          shipData.set(
            `${entry[0]}-${entry[1]}`,
            `${ship.name}-${amountPlaced}`
          );
        });

        amountPlaced++;
      }
    }
  };

  ships.forEach(placeShip);

  return shipData;
};

export default generateShips;
