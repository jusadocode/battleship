import { boardLayout } from "../../constants/gameBoardConstants";
import { boardRowStyle, headerCellStyle, remainingCellStyle } from "./styles";
import {
  boardCellStyle,
  hitCellStyle,
  missedCellStyle,
} from "../../shared/styles/styles";
import { GameBoardProps } from "./types";

function GameBoard({
  markedData,
  setMarkedData,
  consumeBullet,
  updateHits,
  isShotSuccessful,
}: GameBoardProps) {
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

  const getCellStyle = (x: number, y: number) => {
    const boardEntry = markedData.get(`${x}-${y}`);
    switch (boardEntry) {
      case 1:
        return hitCellStyle;
      case -1:
        return missedCellStyle;
      case 0:
        return remainingCellStyle;
      default:
        return boardCellStyle;
    }
  };

  return (
    <>
      <div>
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
          <div key={`row ${i + 1}`} style={boardRowStyle}>
            <div style={{ ...boardCellStyle, ...headerCellStyle }}>{i + 1}</div>
            {row.map((_, j) => (
              <div
                key={`cell ${i + 1}-${j + 1}`}
                style={{ ...boardCellStyle, ...getCellStyle(i + 1, j + 1) }}
                onClick={() => handleCellClick(i + 1, j + 1)}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default GameBoard;
