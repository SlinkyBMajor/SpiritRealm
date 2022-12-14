import React, { createContext, useContext, useState } from "react";
import { Actor, Team, useActor } from "../hooks/actor";

const defaultPlayer = {
  _maxHP: 100,
  _currentHP: 100,
  _team: Team.ally,
  _mana: {
    white: {
      max: 4,
      current: 2,
    },
  },
};

const PlayerContext = createContext<Actor | null>(null);
// Just helps us identify the context in DevTools
PlayerContext.displayName = "PlayerStateContext";

interface GameStateProviderProps {
  children: React.ReactNode;
}

export default function PlayerStateProvider({
  children,
}: GameStateProviderProps) {
  const player = useActor(defaultPlayer);

  if (!player) {
    return null;
  }

  return (
    <PlayerContext.Provider value={player}>{children}</PlayerContext.Provider>
  );
}

export const usePlayerState = () => useContext(PlayerContext);
