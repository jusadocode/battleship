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
