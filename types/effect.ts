export type ActionType = "damage" | "heal";

export type Element = "none" | "fire" | "lightning";

/* export enum Action {
  damage = "damage",
  heal = "heal",
} */

export interface Effect {
  type: ActionType;
  value: number; // damage/heal value
  element: Element; // what element, if any
  activeTurns: number; // turns this effect is active
}
