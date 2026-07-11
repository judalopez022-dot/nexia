import {
  BadgeCheck,
  Banknote,
  CalendarClock,
  FileCheck2,
} from "lucide-react";

const mostrarSalario = false;

const salario = "$00,000";

const datos = [
  {
    icono: Banknote,
    titulo: salario,
    descripcion: "Ingreso mensual",
  },
  {
    icono: FileCheck2,
    titulo: "Prestaciones de ley",
    descripcion: "Beneficios correspondientes",
  },
  {
    icono: CalendarClock,
    titulo: "Horarios disponibles",
    descripcion: "Fijos y flexibles",
  },
  {
    icono: BadgeCheck,
    titulo: "Contratación inmediata",
    descripcion: "Vacantes disponibles",
  },
];

export default function SalaryHighlight() {
  if (!mostrarSalario) {
    return null;
  }

  return (
    <section
      aria-label="Información destacada de la vacante"
      className="
        relative
        overflow-hidden
        bg-white
        px-6
        py-10
        md:px-10
      "
    >
      <div
        className="
          absolute
          -left-20
          top-0
          h-56
          w-56
          rounded-full
          bg-[#F4C20D]/10
          blur-3xl
        "
      />

      <div
        className="
          absolute
          -right-20
          bottom-0
          h-56
          w-56
          rounded-full
          bg-[#081C3A]/5
          blur-3xl
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          max-w-7xl
          gap-4
          sm:grid-cols-2
          lg:grid-cols-4
        "
      >
        {datos.map((dato) => {
          const Icono = dato.icono;

          return (
            <article
              key={dato.titulo}
              className="
                flex
                items-center
                gap-4
                rounded-2xl
                border
                border-gray-100
                bg-[#F8FAFC]
                p-5
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#F4C20D]
                hover:bg-white
                hover:shadow-lg
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#081C3A]
                  text-[#F4C20D]
                "
              >
                <Icono size={25} strokeWidth={2} />
              </div>

              <div>
                <h3 className="font-extrabold text-[#081C3A]">
                  {dato.titulo}
                </h3>

                <p className="mt-1 text-sm text-gray-600">
                  {dato.descripcion}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}