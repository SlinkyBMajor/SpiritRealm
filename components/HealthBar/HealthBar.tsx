import React from "react";
import { usePlayerState } from "../../context/player-state";
import { BarBackground, RedBar, HealthWrapper } from "./styles";

export default function HealthBar() {
  const player = usePlayerState();

  const HPpercent =
    player!._currentHP > 0 ? (player!._currentHP / player!._maxHP) * 100 : 0;

  return (
    <HealthWrapper>
      <BarBackground>
        <RedBar percent={HPpercent} />
      </BarBackground>
      {player!._currentHP < player!._maxHP && <span>{player?._currentHP}</span>}
      <button
        onClick={() => {
          player!.takeDamage(30);
        }}
      >
        Test
      </button>
    </HealthWrapper>
  );
}
