import { useEffect, useState } from "react";
import { boardLayout } from "../../constants/gameBoardConstants";
import generateShips from "../../shared/utils/generateShipData";
import { boardRowStyle, headerCellStyle } from "./styles";
import {
  boardCellStyle,
  hitCellStyle,
  missedCellStyle,
} from "../../shared/styles/styles";
import { GameBoardProps } from "./types";

function GameBoard({ consumeBullet, updateHits }: GameBoardProps) {
  const [markedData, setMarkedData] = useState(new Map());
  const [shipData, setShipData] = useState(new Map());

  const handleCellClick = (x: number, y: number) => {
    if (markedData.has(`${x}-${y}`)) return;

    const success: boolean = isShotSuccessful(x, y);

    setMarkedData((prev: Map<string, number>) => {
      const newMap = new Map(prev);

      if (success) {
        newMap.set(`${x}-${y}`, 1);
        updateHits();
      } else {
        newMap.set(`${x}-${y}`, -1);
        consumeBullet();
      }

      return newMap;
    });
  };

  const isShotSuccessful = (x: number, y: number) => shipData.has(`${x}-${y}`);

  const getCellStyle = (x: number, y: number) => {
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
      <div style={boardRowStyle}>
        <div style={{ ...boardCellStyle, ...headerCellStyle }}></div>
        {boardLayout.map((_, index) => (
          <div
            key={`col-header ${index}`}
            style={{ ...boardCellStyle, ...headerCellStyle }}
          >
            {String.fromCharCode(65 + index)}
          </div>
        ))}
      </div>
      {boardLayout.map((row, i) => (
        <div key={`row ${i}`} style={boardRowStyle}>
          <div style={{ ...boardCellStyle, ...headerCellStyle }}>{i + 1}</div>
          {row.map((_, j) => (
            <div
              key={`cell ${i}-${j}`}
              style={{ ...boardCellStyle, ...getCellStyle(i, j) }}
              onClick={() => handleCellClick(i, j)}
            ></div>
          ))}
        </div>
      ))}
    </>
  );
}

export default GameBoard;
