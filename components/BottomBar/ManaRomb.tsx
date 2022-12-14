import styled from "@emotion/styled";
import React, { useState } from "react";
import { usePlayerState } from "../../context/player-state";

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
    font-size: 1.3rem;
    font-weight: 400;
    position: absolute;
    width: 100%;
    color: #dedede;
    text-align: center;
    align-self: center;
    mix-blend-mode: difference;
    & > :last-child {
      font-size: 0.7rem;
    }
  }
`;

const InnerRomb = styled.div<{ percent: number }>`
  height: ${({ percent }) => percent}%;
  width: 60px;
  background: white;
  transition: height 1s ease-in-out;
`;

export default function ManaRomb() {
  const player = usePlayerState();

  const manaPercent =
    player!._mana.white.current > 0
      ? (player!._mana.white.current / player!._mana.white.max) * 100
      : 0;

  return (
    <>
      <Romb>
        <span>
          <span>{player!._mana.white.current}</span>
          <span>/{player!._mana.white.max}</span>
        </span>
        <InnerRomb percent={manaPercent} />
      </Romb>
      <button onClick={() => player?.spendMana(1)}>Test</button>
    </>
  );
}
