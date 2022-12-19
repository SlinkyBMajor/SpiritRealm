import { useMachine } from "@xstate/react";
import React from "react";
import { useDeckState } from "../../context/deck-state";

import cards from "../../data/cards";
import { turnStateMachine } from "../../state-machines/turnStateMachine";
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

const hand = [cards[0], cards[0], cards[0]];

export default function BottomBar() {
  const [current, send] = useMachine(turnStateMachine);
  const { _hand, drawCards } = useDeckState();

  console.log(current.value, { current });

  return (
    <Bar>
      <button
        onClick={() => send({ type: "PROGRESS" })}
        style={{ position: "absolute", top: 0 }}
      >
        Test
      </button>
      <ManaContainer>
        <ManaRomb />
      </ManaContainer>
      <HandWrapper>
        <Hand>
          {_hand.map((card, i) => (
            <Card key={card.name + i} cardData={card} />
          ))}
        </Hand>
      </HandWrapper>
      <ToolsContainer>
        <Button onClick={() => drawCards({ amount: 1 })}>Draw card</Button>
      </ToolsContainer>
    </Bar>
  );
}
