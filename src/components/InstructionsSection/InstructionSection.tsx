import { useState } from "react";
import {
  cellInfoContainer,
  cellInfoEntry,
  descriptionBackdrop,
  descriptionContainer,
  descriptionContainerVisible,
  mainContainer,
} from "./styles";
import {
  boardCellStyle,
  hitCellStyle,
  missedCellStyle,
} from "../../shared/styles/styles";

function InstructionsSection() {
  const [showModal, setShowModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleButtonClick = () => {
    if (!showModal) {
      setShowModal(true);
      setTimeout(() => setIsVisible(true), 10); // Trigger fade-in
    } else {
      closeModal();
    }
  };

  const closeModal = () => {
    setIsVisible(false);
    setTimeout(() => setShowModal(false), 300); // Delay removal to match fade-out
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).id === "modal-backdrop") {
      closeModal();
    }
  };

  return (
    <>
      <div style={mainContainer}>
        <div style={cellInfoContainer}>
          <h2>Colors:</h2>
          <div style={cellInfoEntry}>
            <div style={{ ...boardCellStyle, ...hitCellStyle }}></div>
            <h4>-</h4>
            <h4>Successful hit</h4>
          </div>

          <div style={cellInfoEntry}>
            <div style={{ ...boardCellStyle, ...missedCellStyle }}></div>
            <h4>-</h4>
            <h4>Missed shot</h4>
          </div>
        </div>

        <button onClick={handleButtonClick}>Game Explanation</button>

        {showModal && (
          <div
            id="modal-backdrop"
            style={descriptionBackdrop}
            onClick={handleBackdropClick}
          >
            <div
              style={{
                ...descriptionContainer,
                ...(isVisible ? descriptionContainerVisible : {}),
              }}
            >
              <h2>Game Objective</h2>
              <p>
                Battleship is a turn-based game where you attempt to sink your
                opponent's ships by guessing their locations on a grid. In this
                version, you will be playing against the computer.
              </p>

              <h2>Gameplay</h2>
              <div style={{ display: "flex", gap: " 2rem" }}>
                <div>
                  1. The computer secretly places its ships on the game board.
                </div>
                <div>
                  2. You take turns guessing the coordinates of the computer's
                  placed ships.
                </div>
                <div>
                  3. If you hit a ship, the cells will be marked accordingly.
                </div>
                <div>
                  4. The game continues until you sink all of the ships or run
                  out of attempts.
                </div>
              </div>

              <h2>Ship Types and Quantities</h2>
              <p>
                The computer will secretly place the following ships on the
                board:
              </p>
              <div style={{ marginLeft: "1rem" }}>
                <div>- 1 Aircraft Carrier</div>
                <div>- 1 Battleship</div>
                <div>- 2 Destroyers</div>
                <div>- 3 Submarines</div>
                <div>- 3 Patrol boats</div>
              </div>

              <p>Make sure to get all of them! Good luck!</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default InstructionsSection;
