"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const volverArriba = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={volverArriba}
          initial={{ opacity: 0, scale: 0.7, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 25 }}
          whileHover={{
            scale: 1.08,
            y: -3,
          }}
          whileTap={{
            scale: 0.92,
          }}
          transition={{
            duration: 0.25,
          }}
          className="
            fixed
            bottom-6
            right-6
            z-[999]
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            bg-[#F4C20D]
            text-[#081C3A]
            shadow-[0_10px_30px_rgba(244,194,13,0.45)]
            transition-all
          "
          aria-label="Volver arriba"
        >
          <ArrowUp size={26} strokeWidth={3} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}