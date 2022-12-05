import styled from "@emotion/styled";

export const UIWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  flex-direction: column;
  overflow: hidden;
`;

export const Board = styled.div`
  display: flex;
  height: 85vh;
  width: 100%;
  padding: 3% 5%;
  background: rgb(21, 23, 44);
  background: radial-gradient(
    circle,
    rgba(21, 23, 44, 1) 28%,
    rgba(9, 13, 27, 1) 78%
  );
`;

export const Cards = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border: 1px solid red;
`;
