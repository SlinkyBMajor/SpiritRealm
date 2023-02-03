import React, { useContext } from "react";
import { Effect } from "../types/effect";
import { Actor } from "../hooks/actor";

type Action = {
  effect: Effect; // The effect that was triggered
  source: Actor | null; // The actor that caused this effect
  targets: Actor[]; // One or more targets
  triggeringEffect?: Effect | null; // The effect that triggered this effect
};

// A queue of effects to be triggered
type EffectQueue = Effect[];

// Remove the top element in the queue
const shiftQueue = (queue: EffectQueue): EffectQueue => {
  queue.shift();
  return queue;
};

export function effectReducer(effectQueue: EffectQueue, action: Action) {
  const { effect, source, targets, triggeringEffect } = action;
  // we make a copy so we don't unintentionally affect the queue
  const modifiedEffectQueue = [...effectQueue];

  if (effect.type === "damage") {
    targets[0].takeDamage(effect.value);
    return shiftQueue(modifiedEffectQueue);
  }

  if (effect.type === "heal") {
    targets[0].heal(effect.value);
    return shiftQueue(modifiedEffectQueue);
  }

  throw Error("Unknown action.");
}

/* ----------------- PROVIDER -------------------- */

interface EffectReducerProviderProps {
  children: React.ReactNode;
}

const EffectReducerContext = React.createContext<EffectQueue>([]);

export function EffectReducerProvider({
  children,
}: EffectReducerProviderProps) {
  return (
    <EffectReducerContext.Provider value={[]}>
      {children}
    </EffectReducerContext.Provider>
  );
}

export const useEffectReducer = () => useContext(EffectReducerContext);
