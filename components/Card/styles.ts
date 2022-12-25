import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import Image from "next/image";

export const cardWidth = 6.2;
export const cardHeight = 9;

const shine = keyframes`
  0% {
    transform: rotate(0deg) translateY(0px);
    filter: blur(12px);
    opacity: .3;
  }
  10% {
    transform: translateY(-1px);
    
  }
  25% {
    transform: translateY(1px);
  }
  60% {
    transform: translateY(-1px);
    opacity: .3;
    opacity: .2;
    filter: blur(10px);
  }
  100% {
    transform: rotate(360deg);
    filter: blur(12px);
    opacity: .3;
  }
`;

export const PhysicalCard = styled.div<{ shine: boolean }>`
  user-select: none;
  display: flex;
  background: rgb(33, 36, 73);
  background: linear-gradient(
    180deg,
    rgba(33, 36, 73, 1) 35%,
    rgba(19, 14, 41, 1) 100%
  );
  flex-direction: column;
  width: ${cardWidth}rem;
  height: ${cardHeight}rem;
  border-radius: 8px;
  overflow: hidden;
  border-top: 1px solid rgb(71, 62, 125);
  z-index: 10;
  margin-right: 0.8rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease-in-out;
  &:hover {
    cursor: grab;
  }
  &:after {
    content: "";
    position: absolute;
    width: ${cardWidth}rem;
    height: 100%;
    background-color: #c7268c;
    box-shadow: -8px -6px 0 #f70b50;
    border-radius: 20%;
    transform: translateX(50px);
    animation: ${shine} 4s linear infinite;
    /* filter: blur(22px); */
    z-index: -1;
    mix-blend-mode: exclusion;
    opacity: ${({ shine }) => (shine ? 0.3 : 0)};
  }
`;

export const CardName = styled.div`
  font-size: 0.8rem;
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const CardImage = styled(Image)`
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  background-size: cover;
  background-repeat: no-repeat;
  height: ${cardHeight / 1.8}rem;
  width: 100%;
  margin-bottom: 8px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  &:hover:after {
    position: absolute;
    content: "";
    width: 100%;
    overflow: hidden;
    height: ${cardHeight / 1.8}rem;
    background: inherit;
    filter: blur(8px); /* glow range */
    opacity: 1;
    mix-blend-mode: lighten; /* lighter (add) can be used as well */
  }
`;

export const DescriptionBox = styled.div`
  display: flex;
  padding: 1em;
  flex-grow: 1;
  justify-content: center;
  align-content: center;
  font-size: 0.65rem;
`;

export const Tags = styled.div`
  display: flex;
  padding: 0.5em 1em;
  font-size: 11px;
  & > * {
    margin-right: 6px;
  }
`;
