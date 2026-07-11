import {
  BusFront,
  FileCheck2,
  Handshake,
  HeartHandshake,
} from "lucide-react";

const requisitos = [
  {
    icono: BusFront,
    titulo: "Experiencia",
    descripcion: "Experiencia comprobable en autobús de pasajeros.",
  },
  {
    icono: FileCheck2,
    titulo: "Documentación en regla",
    descripcion: "Contar con la documentación necesaria para contratación.",
  },
  {
    icono: Handshake,
    titulo: "Compromiso y responsabilidad",
    descripcion: "Cumplimiento, puntualidad y cuidado de la unidad.",
  },
  {
    icono: HeartHandshake,
    titulo: "Actitud de servicio",
    descripcion: "Trato amable, respetuoso y profesional al pasajero.",
  },
];

export default function Requirements() {
  return (
    <section
      id="requisitos"
      className="
        relative
        overflow-hidden
        bg-[#081C3A]
        px-6
        py-20
        text-white
        md:px-10
      "
    >
      {/* Decoración de fondo */}
      <div
        className="
          absolute
          -left-24
          top-12
          h-72
          w-72
          rounded-full
          bg-[#F4C20D]/10
          blur-3xl
        "
      />

      <div
        className="
          absolute
          -right-28
          bottom-0
          h-80
          w-80
          rounded-full
          bg-white/5
          blur-3xl
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Encabezado */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold tracking-[0.22em] text-[#F4C20D]">
            REQUISITOS
          </p>

          <h2 className="text-3xl font-extrabold md:text-5xl">
            Buscamos operadores con experiencia y vocación de servicio
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-300 md:text-lg">
            Estos son los requisitos principales para formar parte del proceso
            de selección.
          </p>
        </div>

        {/* Requisitos */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {requisitos.map((requisito, index) => {
            const Icono = requisito.icono;

            return (
              <article
                key={requisito.titulo}
                className="
                  group
                  relative
                  flex
                  items-start
                  gap-5
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-7
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#F4C20D]/60
                  hover:bg-white/10
                "
              >
                {/* Número decorativo */}
                <span
                  className="
                    absolute
                    right-5
                    top-2
                    text-6xl
                    font-extrabold
                    text-white/5
                  "
                >
                  0{index + 1}
                </span>

                {/* Icono */}
                <div
                  className="
                    relative
                    z-10
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#F4C20D]
                    text-[#081C3A]
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                >
                  <Icono size={30} strokeWidth={2} />
                </div>

                {/* Texto */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold">
                    {requisito.titulo}
                  </h3>

                  <p className="mt-2 leading-7 text-gray-300">
                    {requisito.descripcion}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}