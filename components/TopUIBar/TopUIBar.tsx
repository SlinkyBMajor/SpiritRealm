import styled from "@emotion/styled";
import React from "react";
import { useTurnState } from "../../state-machines/turn-machine/provider";
import { Column, Columns } from "../Base";
import HealthBar from "../HealthBar/HealthBar";

const Bar = styled(Columns)`
  position: absolute;
`;

export default function TopUIBar() {
  const turnState = useTurnState();

  return (
    <Bar>
      <Column padding="xl" width={4}>
        <HealthBar />
      </Column>
      <Column padding="xl" alignItems="center" width={4}>
        <button
          onClick={() => turnState.turnService.send({ type: "PROGRESS" })}
        >
          Progress Turn
        </button>
      </Column>
      <Column width={4} padding="xl" alignItems="center">
        Something can go here
      </Column>
    </Bar>
  );
}
