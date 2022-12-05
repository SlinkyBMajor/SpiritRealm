import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import cardData from "./card-data.json";
/* import ElementalCalamityImage from "../../assets/card-images/elemental-calamity.png"; */

import {
  CardImage,
  CardName,
  DescriptionBox,
  PhysicalCard,
  Tags,
} from "./styles";
import { faBoltLightning, faFire } from "@fortawesome/free-solid-svg-icons";

export default function PlayingCard() {
  return (
    <motion.div
      drag
      dragSnapToOrigin
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 },
      }}
      transition={{ duration: 0.5 }}
      dragConstraints={{
        top: -300,
        left: -20,
        right: 20,
        bottom: 0,
      }}
    >
      <PhysicalCard>
        <CardImage imageName={cardData.image} />
        <CardName>{cardData.name}</CardName>
        <DescriptionBox>
          <p>{cardData.description}</p>
        </DescriptionBox>
        <Tags>
          <FontAwesomeIcon icon={faBoltLightning} />
          <FontAwesomeIcon icon={faFire} />
        </Tags>
      </PhysicalCard>
    </motion.div>
  );
}
