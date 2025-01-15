import { StartScreenProps } from "./types";

function StartScreen({ handleStartClick }: StartScreenProps) {
  return (
    <>
      <div>
        <button onClick={handleStartClick}>Begin Operation</button>
      </div>
    </>
  );
}

export default StartScreen;
