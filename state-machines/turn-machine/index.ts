import { assign } from "lodash";
import { createMachine } from "xstate";

/*******************************************
 *** States
 ******************************************/
export enum TurnStates {
  PlayerTurnStart = "playerTurnStart",
  PlayerTurnActive = "playerTurnActive",
  PlayerTurnEnd = "playerTurnEnd",
  EnemyTurnStart = "enemyTurnStart",
  EnemyTurnActive = "enemyTurnActive",
  EnemyTurnEnd = "enemyTurnEnd",
}

interface TurnContext {
  turn: number;
}

type Event = { type: "PROGRESS" };

/*******************************************
 *** Machine
 ******************************************/
export const turnStateMachine = createMachine({
  id: "turnMachine",
  initial: TurnStates.PlayerTurnStart,
  predictableActionArguments: true,
  schema: {
    // The events this machine handles
    events: {} as Event,
    context: {} as { turn: number },
  },
  context: {
    turn: 0,
  },
  states: {
    [TurnStates.PlayerTurnStart]: {
      entry: ["drawHand"],
      on: {
        PROGRESS: TurnStates.PlayerTurnActive,
      },
    },
    [TurnStates.PlayerTurnActive]: {
      on: {
        PROGRESS: TurnStates.PlayerTurnEnd,
      },
    },
    [TurnStates.PlayerTurnEnd]: {
      entry: ["discardHand"],
      on: {
        PROGRESS: TurnStates.EnemyTurnStart,
      },
    },
    [TurnStates.EnemyTurnStart]: {
      entry: ["tempProgress"],
      on: {
        PROGRESS: TurnStates.EnemyTurnActive,
      },
    },
    [TurnStates.EnemyTurnActive]: {
      entry: ["tempProgress"],
      on: {
        PROGRESS: TurnStates.EnemyTurnEnd,
      },
    },
    [TurnStates.EnemyTurnEnd]: {
      entry: ["tempProgress"],
      on: {
        PROGRESS: TurnStates.PlayerTurnStart,
      },
    },
  },
});
