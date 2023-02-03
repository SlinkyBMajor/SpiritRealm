import React, { useContext } from "react";
import cards from "../data/cards";
import { DeckState, DeckStateProperties, useCreateDeck } from "../hooks/deck";

const defaultDeck: DeckStateProperties = {
  _drawPile: [cards[0], cards[0], cards[0], cards[0], cards[0], cards[0]],
  _discardPile: [],
  _hand: [],
};

// TODO: solve typing issue, {} as DeckState can be dangerous
const DeckContext = React.createContext<DeckState>({} as DeckState);

interface DeckStateProviderProps {
  children: React.ReactNode;
}

export default function DeckStateProvider({
  children,
}: DeckStateProviderProps) {
  const playerDeck = useCreateDeck(defaultDeck);
  console.log("Cards in draw:", playerDeck._drawPile.length);
  return (
    <DeckContext.Provider value={playerDeck}>{children}</DeckContext.Provider>
  );
}

export const useDeckState = () => useContext(DeckContext);
