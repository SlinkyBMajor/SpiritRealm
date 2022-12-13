import React from "react";

import PlayerStateProvider from "../context/player-state";
import BottomBar from "../components/BottomBar/BottomBar";
import HealthBar from "../components/HealthBar/HealthBar";
import { Board, UIWrapper } from "../components/Layouts/GameLayout/styles";

export default function Game() {
  return (
    <PlayerStateProvider>
      <UIWrapper>
        <Board>
          <HealthBar />
        </Board>
        <BottomBar />
      </UIWrapper>
    </PlayerStateProvider>
  );
}
