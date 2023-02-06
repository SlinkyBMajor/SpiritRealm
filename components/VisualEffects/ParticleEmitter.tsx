import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { times, random } from "lodash";

const Container = styled.div`
  position: absolute;
`;

const Particle = styled(motion.div)`
  z-index: -1;
  width: 2px;
  height: 2px;
  background-color: #c7268c;
  position: absolute;
`;

interface ParticleEmitterProps {
  moveTo: { x: number; y: number }; // Particles will move to this destination
  particles?: number; // Number of particles to spawn
  sourceHeight: number; // Spreads the particles spawn along the given height
  sourceWidth?: number; // Spreads the particles spawn along the given width
}

export default function ParticleEmitter({
  moveTo,
  particles,
  sourceHeight,
  ...rest
}: ParticleEmitterProps) {
  console.log(moveTo);

  const baseAnimation = {
    transitionEnd: {
      display: "none",
    },
  };

  // Provides animation config for a specific particle
  const getParticleAnimation = () => {
    return {
      x: [0, moveTo.x || 0],
      y: [random(0, sourceHeight), moveTo.y || 0],
    };
  };

  return (
    <Container {...rest}>
      {times(particles || 25, (i) => {
        const aniConf = getParticleAnimation();
        return (
          <Particle
            key={111 + i}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              delay: random(0, 2, true),
              type: "spring",
            }}
            animate={{ ...baseAnimation, ...aniConf }}
          />
        );
      })}
    </Container>
  );
}
