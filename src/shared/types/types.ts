export interface ShipInfo {
  name: string;
  size: number;
  amount: number;
}

export interface Ship {
  name: string;
  coordinates: number[][];
  health: number;
}

export interface EndGameResponse {
  coordinateMap: { [key: string]: string };
  hitsCount: number;
  bulletsCount: number;
}

export interface ShotResponse {
  hit: boolean;
  shipDestroyed: Ship | null;
}

export interface ErrorResponse {
  error: string;
}

export interface GameCreatedResponse {
  gameId: string;
}
