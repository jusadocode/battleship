import { boardCellStyle, hitCellStyle } from "../../shared/styles/styles";
import { mainContainer, shipLengthHolder } from "./styles";
import { ships } from "../../shared/constants/gameBoardConstants";

function ShipInformation() {
  return (
    <>
      <div style={mainContainer}>
        <h2>Ship Types:</h2>
        {ships.map((ship, index) => (
          <div key={index}>
            <h3>{ship.name}</h3>
            <div style={shipLengthHolder}>
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
