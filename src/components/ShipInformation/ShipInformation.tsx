import { boardCellStyle, hitCellStyle } from "../../shared/styles/styles";
import { ships } from "../../constants/gameBoardConstants";

function ShipInformation() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <h2>Ship Types:</h2>
        {ships.map((ship) => (
          <div>
            <h3>{ship.name}</h3>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {Array.from({ length: ship.size }).map((_, index) => (
                <div
                  key={`${ship.name}-${index}`}
                  style={{ ...boardCellStyle, ...hitCellStyle }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ShipInformation;
