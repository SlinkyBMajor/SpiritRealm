import React, { createContext, useContext } from "react";
import { useInterpret } from "@xstate/react";
import { InterpreterFrom } from "xstate";
import { send } from "xstate/lib/actions";

import { turnStateMachine } from "./";
import { useDeckState } from "../../context/deck-state";

const TurnMachineContext = createContext({
  turnService: {} as InterpreterFrom<typeof turnStateMachine>,
});

interface TurnStateProviderProps {
  children: React.ReactNode;
}

export const TurnMachineProvider = ({ children }: TurnStateProviderProps) => {
  const { drawCards, discardHand } = useDeckState();

  // Initiate the turn machine. The placement of this is temporary
  const turnService = useInterpret(
    turnStateMachine,
    {
      actions: {
        drawHand: () => drawCards({ amount: 1 }),
        discardHand: () => discardHand(),
        tempProgress: send({ type: "PROGRESS" }),
      },
    },
    (state) => {
      console.log(state.value);
    }
  );

  return (
    <TurnMachineContext.Provider value={{ turnService }}>
      {children}
    </TurnMachineContext.Provider>
  );
};

export const useTurnState = () => useContext(TurnMachineContext);
