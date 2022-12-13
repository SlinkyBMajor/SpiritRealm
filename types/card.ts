import { Effect } from "../types";

export interface Card {
  name: string;
  image: string;
  description: string;
  target: {
    type: string;
  };
  effects: Effect[];
}
