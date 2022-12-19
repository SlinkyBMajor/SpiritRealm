import styled from "@emotion/styled";

export const Bar = styled.div`
  display: flex;
  width: 100%;
  background-color: transparent;
  height: 15vh;
  /* border-top: 1px solid red; */
`;

export const ManaContainer = styled.div`
  display: flex;
  flex-grow: 1;
  /* border: 1px solid red; */
  height: 15vh;
  padding: 0 5%;
`;
export const ToolsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
  /* border: 1px solid red; */
  height: 15vh;
  padding: 0 5%;
`;

export const Hand = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  bottom: 10px;
`;
export const HandWrapper = styled.div`
  display: flex;
  position: relative;
  place-content: center;
  place-items: center;
  flex-grow: 5;
  /* border: 1px solid red; */
  height: 15vh;
`;
