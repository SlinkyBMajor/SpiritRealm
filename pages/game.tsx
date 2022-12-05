import styled from "@emotion/styled";
import React from "react";
import BottomBar from "../components/BottomBar/BottomBar";
import HealthBar from "../components/HealthBar/HealthBar";
import { Board, UIWrapper } from "../components/Layouts/GameLayout/styles";

export default function Game() {
  return (
    <UIWrapper>
      <Board>
        <HealthBar />
      </Board>
      <BottomBar />
    </UIWrapper>
  );
}
