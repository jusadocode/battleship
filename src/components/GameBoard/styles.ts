import { CSSProperties } from "react";
import { boardColor } from "../../shared/styles/styles";

export const boardRowStyle: CSSProperties = {
  border: `1px solid ${boardColor}`,
  display: "flex",
};

export const headerCellStyle: CSSProperties = {
  backgroundColor: `${boardColor}`,
  cursor: "normal",
};
