import { Effect } from "./effect";
export interface ICard {
  name: string;
  image: string;
  description: string;
  flavour: string;
  target: {
    type: "actor" | "self" | "enemy" | "all" | "enemies";
  };
  effects: Effect[];
}
