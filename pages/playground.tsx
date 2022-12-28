import styled from "@emotion/styled";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import ParticleEmitter from "../components/VisualEffects/ParticleEmitter";

const Target = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  left: 80%;
  top: 50%;
`;

export default function Playground() {
  // THis ref will be connected to the orange box
  const boxRef = useRef<HTMLDivElement>(null);

  // X
  const [x, setX] = useState<number>(0);

  // Y
  const [y, setY] = useState<number>(0);

  // This function calculate X and Y
  const getPosition = () => {
    const x = boxRef.current?.offsetLeft || 0;
    setX(x);

    const y = boxRef.current?.offsetTop || 0;
    setY(y);
  };

  // Get the position of the red box in the beginning
  useEffect(() => {
    getPosition();
  }, []);

  // Re-calculate X and Y of the red box when the window gets resized by the user
  useEffect(() => {
    window.addEventListener("resize", getPosition);

    return () => {
      window.removeEventListener("resize", getPosition);
    };
  }, []);

  return (
    <div>
      <ParticleEmitter moveTo={{ x, y }} />
      <Target ref={boxRef} />
    </div>
  );
}
