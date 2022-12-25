import React from "react";

import PlayerStateProvider from "../context/player-state";
import BottomBar from "../components/BottomBar/BottomBar";
import { Board, UIWrapper } from "../components/Layouts/GameLayout/styles";
import DeckStateProvider from "../context/deck-state";
import { TurnMachineProvider } from "../state-machines/turn-machine/provider";
import TopUIBar from "../components/TopUIBar/TopUIBar";
import FallingParticles from "../components/VisualEffects/FallingParticles";

export default function Game() {
  return (
    <PlayerStateProvider>
      <DeckStateProvider>
        <TurnMachineProvider>
          <UIWrapper>
            <FallingParticles amount={12} />
            <TopUIBar />
            <Board></Board>
            <BottomBar />
          </UIWrapper>
        </TurnMachineProvider>
      </DeckStateProvider>
    </PlayerStateProvider>
  );
}
