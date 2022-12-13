import React, { useContext } from "react";
import { GameStateProperties, useGameState } from "../hooks/gameState";

const defaultGame = {
  _isPaused: false,
  _round: 0,
};

const GameContext = React.createContext<GameStateProperties | null>(null);

interface GameStateProviderProps {
  children: React.ReactNode;
}

export default function GameStatePovider({ children }: GameStateProviderProps) {
  const gameState = useGameState(defaultGame);
  return (
    <GameContext.Provider value={gameState}>{children}</GameContext.Provider>
  );
}

export const useGameStateContext = () => useContext(GameContext);
