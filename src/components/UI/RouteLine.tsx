export default function RouteLine() {
  return (
    <div className="relative h-24 w-full overflow-hidden bg-white">
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <path
          d="
            M 0 35
            H 420
            C 500 35, 500 95, 600 95
            H 840
            C 940 95, 940 35, 1020 35
            H 1440
          "
          fill="none"
          stroke="#F4C20D"
          strokeWidth="6"
          strokeLinecap="round"
        />

        <circle cx="420" cy="35" r="7" fill="#F4C20D" />
        <circle cx="1020" cy="35" r="7" fill="#F4C20D" />
      </svg>
    </div>
  );
}