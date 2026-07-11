"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

export default function BusTransition() {
  const reducirMovimiento = useReducedMotion();

  return (
    <section
      className="
        relative
        flex
        h-[180px]
        items-center
        justify-center
        overflow-hidden
        bg-white
        md:hidden
      "
    >
      <motion.div
        initial={{
          x: reducirMovimiento ? 0 : -120,
          opacity: 0,
          scale: 0.8,
        }}
        whileInView={{
          x: reducirMovimiento ? 0 : 80,
          opacity: 1,
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
          relative
          h-[160px]
          w-[280px]
        "
      >
        <Image
          src="/images/autobus-nexia.png"
          alt="Autobús urbano"
          fill
          sizes="280px"
          className="
            object-contain
          "
        />
      </motion.div>
    </section>
  );
}