import styled from "@emotion/styled";
import React from "react";
import { usePlayerState } from "../../context/player-state";

const Romb = styled.div`
  border: 1px solid white;
  width: 60px;
  height: 60px;
  margin-top: 26px;
  z-index: 1;
`;

const InnerRomb = styled.div<{ percent: number }>`
  /*   background-color: white;
  width: 150%;
  height: 0%;
  transform: rotate(-45deg) translateX(-25%);
  overflow: hidden;
  position: absolute;
  left: -100px;
  top: -100px; */

  width: 0;
  height: 0;
  border: 50px solid transparent;
  border-bottom-color: red;
  position: relative;
  top: -50px;
  &:after {
    content: "";
    position: absolute;
    left: -50px;
    top: 50px;
    width: 0;
    height: 0;
    border: 50px solid transparent;
    border-top-color: red;
  }
`;

/* 
    #diamond {
      width: 0;
      height: 0;
      border: 50px solid transparent;
      border-bottom-color: red;
      position: relative;
      top: -50px;
    }
    #diamond:after {
      content: '';
      position: absolute;
      left: -50px;
      top: 50px;
      width: 0;
      height: 0;
      border: 50px solid transparent;
      border-top-color: red;
    } */
export default function ManaRomb() {
  const player = usePlayerState();

  const manaPercent =
    player!._mana.white.current > 1
      ? (player!._mana.white.current / player!._mana.white.max) * 100
      : 0;

  console.log({ manaPercent });
  return (
    <Romb>
      <InnerRomb percent={manaPercent} />
    </Romb>
  );
}

/* styled.div<{ percent: number }>;
 */
/*   width: ${({ percent }) => percent}%;
 */
