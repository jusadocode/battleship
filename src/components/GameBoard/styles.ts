import { CSSProperties } from "react";
import { boardColor, hitCellStyle } from "../../shared/styles/styles";

export const boardRowStyle: CSSProperties = {
  border: `1px solid ${boardColor}`,
  display: "flex",
};

export const remainingCellStyle: CSSProperties = {
  ...hitCellStyle,
  backgroundImage: "none",
};
