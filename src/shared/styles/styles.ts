import { CSSProperties } from "react";
import cross from "../../assets/cross.png";

export const boardColor: string = "rgb(0, 107, 214)";
export const missedCellColor: string = "rgb(151, 151, 151)";
export const hitCellColor: string = "rgb(236, 64, 122)";

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

export const missedCellStyle: CSSProperties = {
  cursor: "not-allowed",
  backgroundColor: `${missedCellColor}`,
};

export const hitCellStyle: CSSProperties = {
  backgroundColor: `${hitCellColor}`,
  backgroundImage: `url('${cross}')`,
  backgroundSize: "25%",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
