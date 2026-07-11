import {
  BadgeCheck,
  Bus,
  MapPin,
  Navigation,
  ShieldCheck,
} from "lucide-react";

const directionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=19.6438599,-99.243081";

const mapEmbedUrl =
  "https://www.google.com/maps?q=19.6438599,-99.243081&z=16&output=embed";

const datosEmpresa = [
  {
    icono: Bus,
    texto: "Transporte urbano",
  },
  {
    icono: MapPin,
    texto: "Cuautitlán Izcalli",
  },
  {
    icono: ShieldCheck,
    texto: "Empresa consolidada",
  },
  {
    icono: BadgeCheck,
    texto: "Contratación inmediata",
  },
];

export default function Company() {
  return (
    <section
      id="empresa"
      className="
        relative
        overflow-hidden
        bg-[#F8FAFC]
        px-6
        py-14
        md:px-10
        lg:py-16
      "
    >
      {/* Decoraciones de fondo */}
      <div
        className="
          absolute
          -left-24
          top-10
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
          bg-[#081C3A]/10
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
          items-center
          gap-10
          lg:grid-cols-[48%_52%]
        "
      >
        {/* Información de la empresa */}
        <div>
          <p
            className="
              mb-4
              text-xl
              font-extrabold
              tracking-[0.24em]
              text-[#F4C20D]
              md:text-2xl
            "
          >
            TRABAJARÁS PARA
          </p>

          <h2
            className="
              text-3xl
              font-extrabold
              leading-tight
              text-[#081C3A]
              md:text-5xl
            "
          >
            Autobuses México
            <br />
            Tlalnepantla y P.I.S.A.
          </h2>

          <p
            className="
              mt-4
              max-w-xl
              text-base
              leading-7
              text-gray-600
              md:text-lg
            "
          >
            Empresa dedicada al transporte urbano de pasajeros, con operación
            en el Estado de México y vacantes disponibles para operadores en
            Cuautitlán Izcalli.
          </p>

          {/* Etiquetas */}
          <div className="mt-6 flex flex-wrap gap-3">
            {datosEmpresa.map((dato) => {
              const Icono = dato.icono;

              return (
                <div
                  key={dato.texto}
                  className="
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-gray-200
                    bg-white
                    px-5
                    py-3
                    text-sm
                    font-semibold
                    text-[#081C3A]
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#F4C20D]
                    hover:shadow-md
                  "
                >
                  <Icono
                    size={20}
                    className="shrink-0 text-[#F4C20D]"
                  />

                  <span>{dato.texto}</span>
                </div>
              );
            })}
          </div>

          {/* Información de ubicación */}
          <div
            className="
              mt-7
              flex
              items-start
              gap-4
              rounded-3xl
              border
              border-gray-200
              bg-white
              p-5
              shadow-sm
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
                rounded-2xl
                bg-[#081C3A]
                text-[#F4C20D]
              "
            >
              <MapPin size={25} />
            </div>

            <div>
              <p className="font-bold text-[#081C3A]">
                Zona de trabajo
              </p>

              <p className="mt-1 leading-7 text-gray-600">
                Cuautitlán Izcalli, Estado de México
              </p>
            </div>
          </div>

          {/* Botón */}
          <div className="mt-6">
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                w-full
                items-center
                justify-center
                gap-3
                rounded-full
                bg-[#F4C20D]
                px-8
                py-4
                font-bold
                text-[#081C3A]
                shadow-lg
                shadow-yellow-500/20
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#ffd52f]
                sm:w-auto
              "
            >
              <Navigation size={21} />
              CÓMO LLEGAR
            </a>
          </div>
        </div>

        {/* Mapa */}
        <div className="flex justify-center lg:justify-end">
          <div
            className="
              relative
              w-full
              max-w-xl
              overflow-hidden
              rounded-[28px]
              bg-white
              p-3
              shadow-2xl
            "
          >
            {/* Línea amarilla superior */}
            <div
              className="
                absolute
                left-0
                top-0
                z-10
                h-2
                w-full
                bg-[#F4C20D]
              "
            />

            <iframe
              src={mapEmbedUrl}
              title="Ubicación de la vacante en Cuautitlán Izcalli"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="
                h-[320px]
                w-full
                rounded-[20px]
                border-0
                sm:h-[360px]
                md:h-[400px]
                lg:h-[430px]
              "
            />

            {/* Etiqueta sobre el mapa */}
            <div
              className="
                absolute
                bottom-7
                left-1/2
                flex
                -translate-x-1/2
                items-center
                gap-2
                whitespace-nowrap
                rounded-full
                bg-[#081C3A]
                px-5
                py-3
                text-sm
                font-semibold
                text-white
                shadow-xl
              "
            >
              <span className="h-2.5 w-2.5 rounded-full bg-[#F4C20D]" />
              Cuautitlán Izcalli
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}