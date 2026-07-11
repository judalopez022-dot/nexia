"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

export default function Hero() {
  const reducirMovimiento = useReducedMotion();

  const movimientoY = reducirMovimiento ? 0 : 28;
  const movimientoX = reducirMovimiento ? 0 : 70;

  return (
    <section
      id="inicio"
      className="
        relative
        overflow-hidden
        bg-[#081C3A]
        text-white
        lg:h-[calc(100svh-90px)]
        lg:min-h-[570px]
        lg:max-h-[760px]
      "
    >
      {/* Fondo blanco diagonal */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
        }}
        className="
          absolute
          right-0
          top-0
          hidden
          h-full
          w-[53%]
          bg-white
          md:block
          [clip-path:polygon(22%_0,100%_0,100%_100%,0_100%)]
        "
      />

      {/* Contenido */}
      <div
        className="
          relative
          z-10
          mx-auto
          grid
          h-full
          max-w-[1450px]
          items-center
          gap-2
          px-6
          py-10
          md:grid-cols-[45%_55%]
          md:px-10
          lg:px-12
          lg:py-6
        "
      >
        {/* Texto */}
        <div className="min-w-0 max-w-[620px]">
          <motion.p
            initial={{
              opacity: 0,
              y: movimientoY,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mb-3
              text-sm
              font-bold
              tracking-wide
              text-[#F4C20D]
              lg:text-base
            "
          >
            RECLUTAMIENTO DE OPERADORES
          </motion.p>

          <motion.div
            initial={{
              width: 0,
              opacity: 0,
            }}
            animate={{
              width: 56,
              opacity: 1,
            }}
            transition={{
              duration: 0.65,
              delay: 0.25,
            }}
            className="mb-6 h-1 rounded-full bg-[#F4C20D]"
          />

          <h1
            className="
              text-[clamp(3rem,5vw,4.5rem)]
              font-extrabold
              leading-[0.94]
              tracking-tight
            "
          >
            <motion.span
              initial={{
                opacity: 0,
                y: movimientoY,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="block whitespace-nowrap"
            >
              CONDUCE MÁS<span className="text-[#F4C20D]">.</span>
            </motion.span>

            <motion.span
              initial={{
                opacity: 0,
                y: movimientoY,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-2 block whitespace-nowrap"
            >
              GANA MÁS<span className="text-[#F4C20D]">.</span>
            </motion.span>
          </h1>

          <motion.p
            initial={{
              opacity: 0,
              y: movimientoY,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.48,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-6
              max-w-lg
              text-base
              leading-7
              text-gray-200
              lg:text-lg
            "
          >
            Forma parte de un equipo profesional de transporte. Obtén
            estabilidad laboral, prestaciones de ley y horarios fijos y
            flexibles.
          </motion.p>

          {/* Indicadores */}
          <motion.div
            initial={{
              opacity: 0,
              y: movimientoY,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.65,
              delay: 0.6,
            }}
            className="
              mt-5
              flex
              flex-col
              gap-2
              text-sm
              text-gray-100
              sm:flex-row
              sm:items-center
              lg:text-base
            "
          >
            <div className="flex items-center gap-2">
              <span
                className="
                  flex
                  h-6
                  w-6
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border-2
                  border-[#F4C20D]
                  text-xs
                  font-bold
                  text-[#F4C20D]
                "
              >
                ✓
              </span>

              <span>Vacantes disponibles</span>
            </div>

            <span className="hidden text-[#F4C20D] sm:inline">•</span>

            <span>Contratación inmediata</span>
          </motion.div>

          {/* Botones */}
          <motion.div
            initial={{
              opacity: 0,
              y: movimientoY,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.65,
              delay: 0.72,
            }}
            className="mt-6 flex flex-col gap-3 sm:flex-row"
          >
            <motion.a
              href="#aplica"
              whileHover={{
                y: -4,
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-full
                bg-[#F4C20D]
                px-7
                py-3.5
                font-bold
                text-[#081C3A]
                shadow-lg
                shadow-yellow-500/20
              "
            >
              APLICA HOY
              <span className="text-xl">→</span>
            </motion.a>

            <motion.a
              href="https://wa.me/525573439713?text=Hola%20Arturo,%20me%20interesa%20la%20vacante%20de%20operador"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -4,
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                border
                border-white
                px-7
                py-3.5
                font-semibold
                text-white
                transition-colors
                hover:bg-white
                hover:text-[#081C3A]
              "
            >
              WhatsApp
            </motion.a>
          </motion.div>
        </div>

        {/* Imagen */}
        <div
          className="
            relative
            min-h-[360px]
            min-w-0
            overflow-visible
            md:h-full
            md:min-h-0
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              x: movimientoX,
              scale: reducirMovimiento ? 1 : 0.94,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              md:translate-x-8
              lg:translate-x-16
            "
          >
            <motion.div
              whileHover={
                reducirMovimiento
                  ? {}
                  : {
                      y: -8,
                      rotate: -0.6,
                    }
              }
              transition={{
                duration: 0.35,
              }}
              className="
                relative
                h-[420px]
                w-full
                sm:h-[500px]
                md:h-[640px]
                lg:h-[720px]
              "
            >
              <Image
                src="/images/autobus-hero.png"
                alt="Ilustración de autobús urbano"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 55vw"
                className="
                  object-contain
                  scale-110
                  drop-shadow-[0_35px_45px_rgba(0,0,0,0.20)]
                  md:scale-[1.25]
                  lg:scale-[1.45]
                "
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}