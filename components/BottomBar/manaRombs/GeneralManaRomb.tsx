import React from "react";
import styled from "@emotion/styled";

import { ManaProperty } from "../../../hooks/actor";
import { usePlayerState } from "../../../context/player-state";

const Romb = styled.div`
  border: 1px solid white;
  width: 60px;
  height: 60px;
  margin-top: 26px;
  clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
  position: relative;
  display: flex;
  align-items: flex-end;
  & > span {
    font-size: 1.1rem;
    font-weight: 400;
    position: absolute;
    width: 100%;
    color: #dedede;
    text-align: center;
    align-self: center;
    mix-blend-mode: difference;
    & > :last-child {
      font-size: 0.5rem;
    }
  }
`;

const InnerRomb = styled.div<{ percent: number; color: string }>`
  height: ${({ percent }) => percent}%;
  width: 60px;
  background: ${({ color }) => color};
  transition: height 1s ease-in-out;
`;

enum manaColors {
  "white" = "white",
  "lightning" = "#F9FE6D",
  "chaos" = "#C41E1E",
}

interface GeneralManaRombProps {
  type: string;
  manaObject: ManaProperty;
}

export default function GeneralManaRomb({
  type,
  manaObject,
}: GeneralManaRombProps) {
  const player = usePlayerState();

  const manaPerecent =
    manaObject.current > 0 ? (manaObject.current / manaObject.max) * 100 : 0;

  if (manaPerecent <= 0) {
    alert("You don't have any mana, go meditate bru");
  }

  return (
    <>
      <Romb>
        {
          <InnerRomb
            color={manaColors[type as keyof typeof manaColors]}
            percent={manaPerecent}
          />
        }
        <span>
          <span>{manaObject.current}</span>
          <span>/{manaObject.max}</span>
        </span>
      </Romb>
      {manaPerecent > 0 && (
        <button onClick={() => player?.spendMana(1, type)}>Bam</button>
      )}
    </>
  );
}
