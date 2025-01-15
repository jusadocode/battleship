import { CSSProperties } from "react";
import cross from "../../assets/cross.png";

export const boardColor: string = "rgb(0, 107, 214)";
export const missedCellColor: string = "rgb(151, 151, 151)";
export const hitCellColor: string = "rgb(236, 64, 122)";
export const destroyedCellColor: string = "rgb(255, 161, 21)";

export const boardCellStyle: CSSProperties = {
  minWidth: "1rem",
  maxWidth: "1rem",
  borderRight: `1px solid ${boardColor}`,
  borderLeft: `1px solid ${boardColor}`,
  padding: "1rem",
  borderRadius: "2%",
  cursor: "crosshair",
  backgroundImage: `none`,
  transition: "background-color 0.5s ease-in-out, background-image 3s ease-in",
};

export const headerCellStyle: CSSProperties = {
  ...boardCellStyle,
  backgroundColor: `${boardColor}`,
  cursor: "normal",
};

export const missedCellStyle: CSSProperties = {
  ...boardCellStyle,
  cursor: "not-allowed",
  backgroundColor: `${missedCellColor}`,
};

export const hitCellStyle: CSSProperties = {
  ...boardCellStyle,
  backgroundColor: `${hitCellColor}`,
  backgroundImage: `url('${cross}')`,
  backgroundSize: "25%",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

export const destroyedCellStyle: CSSProperties = {
  ...hitCellStyle,
  backgroundColor: `${destroyedCellColor}`,
};
