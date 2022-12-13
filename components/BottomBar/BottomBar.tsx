import React from "react";
import cards from "../../data/cards";
import Card from "../Card/Card";
import ManaRomb from "./ManaRomb";
import { Bar, Hand, HandWrapper, ManaContainer } from "./styles";

const hand = [cards[0], cards[0], cards[0]];

export default function BottomBar() {
  return (
    <Bar>
      <ManaContainer>
        <ManaRomb />
      </ManaContainer>
      <HandWrapper>
        <Hand>
          {hand.map((card, i) => (
            <Card key={card.name + i} cardData={card} />
          ))}
        </Hand>
      </HandWrapper>
    </Bar>
  );
}
