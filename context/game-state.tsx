import React, { useContext } from "react";

const Context = React.createContext({});

interface GameStateProviderProps {
  children: React.ReactNode;
}

export default function GameStatePovider({ children }: GameStateProviderProps) {
  return <Context.Provider value={{}}>{children}</Context.Provider>;
}

export const useGameStateContext = () => useContext(Context);
