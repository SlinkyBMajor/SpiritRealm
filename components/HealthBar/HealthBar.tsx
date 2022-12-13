import React, { useEffect, useState } from "react";
import { usePlayerState } from "../../context/player-state";
import { BarBackground, RedBar } from "./styles";

export default function HealthBar() {
  const player = usePlayerState();

  return (
    <BarBackground>
      <RedBar
        percent={
          player!._currentHP > 1
            ? (player!._currentHP / player!._maxHP) * 100
            : 0
        }
      />
      <button
        onClick={() => {
          player!.takeDamage(30);
        }}
      >
        Test
      </button>
    </BarBackground>
  );
}
