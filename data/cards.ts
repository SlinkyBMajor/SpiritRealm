import { ICard } from "../types/card";

const cards: ICard[] = [
  {
    name: "Chaos Bolt",
    image: "chaos_bolt",
    description: "Fire a crackling bolt of lightning at one target enemy",
    target: {
      type: "actor",
    },
    effects: [
      {
        type: "damage",
        value: 6,
        element: "fire",
        activeTurns: 3,
      },
      {
        type: "damage",
        value: 6,
        element: "lightning",
        activeTurns: 0,
      },
    ],
  },
];

export default cards;
