import React from "react";

import cards from "../../data/cards";
import Card from "../Card/Card";
import GeneralManaRomb from "./manaRombs/GeneralManaRomb";
import { Bar, Hand, HandWrapper, ManaContainer } from "./styles";
import { ManaType } from "../../hooks/actor";
import { usePlayerState } from "../../context/player-state";

const hand = [cards[0], cards[0], cards[0]];

export interface ManaRombType {
  type: ManaType;
  color: string;
  manaPercent: number;
}

export default function BottomBar() {
  const player = usePlayerState();

  const onChangeMana = (type: string) => {
    player?.spendMana(1, type);
  };

  const manaRombs = Object.entries(player!._mana).map(([type, manaObject]) => (
    <GeneralManaRomb
      key={type}
      type={type}
      manaObject={manaObject}
      spendMana={onChangeMana}
    />
  ));

  return (
    <Bar>
      <ManaContainer>{manaRombs}</ManaContainer>
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
