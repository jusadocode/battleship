import { CSSProperties } from "react";

export const mainContainer: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  justifyContent: "center",
};

export const descriptionContainer: CSSProperties = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "rgba(87, 87, 87, 0.9)",
  padding: "2rem",
  borderRadius: "10px",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  zIndex: 1000,
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  opacity: 0,
  transition: "opacity 0.3s ease-in",
};

export const descriptionBackdrop: CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 999,
};

export const descriptionContainerVisible: CSSProperties = {
  opacity: 1,
};

export const cellInfoContainer: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  alignItems: "flex-start",
};

export const cellInfoEntry: CSSProperties = {
  display: "flex",
  gap: "1rem",
};

export const stepsContainer: CSSProperties = {
  display: "flex",
  gap: " 2rem",
};

export const quantitiesList: CSSProperties = {
  marginLeft: "1rem",
};
