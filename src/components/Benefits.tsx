import {
  CircleDollarSign,
  FileCheck2,
  Clock3,
  ShieldCheck,
} from "lucide-react";

const beneficios = [
  {
    icono: CircleDollarSign,
    titulo: "Sueldo competitivo",
    descripcion:
      "Recibe una compensación acorde con tu compromiso y responsabilidad.",
  },
  {
    icono: FileCheck2,
    titulo: "Prestaciones de ley",
    descripcion:
      "Accede a las prestaciones correspondientes desde tu contratación.",
  },
  {
    icono: Clock3,
    titulo: "Horarios fijos y flexibles",
    descripcion:
      "Opciones de horario pensadas para darte mayor organización.",
  },
  {
    icono: ShieldCheck,
    titulo: "Estabilidad laboral",
    descripcion:
      "Forma parte de una empresa con trayectoria en transporte de pasajeros.",
  },
];

export default function Benefits() {
  return (
    <section
      id="beneficios"
      className="
        relative
        overflow-hidden
        bg-white
        px-6
        py-20
        md:px-10
      "
    >
      {/* Decoración de fondo */}
      <div
        className="
          absolute
          -left-20
          bottom-10
          h-64
          w-64
          rounded-full
          bg-[#081C3A]/5
          blur-3xl
        "
      />

      <div
        className="
          absolute
          -right-20
          top-10
          h-64
          w-64
          rounded-full
          bg-[#F4C20D]/10
          blur-3xl
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Encabezado */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold tracking-[0.22em] text-[#F4C20D]">
            BENEFICIOS
          </p>

          <h2 className="text-3xl font-extrabold text-[#081C3A] md:text-5xl">
            ¿Qué ofrecemos?
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 md:text-lg">
            Condiciones pensadas para que desarrolles tu trabajo con seguridad,
            estabilidad y respaldo.
          </p>
        </div>

        {/* Tarjetas */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {beneficios.map((beneficio) => {
            const Icono = beneficio.icono;

            return (
              <article
                key={beneficio.titulo}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-gray-100
                  bg-[#F8FAFC]
                  p-7
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-[#F4C20D]
                  hover:bg-white
                  hover:shadow-xl
                "
              >
                {/* Decoración interna */}
                <div
                  className="
                    absolute
                    -right-12
                    -top-12
                    h-32
                    w-32
                    rounded-full
                    bg-[#F4C20D]/10
                    transition-transform
                    duration-300
                    group-hover:scale-125
                  "
                />

                <div className="relative z-10">
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#081C3A]
                      text-[#F4C20D]
                      shadow-md
                      transition-all
                      duration-300
                      group-hover:rotate-3
                      group-hover:scale-110
                    "
                  >
                    <Icono size={30} strokeWidth={2} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#081C3A]">
                    {beneficio.titulo}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {beneficio.descripcion}
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