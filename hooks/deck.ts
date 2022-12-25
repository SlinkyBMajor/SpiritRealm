/**
 * Deck and hand
 */

import { useState } from "react";
import { randomFromArray } from "../utils/arrays";
import { ICard } from "../types/card";

export interface DeckStateProperties {
  _drawPile: ICard[];
  _hand: ICard[];
  _discardPile: ICard[];
}

export interface DrawInstructions {
  amount: number;
  type?: string; // Not implemented, meant for "searching" the deck. E.g draw a "fire" spell
}

export interface DeckState extends DeckStateProperties {
  drawCards: (instructions: DrawInstructions) => void;
  discardHand: () => void;
}

export function useCreateDeck(intialDeckState: DeckStateProperties): DeckState {
  const [deckState, setDeckState] =
    useState<DeckStateProperties>(intialDeckState);

  // Draw X cards, (type is not implemented)
  const drawCards = (instructions: DrawInstructions) => {
    // We use a temporary arrays so we just need to set to state once
    const newDrawPile: ICard[] = deckState._drawPile;
    const newHand: ICard[] = [];
    // Draw one card at a time, to handle recycle logic
    for (let i = 0; i < instructions.amount; i++) {
      // Pick a random card from draw pile
      const [card, index] = randomFromArray(newDrawPile);
      // Put the card in the hand, and remove (splice) it from the drawPile
      newHand.push(card);
      newDrawPile.splice(index, 1);
      // If no cards in draw pile, recycle the discard pile
      if (!newDrawPile.length) {
        recycleDeck();
      }
      setDeckState((prev) => ({
        ...prev,
        _hand: [...prev._hand, card],
        _drawPile: newDrawPile,
      }));
    }
  };

  // Discard the entire hand
  const discardHand = () =>
    setDeckState((prev) => ({
      ...prev,
      _discardPile: prev._discardPile.concat(prev._hand),
      _hand: [],
    }));

  /**
   * Moves all cards from discard pile into draw pile
   * We use concat to guard against cards getting lost if draw pile is not empty
   */
  const recycleDeck = () => {
    setDeckState((prev) => ({
      ...deckState,
      _drawPile: prev._drawPile.concat(prev._discardPile),
      _discardPile: [],
    }));
  };

  return { ...deckState, drawCards, discardHand };
}
