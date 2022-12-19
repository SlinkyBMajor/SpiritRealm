import React from "react";

import PlayerStateProvider from "../context/player-state";
import BottomBar from "../components/BottomBar/BottomBar";
import HealthBar from "../components/HealthBar/HealthBar";
import { Board, UIWrapper } from "../components/Layouts/GameLayout/styles";
import DeckStateProvider from "../context/deck-state";

export default function Game() {
  return (
    <PlayerStateProvider>
      <DeckStateProvider>
        <UIWrapper>
          <Board>
            <HealthBar />
          </Board>
          <BottomBar />
        </UIWrapper>
      </DeckStateProvider>
    </PlayerStateProvider>
  );
}
