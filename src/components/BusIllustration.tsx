export default function BusIllustration() {
  return (
    <svg
      viewBox="0 0 800 600"
      className="h-full w-full"
      role="img"
      aria-label="Ilustración de autobús urbano"
    >
      {/* Líneas de movimiento */}
      <path
        d="M70 430 C180 390 250 390 340 420"
        fill="none"
        stroke="#F4C20D"
        strokeWidth="10"
        strokeLinecap="round"
      />

      <path
        d="M80 470 C190 430 270 440 350 470"
        fill="none"
        stroke="#F4C20D"
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.55"
      />

      {/* Sombra */}
      <ellipse
        cx="470"
        cy="500"
        rx="260"
        ry="28"
        fill="#081C3A"
        opacity="0.16"
      />

      {/* Cuerpo del autobús */}
      <path
        d="
          M190 215
          C205 165 260 130 330 120
          H585
          C650 120 705 165 720 230
          V420
          C720 455 695 480 660 480
          H245
          C210 480 185 455 185 420
          V260
          C185 245 187 228 190 215
        "
        fill="#F4C20D"
        stroke="#081C3A"
        strokeWidth="8"
        strokeLinejoin="round"
      />

      {/* Ventanas */}
      <path
        d="
          M235 205
          C255 165 295 145 345 140
          H575
          C625 140 662 168 680 215
          V285
          H225
          V240
          C225 225 228 215 235 205
        "
        fill="#0D2A52"
      />

      {/* Reflejo en ventanas */}
      <path
        d="M290 155 L420 155 L360 275 L245 275 Z"
        fill="#FFFFFF"
        opacity="0.08"
      />

      {/* Frente del autobús */}
      <path
        d="
          M590 145
          C645 150 685 180 700 230
          V365
          H575
          V150
          Z
        "
        fill="#FFFFFF"
        opacity="0.18"
      />

      {/* Franja verde */}
      <path
        d="
          M190 350
          C310 330 420 340 535 365
          C600 380 655 380 720 360
          V405
          C650 425 585 425 520 410
          C390 380 295 380 190 400
          Z
        "
        fill="#1D8A55"
      />

      {/* Puerta */}
      <rect
        x="500"
        y="290"
        width="70"
        height="155"
        rx="8"
        fill="#0D2A52"
        stroke="#FFFFFF"
        strokeWidth="5"
      />

      <line
        x1="535"
        y1="292"
        x2="535"
        y2="443"
        stroke="#FFFFFF"
        strokeWidth="4"
      />

      {/* Faros */}
      <rect
        x="640"
        y="370"
        width="50"
        height="24"
        rx="12"
        fill="#FFFFFF"
        stroke="#081C3A"
        strokeWidth="5"
      />

      {/* Defensa frontal */}
      <path
        d="M600 425 H690"
        stroke="#081C3A"
        strokeWidth="7"
        strokeLinecap="round"
      />

      {/* Rueda trasera */}
      <circle cx="300" cy="465" r="58" fill="#081C3A" />
      <circle cx="300" cy="465" r="30" fill="#9AA7B8" />
      <circle cx="300" cy="465" r="13" fill="#081C3A" />

      {/* Rueda delantera */}
      <circle cx="620" cy="465" r="58" fill="#081C3A" />
      <circle cx="620" cy="465" r="30" fill="#9AA7B8" />
      <circle cx="620" cy="465" r="13" fill="#081C3A" />

      {/* Espejo */}
      <path
        d="M705 235 H748 V290"
        fill="none"
        stroke="#081C3A"
        strokeWidth="9"
        strokeLinecap="round"
      />

      <rect
        x="734"
        y="278"
        width="25"
        height="46"
        rx="10"
        fill="#081C3A"
      />

      {/* Luces superiores */}
      <circle cx="630" cy="165" r="7" fill="#F4C20D" />
      <circle cx="665" cy="180" r="7" fill="#F4C20D" />
    </svg>
  );
}