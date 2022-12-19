/**
 * Deck and hand
 */

import { useState } from "react";
import { randomFromArray } from "../helpers/arrays";
import { Card } from "../types/card";

export interface DeckStateProperties {
  _drawPile: Card[];
  _hand: Card[];
  _discardPile: Card[];
}

export interface DrawInstructions {
  amount: number;
  type?: string; // Not implemented, meant for "searching" the deck. E.g draw a "fire" spell
}

export interface DeckState extends DeckStateProperties {
  drawCards: (instructions: DrawInstructions) => void;
}

export function useCreateDeck(intialDeckState: DeckStateProperties): DeckState {
  const [deckState, setDeckState] =
    useState<DeckStateProperties>(intialDeckState);

  // Draw X cards, type is not implemented
  const drawCards = (instructions: DrawInstructions) => {
    // Draw one card at a time, to handle recycle logic
    for (let i = 0; i < instructions.amount; i++) {
      // If no cards in draw pile, recycle the discard pile
      if (!deckState._drawPile.length) {
        recycleDeck();
      }
      // Pick a random card from draw pile
      const [card, index] = randomFromArray(deckState._drawPile);
      // Put the card in the hand, and remove (splice) it from the drawPile
      const newDrawPile = [...deckState._drawPile];
      newDrawPile.splice(index, 1);
      setDeckState((prev) => ({
        ...prev,
        _hand: [...prev._hand, card],
        _drawPile: newDrawPile,
      }));
    }
  };

  /**
   * Moves all cards from discard pile into draw pile
   * We use concat to guard against cards getting lost if draw pile is not empty
   */
  const recycleDeck = () => {
    setDeckState((prev) => ({
      ...deckState,
      _drawPile: prev._drawPile.concat(prev._discardPile),
    }));
  };

  return { ...deckState, drawCards };
}
