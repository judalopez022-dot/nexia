"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 700);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function volverArriba() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={volverArriba}
          aria-label="Volver al inicio"
          initial={{
            opacity: 0,
            scale: 0.8,
            y: 15,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.8,
            y: 15,
          }}
          whileHover={{
            y: -4,
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.94,
          }}
          className="
            fixed
            bottom-6
            right-6
            z-50
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-[#081C3A]
            text-[#F4C20D]
            shadow-2xl
            ring-1
            ring-white/20
          "
        >
          <ArrowUp size={23} strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}