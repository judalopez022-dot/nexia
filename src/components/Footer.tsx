import Image from "next/image";
import { MapPin, MessageCircle, Phone } from "lucide-react";

const whatsappUrl =
  "https://wa.me/525573439713?text=Hola%20Arturo,%20me%20interesa%20la%20vacante%20de%20operador";

export default function Footer() {
  return (
    <footer className="bg-[#06152D] px-6 py-10 text-white md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Marca */}
          <div>
            <Image
              src="/nexia-logo.png"
              alt="Logo de NEXIA"
              width={150}
              height={60}
              className="h-auto w-[150px] object-contain"
            />

            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-300">
              Reclutamiento especializado de operadores de autobús de
              pasajeros.
            </p>

            <p className="mt-3 font-bold text-[#F4C20D]">
              Conduce más. Gana más.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="text-lg font-bold">Navegación</h3>

            <nav className="mt-4 flex flex-col gap-2.5 text-sm text-gray-300">
              <a href="#inicio" className="transition hover:text-[#F4C20D]">
                Inicio
              </a>

              <a
                href="#beneficios"
                className="transition hover:text-[#F4C20D]"
              >
                Beneficios
              </a>

              <a href="#empresa" className="transition hover:text-[#F4C20D]">
                Trabajarás para
              </a>

              <a
                href="#requisitos"
                className="transition hover:text-[#F4C20D]"
              >
                Requisitos
              </a>

              <a href="#aplica" className="transition hover:text-[#F4C20D]">
                Aplica hoy
              </a>
            </nav>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-bold">Contacto</h3>

            <div className="mt-4 space-y-4">
              <div className="flex items-start gap-3">
                <Phone
                  size={20}
                  className="mt-0.5 shrink-0 text-[#F4C20D]"
                />

                <div>
                  <p className="text-xs text-gray-400">Teléfono</p>

                  <a
                    href="tel:+525573439713"
                    className="font-semibold transition hover:text-[#F4C20D]"
                  >
                    55 7343 9713
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin
                  size={20}
                  className="mt-0.5 shrink-0 text-[#F4C20D]"
                />

                <div>
                  <p className="text-xs text-gray-400">Ubicación</p>

                  <p className="font-semibold">
                    Cuautitlán Izcalli, Estado de México
                  </p>
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[#F4C20D]
                  px-5
                  py-2.5
                  text-sm
                  font-bold
                  text-[#081C3A]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#ffd52f]
                "
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div
          className="
            mt-10
            flex
            flex-col
            gap-3
            border-t
            border-white/10
            pt-6
            text-xs
            text-gray-400
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <p>
            © {new Date().getFullYear()} NEXIA. Todos los derechos reservados.
          </p>

          <p>Reclutamiento de operadores</p>
        </div>
      </div>
    </footer>
  );
}