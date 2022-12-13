import { CardType } from "../types/card";

const cards: CardType[] = [
  {
    name: "Elemental Calamity",
    image: "elemental-calamity",
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
