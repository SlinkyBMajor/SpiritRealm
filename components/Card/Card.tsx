import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "@xstate/react";
import { uniq, map } from "lodash";

import { ICard } from "../../types/card";
import {
  CardImage,
  CardName,
  DescriptionBox,
  PhysicalCard,
  Tags,
} from "./styles";
import { TurnStates } from "../../state-machines/turn-machine";
import { useTurnState } from "../../state-machines/turn-machine/provider";
import ElementTag from "../Indicators/ElementTag";

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

  // Create a array of all elements in effects array, with no duplicates
  const cardTags = uniq(map(cardData.effects, "element"));

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
          {cardTags.map((tag) => (
            <ElementTag key={tag} element={tag} />
          ))}
        </Tags>
      </PhysicalCard>
    </motion.div>
  );
}
