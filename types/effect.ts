import { Team } from "../classes/actor";
import { TurnStates } from "../state-machines/turn-machine";
import { Status } from "./status";

export type ActionType =
  | "damage"
  | "heal"
  | "buff"
  | "debuff"
  | "dot"
  | "hot"
  | "status_effect";

export enum ElementTypes {
  "none" = "none",
  "fire" = "fire",
  "lightning" = "lightning",
  "chaos" = "chaos",
  "cold" = "cold",
}

export type Element = keyof typeof ElementTypes;

const t = {
  type: "buff",
  trigger: {
    tag: ["fire", "damage"],
    source: ["player"],
  },
  value: 2,
  activations: 2,
  turns: 1,
};

type Trigger = {
  tag: ActionType & Element[];
  sourceTeam: keyof typeof Team;
  when: "instant" & keyof typeof TurnStates;
};

export interface Effect {
  type: ActionType;
  trigger?: Trigger;
  value: number | number[] | Status[]; // damage/heal value, | Array to ramp
  element: Element; // what element, if any
  activations?: number; // number of times this effect can trigger before getting removed
  permanent?: boolean; // If permanent, the effect can not be removed
  beneficial?: boolean; // If the effect is regarded as beneficial to the target
}
