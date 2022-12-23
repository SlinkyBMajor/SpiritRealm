import React, { useContext } from "react";

const TurnEventContext = React.createContext<any>({});

interface TurnEventProviderProps {
  children: React.ReactNode;
}

export default function DeckStateProvider({
  children,
}: TurnEventProviderProps) {
  return (
    <TurnEventContext.Provider value={{}}>{children}</TurnEventContext.Provider>
  );
}

export const useDeckState = () => useContext(TurnEventContext);
