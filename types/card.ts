import { Effect } from "./effect";
export interface ICard {
  name: string;
  image: string;
  description: string;
  target: {
    type: string;
  };
  effects: Effect[];
}
