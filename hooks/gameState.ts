import { useState } from "react";

// Properties start with underscore to differentiate between them and the "methods" (takeDamage etc)
export interface GameStateProperties {
  _round: number;
  _isPaused: boolean;
}

export interface GameState extends GameStateProperties {
  pause: () => void;
}

export function useGameState(gameProperties: GameStateProperties): GameState {
  const [properties, setProperties] =
    useState<GameStateProperties>(gameProperties);

  // Pauses the game
  const pause = () => {
    setProperties((prev) => ({ ...prev, _isPaused: true }));
  };

  return { ...properties, pause };
}
