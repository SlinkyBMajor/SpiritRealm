import React from "react";

import PlayerStateProvider from "../context/player-state";
import BottomBar from "../components/BottomBar/BottomBar";
import { Board, UIWrapper } from "../components/Layouts/GameLayout/styles";
import DeckStateProvider from "../context/deck-state";
import { TurnMachineProvider } from "../state-machines/turn-machine/provider";
import TopUIBar from "../components/TopUIBar/TopUIBar";
import MovingParticles from "../components/VisualEffects/MovingParticles";
import { EffectReducerProvider } from "../reducers/effect-reducer";

export default function Game() {
  return (
    <PlayerStateProvider>
      <DeckStateProvider>
        <TurnMachineProvider>
          <EffectReducerProvider>
            <UIWrapper>
              <MovingParticles speed={3} amount={18} />
              <TopUIBar />
              <Board></Board>
              <BottomBar />
            </UIWrapper>
          </EffectReducerProvider>
        </TurnMachineProvider>
      </DeckStateProvider>
    </PlayerStateProvider>
  );
}
