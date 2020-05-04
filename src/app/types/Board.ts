import IPerson from './IPerson';

export interface Board {
  [index: number]: Seat[];
}

export interface Seat {
  owner?: IPerson;
  isFree: boolean;
  row?: number;
  column?: number;
  reservedAt?: string;
}
