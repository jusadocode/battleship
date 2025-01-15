import { CSSProperties } from "react";

export const mainContainer: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export const resultContainer: CSSProperties = {
  width: "80vw",
  display: "flex",
  justifyContent: "space-between",
};

export const infoSection: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  justifyContent: "center",
};

export const hitMessage: CSSProperties = {
  margin: "1rem",
};

export const groupedShipName: CSSProperties = {
  fontWeight: "bold",
};

export const gameEndHeader: CSSProperties = {
  display: "flex",
  justifyContent: "center",
};

export const restartButton: CSSProperties = {
  marginTop: "2rem",
};
