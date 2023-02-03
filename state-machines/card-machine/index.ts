import { createMachine } from "xstate";

/*******************************************
 *** States
 ******************************************/
export enum CardStates {
  Idle = "idle",
  Dragging = "dragging",
}

interface TurnContext {
  turn: number;
}

type Event = { type: "START_DRAG" } | { type: "CANCEL_DRAG" };

/*******************************************
 *** Machine
 ******************************************/
export const cardStateMachine = createMachine({
  id: "cardMachine",
  initial: CardStates.Idle,
  predictableActionArguments: true,
  schema: {
    // The events this machine handles
    events: {} as Event,
  },
  states: {
    [CardStates.Idle]: {
      on: {
        START_DRAG: CardStates.Dragging,
      },
    },
    [CardStates.Dragging]: {
      on: {
        CANCEL_DRAG: CardStates.Idle,
      },
    },
  },
});
