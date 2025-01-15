export interface ShipInfo {
  name: string;
  size: number;
  amount: number;
}

export interface ShipData {
  name: string;
  coordinates: number[][];
}

export interface ShipPlacementEntry {
  coordinate: string;
  shipID: string;
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

export interface ShootRequest {
  gameId: string;
  coordinates: {
    x: number;
    y: number;
  };
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
