import React, { useReducer } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { useDeckState } from "../../context/deck-state";
import { Button } from "../Base";
import Card from "../Card/Card";
import ManaRomb from "./ManaRomb";
import {
  Bar,
  Hand,
  HandWrapper,
  ManaContainer,
  ToolsContainer,
} from "./styles";
import { effectReducer } from "../../reducers/effect-reducer";
import { usePlayerState } from "../../context/player-state";

export default function BottomBar() {
  const { _hand, _discardPile, _drawPile, drawCards } = useDeckState();
  const player = usePlayerState();

  const [state, dispatch] = useReducer(effectReducer, []);

  console.log({ _hand, _discardPile, _drawPile });

  return (
    <Bar>
      <ManaContainer>
        <ManaRomb />
      </ManaContainer>
      <HandWrapper>
        <Hand>
          <AnimatePresence>
            {_hand.map((card, i) => (
              <Card key={card.name + i} cardData={card} />
            ))}
          </AnimatePresence>
        </Hand>
      </HandWrapper>
      <ToolsContainer>
        <Button color="white" onClick={() => drawCards({ amount: 1 })}>
          Draw card
        </Button>

        <Button
          color="white"
          onClick={() =>
            dispatch({
              effect: {
                type: "heal",
                value: 6,
                element: "fire",
                activations: 3,
              },
              source: player,
              targets: [player!],
            })
          }
        >
          Test heal effect
        </Button>

        <Button
          color="white"
          onClick={() =>
            dispatch({
              effect: {
                type: "damage",
                value: 6,
                element: "fire",
                activations: 3,
              },
              source: player,
              targets: [player!],
            })
          }
        >
          Test damage effect
        </Button>
      </ToolsContainer>
    </Bar>
  );
}
