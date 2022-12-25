import React from "react";
import { useActor } from "@xstate/react";
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

export default function BottomBar() {
  const { _hand, drawCards } = useDeckState();

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
        <Button onClick={() => drawCards({ amount: 1 })}>Draw card</Button>
      </ToolsContainer>
    </Bar>
  );
}
