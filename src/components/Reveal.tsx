"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  onLoad?: boolean;
};

export default function Reveal({
  children,
  delay = 0,
  className = "",
  onLoad = false,
}: RevealProps) {
  const reducirMovimiento = useReducedMotion();

  const initialAnimation = reducirMovimiento
    ? { opacity: 0 }
    : {
        opacity: 0,
        y: 30,
      };

  const finalAnimation = {
    opacity: 1,
    y: 0,
  };

  if (onLoad) {
    return (
      <motion.div
        className={`w-full ${className}`}
        initial={initialAnimation}
        animate={finalAnimation}
        transition={{
          duration: reducirMovimiento ? 0.25 : 0.7,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={`w-full ${className}`}
      initial={initialAnimation}
      whileInView={finalAnimation}
      viewport={{
        once: true,
        amount: 0.08,
        margin: "0px 0px -40px 0px",
      }}
      transition={{
        duration: reducirMovimiento ? 0.25 : 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}