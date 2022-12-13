import styled from "@emotion/styled";

export const HealthWrapper = styled.div`
  display: inline-flex;
  align-content: center;
  flex-wrap: wrap;
  height: 24px;
  & > * {
    margin-right: 8px;
  }
`;

export const BarBackground = styled.div`
  background-color: #eee;
  position: relative;
  width: 140px;
  height: 12px;
`;

export const RedBar = styled.div<{ percent: number }>`
  width: ${({ percent }) => percent}%;
  transition: width 1s ease-in-out;
  height: 12px;
  background-color: #ff6684;
`;
