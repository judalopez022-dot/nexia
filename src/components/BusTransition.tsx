"use client";

import { motion, useReducedMotion } from "motion/react";
import BusIllustration from "@/components/BusIllustration";

export default function BusTransition() {
  const reducirMovimiento = useReducedMotion();

  return (
    <section
      className="
        relative
        flex
        h-[170px]
        items-center
        justify-center
        overflow-hidden
        bg-white
        md:hidden
      "
    >
      <motion.div
        initial={{
          opacity: 0,
          x: reducirMovimiento ? 0 : -120,
          scale: 0.8,
        }}
        whileInView={{
          opacity: 1,
          x: reducirMovimiento ? 0 : 60,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.5,
        }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          h-[150px]
          w-[260px]
        "
      >
        <BusIllustration />
      </motion.div>
    </section>
  );
}