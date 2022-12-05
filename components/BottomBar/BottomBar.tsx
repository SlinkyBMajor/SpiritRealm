import React from "react";
import PlayingCard from "../Card/Card";
import ManaRomb from "./ManaRomb";
import { Bar, Hand, HandWrapper, ManaContainer } from "./styles";

export default function BottomBar() {
  return (
    <Bar>
      <ManaContainer>
        <ManaRomb />
      </ManaContainer>
      <HandWrapper>
        <Hand>
          <PlayingCard />
          <PlayingCard />
        </Hand>
      </HandWrapper>
    </Bar>
  );
}
