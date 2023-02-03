import { ICard } from "../types/card";

const cards: ICard[] = [
  {
    name: "Chaos Bolt",
    image: "chaos_bolt",
    description: "Fire a crackling bolt of lightning at one target enemy",
    flavour: "Fire a crackling bolt of lightning at one target enemy",
    target: {
      type: "actor",
    },
    effects: [
      {
        type: "damage",
        value: 6,
        element: "fire",
        activations: 0,
      },
      {
        type: "damage",
        value: 6,
        element: "lightning",
        activations: 0,
      },
    ],
  },
  {
    name: "Fire Guru",
    image: "CHANGE",
    description: "Become one with fire, buffs your next fire type attack",
    flavour: "Channeling your inner bam",
    target: {
      type: "self",
    },
    effects: [
      {
        type: "buff",
        value: 2,
        element: "fire",
        activations: 4,
      },
    ],
  },
  {
    name: "Frost nova",
    image: "frost_nova",
    description: "Incase an enemy in solid ice",
    flavour: "Channeling your inner cold bam",
    target: {
      type: "enemy",
    },
    effects: [
      {
        type: "status_effect",
        value: ["freeze"],
        element: "cold",
        activations: 4,
      },
    ],
  },
];

export default cards;
