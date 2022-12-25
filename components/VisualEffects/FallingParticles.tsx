import React from "react";
import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { times, random } from "lodash";

const falling = keyframes`
  0% { top:-10%; transform:translateX(0px); transform: scale(0.5); opacity: .4;}
  25%{transform:translateX(80px);}
  85%{transform:translateX(-10px); opacity: .8}
  100% {top:100%; transform:translateX(0px);transform: scale(1);}
`;

const Particle = styled.div<{ seed: number }>`
  --size: ${({ seed }) => seed / 30}vw;
  width: var(--size);
  height: var(--size);
  background: #fff;
  border-radius: 50%;
  position: absolute;
  left: ${({ seed }) => seed * 8}%;
  filter: ${({ seed }) => seed < 5 && "blur(1px)"};
  animation: ${({ seed }) =>
    css`
      ${falling} ${seed + 8}s ease-in infinite ${seed}s
    `};
  top: -5vh;
`;

interface ParticlesProps {
  amount: number;
}

/**
 * Each particle gets a random seed for its lifetime, this improves the peformance
 */
export default function FallingParticles({ amount }: ParticlesProps) {
  const particles = times(amount, () => {
    const seed = random(0, 10, true); // Generate a fixed seed for the particle
    console.log(seed);
    return <Particle seed={seed} />;
  });
  return <div>{particles}</div>;
}
