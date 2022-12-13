import styled from "@emotion/styled";
import { StaticImageData } from "next/image";

export const PhysicalCard = styled.div`
  user-select: none;
  display: flex;
  background: rgb(33, 36, 73);
  background: linear-gradient(
    180deg,
    rgba(33, 36, 73, 1) 35%,
    rgba(19, 14, 41, 1) 100%
  );
  flex-direction: column;
  width: 11.5em;
  height: 14em;
  border-radius: 8px;
  overflow: hidden;
  border-top: 2px solid rgb(71, 62, 125);
  z-index: 10;
  margin-right: 0.8em;
`;

export const CardName = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const CardImage = styled.div<{ imageName: string }>`
  background-image: ${(imageName) =>
    `url(static-assets/card-images/elemental-calamity.png)`};
  background-size: cover;
  background-repeat: no-repeat;
  height: 140px;
  width: 100%;
  margin-bottom: 8px;
  &:hover:after {
    position: absolute;
    content: "";
    width: 100%;
    overflow: hidden;
    height: 140px;
    background: inherit;
    filter: blur(8px); /* glow range */
    opacity: 0.3;
    mix-blend-mode: lighten; /* lighter (add) can be used as well */
  }
`;

export const DescriptionBox = styled.div`
  display: flex;
  padding: 1em;
  flex-grow: 1;
  justify-content: center;
  align-content: center;
  font-size: 12px;
`;

export const Tags = styled.div`
  display: flex;
  padding: 0.5em 1em;
  & > * {
    margin-right: 6px;
  }
`;
