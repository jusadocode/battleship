import { useEffect, useState } from "react";
import { boardLayout } from "../../constants/gameBoardConstants";
import generateShips from "../../shared/utils/generateShipData";
import {
  boardCellStyle,
  boardRowStyle,
  hitCellStyle,
  missedCellStyle,
} from "./styles";

function GameBoard() {
  const [markedData, setMarkedData] = useState(new Map());
  const [shipData, setShipData] = useState(new Map());

  const handleCellClick = (x: number, y: number) => {
    if (markedData.has(`${x}-${y}`)) return;

    const success: boolean = isShotSuccessful(x, y);

    setMarkedData((prev: Map<string, number>) => {
      const newMap = new Map(prev);

      if (success) newMap.set(`${x}-${y}`, 1);
      else newMap.set(`${x}-${y}`, -1);

      return newMap;
    });
  };

  const isShotSuccessful = (x: number, y: number) => shipData.has(`${x}-${y}`);

  const getCellColor = (x: number, y: number) => {
    const boardEntry = markedData.get(`${x}-${y}`);
    switch (boardEntry) {
      case 1:
        return hitCellStyle;
      case -1:
        return missedCellStyle;
      default:
        return boardCellStyle;
    }
  };

  useEffect(() => {
    // transfer this to server later
    console.log("Generating ships...");
    const generatedData = generateShips(boardLayout);
    setShipData(generatedData);
  }, []);

  return (
    <>
      {boardLayout.map((row, i) => (
        <div key={`row ${i}`} style={boardRowStyle}>
          {row.map((cell, j) => (
            <div
              key={`cell ${i}-${j}`}
              style={{ ...boardCellStyle, ...getCellColor(i, j) }}
              onClick={() => handleCellClick(i, j)}
            ></div>
          ))}
        </div>
      ))}
    </>
  );
}

export default GameBoard;
