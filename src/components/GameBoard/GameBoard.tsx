import { boardLayout } from "../../shared/constants/gameBoardConstants";
import { boardRowStyle, remainingCellStyle } from "./styles";
import {
  boardCellStyle,
  destroyedCellStyle,
  hitCellStyle,
  missedCellStyle,
  headerCellStyle,
} from "../../shared/styles/styles";
import { GameBoardProps } from "./types";

function GameBoard({ markedData, handleShot }: GameBoardProps) {
  const handleCellClick = (x: number, y: number) => {
    handleShot(x, y);
  };

  const getCellStyle = (x: number, y: number) => {
    const boardEntry = markedData.get(`${x}-${y}`);
    switch (boardEntry) {
      case 2:
        return destroyedCellStyle;
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
          <div style={headerCellStyle}></div>
          {boardLayout.map((_, index) => (
            <div key={`col-header ${index}`} style={headerCellStyle}>
              {String.fromCharCode(65 + index)}
            </div>
          ))}
        </div>
        {boardLayout.map((row, i) => (
          <div key={`row ${i + 1}`} style={boardRowStyle}>
            <div style={headerCellStyle}>{i + 1}</div>
            {row.map((_, j) => (
              <div
                key={`cell ${i + 1}-${j + 1}`}
                style={getCellStyle(i + 1, j + 1)}
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
