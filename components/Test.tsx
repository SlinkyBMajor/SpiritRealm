import React from "react";
import { motion } from "framer-motion";

export const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0, // this will set a delay before the children start animating
      staggerChildren: 0.3, // this will set the time inbetween children animation
    },
  },
};
export const dropUpVariants = {
  hidden: {
    y: "100vw",
  },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      mass: 0.3,
      // remove delay: 0.3,
    },
  },
};

const t = ["Halllp", "22222", "33333"];

export default function Test() {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      {/* {t.map((text) => (
        <motion.h1 key={text} variants={dropUpVariants}>
          {text}
        </motion.h1>
      ))} */}
      {t.map((text) => (
        <motion.h1 key={text} variants={dropUpVariants}>
          {text}
        </motion.h1>
      ))}
    </motion.div>
  );
}
