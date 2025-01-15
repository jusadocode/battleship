import {
  CREATE_GAME_URL,
  ENDGAME_URL,
  REGISTER_SHOT_URL,
} from "../constants/serverConstants";
import {
  ErrorResponse,
  GameCreatedResponse,
  EndGameResponse,
  ShotResponse,
} from "../types/types";

export const useGameService = () => {
  const saveGameId = (gameId: string) => localStorage.setItem("gameId", gameId);

  const getCurrentGameId = () => {
    return localStorage.getItem("gameId");
  };

  const deleteCurrentGameId = () => {
    return localStorage.removeItem("gameId");
  };

  const createGame = async () => {
    try {
      const response: Response = await fetch(CREATE_GAME_URL, {
        method: "POST",
      });

      if (!response.ok) {
        const errorResponse: ErrorResponse = await response.json();
        throw new Error(`Error creating a game. ${errorResponse.error}`);
      }

      const responseData: GameCreatedResponse = await response.json();

      const createdGameId = responseData.gameId;

      saveGameId(createdGameId);

      return responseData;
    } catch (error) {
      console.error(error);
    }
  };

  const registerShot = async (x: number, y: number) => {
    try {
      const response: Response = await fetch(REGISTER_SHOT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          gameId: getCurrentGameId(),
          coordinates: {
            x,
            y,
          },
        }),
      });

      if (!response.ok) {
        const errorResponse: ErrorResponse = await response.json();
        throw new Error(`Shooting failed. ${errorResponse.error}`);
      }

      const responseData: ShotResponse = await response.json();
      return responseData;
    } catch (error) {
      console.error(error);
    }
  };

  const getEndGameState = async () => {
    try {
      const response = await fetch(`${ENDGAME_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          gameId: getCurrentGameId(),
        }),
      });

      if (!response.ok) {
        const errorResponse: ErrorResponse = await response.json();
        throw new Error(`Error fetching endgame state. ${errorResponse.error}`);
      }

      const gameState: EndGameResponse = await response.json();

      deleteCurrentGameId();

      return gameState;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    createGame,
    registerShot,
    getEndGameState,
  };
};
