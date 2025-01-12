export const boardColor = "rgb(0, 107, 214)";
export const missedCellColor = "rgb(151, 151, 151)";
export const hitCellColor = "rgb(236, 64, 122)";

export const boardRowStyle = {
  border: `1px solid ${boardColor}`,
  display: "flex",
};

export const boardCellStyle = {
  borderRight: `1px solid ${boardColor}`,
  borderLeft: `1px solid ${boardColor}`,
  padding: "2rem",
  borderRadius: "2%",
  cursor: "crosshair",
  transition: "background-color 0.5s ease-in-out",
};

export const missedCellStyle = {
  padding: "2rem",
  cursor: "not-allowed",
  backgroundColor: `${missedCellColor}`,
};

export const hitCellStyle = {
  padding: "2rem",
  backgroundColor: `${hitCellColor}`,
};
