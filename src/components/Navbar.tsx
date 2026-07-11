"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Empresa", href: "#empresa" },
  { label: "Requisitos", href: "#requisitos" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header
      className={`
        sticky
        top-0
        z-50
        w-full
        border-b
        bg-white/95
        backdrop-blur-xl
        transition-all
        duration-300
        ${
          scrolled
            ? "border-gray-200 shadow-lg shadow-black/5"
            : "border-transparent"
        }
      `}
    >
      <div
        className={`
          mx-auto
          flex
          max-w-[1450px]
          items-center
          justify-between
          px-6
          transition-all
          duration-300
          md:px-10
          lg:px-12
          ${scrolled ? "h-[72px]" : "h-[82px]"}
        `}
      >
        {/* Logo */}
        <a
          href="#inicio"
          onClick={closeMenu}
          aria-label="Ir al inicio"
          className="
            relative
            z-20
            flex
            h-full
            items-center
          "
        >
          <Image
            src="/nexia-logo.png"
            alt="Logo de NEXIA"
            width={120}
            height={20}
            priority
            className={`
              w-auto
              object-contain
              transition-all
              duration-300
              ${scrolled ? "h-[90px]" : "h-[105px]"}
            `}
          />
        </a>

        {/* Navegación de escritorio */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="
                relative
                text-sm
                font-semibold
                text-[#081C3A]
                transition-colors
                duration-300
                after:absolute
                after:-bottom-2
                after:left-0
                after:h-0.5
                after:w-0
                after:bg-[#F4C20D]
                after:transition-all
                after:duration-300
                hover:text-[#D7A900]
                hover:after:w-full
              "
            >
              {link.label}
            </a>
          ))}

          <a
            href="#aplica"
            className="
              inline-flex
              items-center
              justify-center
              rounded-full
              bg-[#F4C20D]
              px-6
              py-3
              text-sm
              font-bold
              text-[#081C3A]
              shadow-md
              shadow-yellow-500/20
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#ffd52f]
            "
          >
            APLICA AHORA
          </a>
        </nav>

        {/* Botón móvil */}
        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          className="
            relative
            z-20
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-[#081C3A]
            text-white
            transition-transform
            duration-300
            hover:scale-105
            lg:hidden
          "
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Menú móvil */}
      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="
              overflow-hidden
              border-t
              border-gray-100
              bg-white
              lg:hidden
            "
          >
            <nav className="flex flex-col gap-2 px-6 py-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="
                    rounded-xl
                    px-4
                    py-3
                    font-semibold
                    text-[#081C3A]
                    transition-colors
                    hover:bg-[#F5F7FA]
                    hover:text-[#D7A900]
                  "
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#aplica"
                onClick={closeMenu}
                className="
                  mt-2
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  bg-[#F4C20D]
                  px-6
                  py-3.5
                  font-bold
                  text-[#081C3A]
                "
              >
                APLICA AHORA
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}