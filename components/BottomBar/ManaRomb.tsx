import styled from "@emotion/styled";
import React from "react";

const Romb = styled.div`
  border: 1px solid white;
  width: 60px;
  height: 60px;
  transform: rotate(45deg);
  margin-top: 26px;
  z-index: 1;
`;

export default function ManaRomb() {
  return <Romb />;
}
