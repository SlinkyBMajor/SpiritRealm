import { Effect } from "./effect";
export interface CardType {
  name: string;
  image: string;
  description: string;
  target: {
    type: string;
  };
  effects: Effect[];
}
