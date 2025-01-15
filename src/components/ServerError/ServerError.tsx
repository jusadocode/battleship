import { ServerErrorProps } from "./types";

function ServerError({ handleRestartClick }: ServerErrorProps) {
  return (
    <div>
      <div>
        <h2>Server Error Occurred</h2>
        <p>
          There was a problem connecting to the game server. If this continues,
          restart the server.
        </p>
        <button onClick={handleRestartClick}>Try Again</button>
      </div>
    </div>
  );
}

export default ServerError;
