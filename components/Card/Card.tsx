import React from "react";
import { motion, MotionProps } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ICard } from "../../types/card";
import {
  CardImage,
  CardName,
  DescriptionBox,
  PhysicalCard,
  Tags,
} from "./styles";
import {
  faBoltLightning,
  faFire,
  faSpa,
} from "@fortawesome/free-solid-svg-icons";
import { TurnStates } from "../../state-machines/turn-machine";
import { useTurnState } from "../../state-machines/turn-machine/provider";
import { useSelector } from "@xstate/react";

interface CardProps {
  cardData: ICard;
}

/* const myLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`
} */

export default function Card({ cardData }: CardProps) {
  const turnState = useTurnState();
  const isPlayersTurn = useSelector(turnState.turnService, (state) =>
    state.matches(TurnStates.PlayerTurnActive)
  );
  /* console.log(isPlayersTurn); */

  return (
    <motion.div
      drag
      dragSnapToOrigin
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, y: 8 }}
      whileHover={{
        scale: 1.4,
        transition: { duration: 0.2 },
        y: -20,
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      dragConstraints={{
        top: -300,
        left: -30,
        right: 30,
        bottom: 0,
      }}
    >
      <PhysicalCard shine={isPlayersTurn}>
        <CardImage
          src={`/static-assets/card-images/${cardData.image}.png`}
          alt="chaos_bolt"
          width={150}
          height={150}
          draggable={false}
        />
        <CardName>{cardData.name}</CardName>
        {/* <DescriptionBox>
          <p>{cardData.description}</p>
        </DescriptionBox> */}
        <Tags>
          <FontAwesomeIcon icon={faBoltLightning} />
          <FontAwesomeIcon icon={faFire} />
          <FontAwesomeIcon icon={faSpa} />
        </Tags>
      </PhysicalCard>
    </motion.div>
  );
}

{
  /* <motion.div
drag
dragSnapToOrigin
initial={{ opacity: 0, scale: 0.7 }}
animate={{ opacity: 1, scale: 1 }}
exit={{ opacity: 0 }}
variants={fmItem}
whileHover={{
  scale: 1.1,
  transition: { duration: 0.2 },
}}
transition={{ duration: 0.4, ease: "easeOut" }}
dragConstraints={{
  top: -300,
  left: -30,
  right: 30,
  bottom: 0,
}}
> */
}
