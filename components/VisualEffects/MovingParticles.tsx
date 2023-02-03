import React from "react";
import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { times, random } from "lodash";

const falling = keyframes`
  0% { top:-10%; transform:translateX(0px); transform: scale(0.5); opacity: .4;}
  25%{transform:translateX(80px);}
  85%{transform:translateX(-10px); opacity: .6;}
  100% {top:100%; transform:translateX(0px);transform: scale(1);}
`;

const ParticleContainer = styled.div`
  position: absolute;
  height: 20px;
  left: 20%;
  width: 60%;
  height: 100%;
  opacity: 0.3;
  pointer-events: none;
`;

const Particle = styled.div<{ seed: number; speed: number }>`
  --size: ${({ seed }) => seed / 40}vw;
  width: var(--size);
  height: var(--size);
  background: #fff;
  border-radius: 50%;
  position: absolute;
  left: ${({ seed }) => (seed * 77) % 100}%;
  filter: ${({ seed }) => seed < 6 && "blur(1px)"};
  animation: ${({ seed, speed }) =>
    css`
      ${falling} ${seed + (11 - speed)}s ease-in infinite ${seed / 2}s
    `};
  top: -5vh;
`;

type SpeedRange = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
interface MovingParticles {
  amount: number;
  speed: SpeedRange;
}

/**
 * Each particle gets a random seed for its lifetime, this improves the peformance
 */
export default function MovingParticles({ amount, speed }: MovingParticles) {
  const particles = times(amount, (i) => {
    const seed = random(0, 10, true); // Generate a fixed seed for the particle
    return <Particle seed={seed} speed={speed} key={seed + i} />;
  });
  return <ParticleContainer>{particles}</ParticleContainer>;
}
