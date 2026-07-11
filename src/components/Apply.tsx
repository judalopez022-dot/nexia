"use client";

import { FormEvent, useState } from "react";
import {
  CheckCircle2,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  UserRound,
} from "lucide-react";

const inputClassName = `
  w-full
  rounded-xl
  border
  border-white/10
  bg-white
  px-4
  py-2.5
  text-sm
  text-[#081C3A]
  outline-none
  transition
  placeholder:text-gray-400
  focus:border-[#F4C20D]
  focus:ring-2
  focus:ring-[#F4C20D]/30
`;

const whatsappDirecto =
  "https://wa.me/525573439713?text=Hola%20Arturo,%20me%20interesa%20la%20vacante%20de%20operador";

export default function Apply() {
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setEnviado(false);

    const form = new FormData(event.currentTarget);

    const nombre = String(form.get("nombre") || "").trim();
    const edad = String(form.get("edad") || "").trim();
    const telefono = String(form.get("telefono") || "").replace(/\D/g, "");
    const municipio = String(form.get("municipio") || "").trim();
    const experiencia = String(form.get("experiencia") || "").trim();
    const comentarios = String(form.get("comentarios") || "").trim();

    if (!nombre || !edad || !telefono || !municipio || !experiencia) {
      setError("Completa todos los campos obligatorios.");
      return;
    }

    if (telefono.length !== 10) {
      setError("El teléfono debe contener exactamente 10 dígitos.");
      return;
    }

    if (Number(edad) < 18) {
      setError("La edad mínima para aplicar es de 18 años.");
      return;
    }

    const mensaje = `
Hola Arturo, me interesa la vacante de operador.

Nombre: ${nombre}
Edad: ${edad}
Teléfono: ${telefono}
Municipio: ${municipio}
Experiencia: ${experiencia}
Comentarios: ${comentarios || "Sin comentarios"}
    `.trim();

    const whatsappUrl = `https://wa.me/525573439713?text=${encodeURIComponent(
      mensaje
    )}`;

    setEnviado(true);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <section
      id="aplica"
      className="
        relative
        overflow-hidden
        bg-[#081C3A]
        px-6
        py-10
        text-white
        md:px-10
        lg:py-12
      "
    >
      {/* Decoraciones */}
      <div
        className="
          absolute
          -left-24
          top-0
          h-64
          w-64
          rounded-full
          bg-[#F4C20D]/10
          blur-3xl
        "
      />

      <div
        className="
          absolute
          -right-24
          bottom-0
          h-64
          w-64
          rounded-full
          bg-white/5
          blur-3xl
        "
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Encabezado */}
        <div className="text-center">
          <p className="mb-2 text-sm font-bold tracking-[0.22em] text-[#F4C20D]">
            APLICA HOY
          </p>

          <h2 className="text-3xl font-extrabold md:text-4xl">
            Da el siguiente paso
          </h2>

          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-gray-300 md:text-base">
            Completa tus datos y la información se enviará directamente por
            WhatsApp a nuestro equipo de reclutamiento.
          </p>
        </div>

        {/* Mensajes */}
        {error && (
          <div
            role="alert"
            aria-live="polite"
            className="
              mx-auto
              mt-4
              max-w-3xl
              rounded-xl
              border
              border-red-400/30
              bg-red-400/10
              px-4
              py-3
              text-sm
              text-red-200
            "
          >
            {error}
          </div>
        )}

        {enviado && (
          <div
            aria-live="polite"
            className="
              mx-auto
              mt-4
              flex
              max-w-3xl
              items-start
              gap-3
              rounded-xl
              border
              border-green-400/30
              bg-green-400/10
              px-4
              py-3
              text-sm
              text-green-200
            "
          >
            <CheckCircle2 className="mt-0.5 shrink-0" size={20} />

            <p>
              Tu información está lista. Se abrió WhatsApp para completar el
              envío.
            </p>
          </div>
        )}

        {/* Formulario + contacto */}
        <div
          className="
            mt-6
            grid
            items-start
            gap-6
            lg:grid-cols-[68%_32%]
          "
        >
          {/* Formulario */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="
              grid
              gap-3
              rounded-[24px]
              border
              border-white/10
              bg-white/5
              p-5
              backdrop-blur-sm
              md:grid-cols-2
            "
          >
            {/* Nombre */}
            <div className="md:col-span-2">
              <label
                htmlFor="nombre"
                className="mb-1.5 block text-xs font-semibold text-gray-200"
              >
                Nombre completo
              </label>

              <input
                id="nombre"
                name="nombre"
                type="text"
                autoComplete="name"
                required
                placeholder="Escribe tu nombre"
                className={inputClassName}
              />
            </div>

            {/* Edad */}
            <div>
              <label
                htmlFor="edad"
                className="mb-1.5 block text-xs font-semibold text-gray-200"
              >
                Edad
              </label>

              <input
                id="edad"
                name="edad"
                type="number"
                min="18"
                max="75"
                required
                placeholder="Ej. 35"
                className={inputClassName}
              />
            </div>

            {/* Teléfono */}
            <div>
              <label
                htmlFor="telefono"
                className="mb-1.5 block text-xs font-semibold text-gray-200"
              >
                Teléfono
              </label>

              <input
                id="telefono"
                name="telefono"
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                maxLength={10}
                required
                placeholder="10 dígitos"
                className={inputClassName}
              />
            </div>

            {/* Municipio */}
            <div>
              <label
                htmlFor="municipio"
                className="mb-1.5 block text-xs font-semibold text-gray-200"
              >
                Municipio
              </label>

              <input
                id="municipio"
                name="municipio"
                type="text"
                autoComplete="address-level2"
                required
                placeholder="Dónde vives"
                className={inputClassName}
              />
            </div>

            {/* Experiencia */}
            <div>
              <label
                htmlFor="experiencia"
                className="mb-1.5 block text-xs font-semibold text-gray-200"
              >
                Experiencia
              </label>

              <select
                id="experiencia"
                name="experiencia"
                required
                defaultValue=""
                className={inputClassName}
              >
                <option value="" disabled>
                  Selecciona una opción
                </option>

                <option value="Sin experiencia">Sin experiencia</option>
                <option value="1 a 2 años">1 a 2 años</option>
                <option value="3 a 5 años">3 a 5 años</option>
                <option value="Más de 5 años">Más de 5 años</option>
              </select>
            </div>

            {/* Comentarios */}
            <div className="md:col-span-2">
              <label
                htmlFor="comentarios"
                className="mb-1.5 block text-xs font-semibold text-gray-200"
              >
                Comentarios (opcional)
              </label>

              <textarea
                id="comentarios"
                name="comentarios"
                rows={2}
                placeholder="Cuéntanos brevemente sobre tu experiencia"
                className={`${inputClassName} resize-none`}
              />
            </div>

            {/* Botón */}
            <button
              type="submit"
              className="
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-full
                bg-[#F4C20D]
                px-8
                py-3
                font-bold
                text-[#081C3A]
                shadow-lg
                shadow-yellow-500/20
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#ffd52f]
                focus:outline-none
                focus:ring-4
                focus:ring-[#F4C20D]/30
                md:col-span-2
              "
            >
              <Send size={20} />
              APLICAR AHORA
            </button>
          </form>

          {/* Reclutador */}
          <aside
            className="
              rounded-[24px]
              bg-white
              p-6
              text-[#081C3A]
              shadow-2xl
            "
          >
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
              "
            >
              <UserRound size={28} />
            </div>

            <p className="mt-5 text-xs font-bold tracking-[0.18em] text-[#F4C20D]">
              CONTACTO DIRECTO
            </p>

            <h3 className="mt-2 text-2xl font-extrabold">
              Arturo Montes de Oca
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Responsable de reclutamiento de operadores.
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <Phone
                  size={21}
                  className="mt-0.5 shrink-0 text-[#F4C20D]"
                />

                <div>
                  <p className="text-xs text-gray-500">
                    Teléfono y WhatsApp
                  </p>

                  <a
                    href="tel:+525573439713"
                    className="font-bold transition hover:text-[#F4C20D]"
                  >
                    55 7343 9713
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin
                  size={21}
                  className="mt-0.5 shrink-0 text-[#F4C20D]"
                />

                <div>
                  <p className="text-xs text-gray-500">
                    Zona de trabajo
                  </p>

                  <p className="font-bold">
                    Cuautitlán Izcalli
                  </p>
                </div>
              </div>
            </div>

            <a
              href={whatsappDirecto}
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-6
                inline-flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                border-2
                border-[#081C3A]
                px-5
                py-3
                text-sm
                font-bold
                transition-all
                duration-300
                hover:bg-[#081C3A]
                hover:text-white
              "
            >
              <MessageCircle size={19} />
              ESCRIBIR POR WHATSAPP
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}