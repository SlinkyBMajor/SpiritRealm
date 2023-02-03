import { Variants } from "framer-motion";
import React, { useEffect, useState } from "react";
import { usePlayerState } from "../../context/player-state";
import {
  BarBackground,
  RedBar,
  HealthWrapper,
  ChangeIndicator,
} from "./styles";

const animationVariants: Variants = {
  damage: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  heal: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export default function HealthBar() {
  // TODO: Unfinished attempt at animation on dmg/heal
  /* const [animateEvent, setAnimateEvent] = useState<"damage" | "heal" | null>(
    null
  ); */
  const player = usePlayerState();

  const HPpercent =
    player!._currentHP > 0 ? (player!._currentHP / player!._maxHP) * 100 : 0;

  return (
    <HealthWrapper>
      <BarBackground>
        <RedBar percent={HPpercent} />
        <ChangeIndicator
          animate={{ y: 16, opacity: [1, 0.5, 0] }}
          variants={animationVariants}
          initial={false}
        />
      </BarBackground>
      <span>{player?._currentHP}</span>
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
