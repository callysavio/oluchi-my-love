// A butterfly whose wings flap through CSS (.wing-l / .wing-r in garden.css).
export default function Butterfly({ a = "#f59e42", b = "#f7d774" }) {
  const wing = (
    <>
      <path d="M50 38 C32 4 3 8 8 31 C11 46 35 47 50 40 Z" fill={a} />
      <path d="M50 42 C35 47 14 52 21 68 C27 78 45 66 50 47 Z" fill={b} />
      <circle cx="22" cy="24" r="5" fill="#fff" fillOpacity="0.6" />
      <circle cx="28" cy="60" r="3.5" fill="#fff" fillOpacity="0.55" />
    </>
  );

  return (
    <svg viewBox="0 0 100 80" aria-hidden="true" focusable="false">
      <g className="wing-l">{wing}</g>
      <g className="wing-r">
        <g transform="translate(100 0) scale(-1 1)">{wing}</g>
      </g>
      <ellipse cx="50" cy="42" rx="2.6" ry="14" fill="#4a2c3a" />
      <path
        d="M49 29 C46 20 42 16 38 14 M51 29 C54 20 58 16 62 14"
        stroke="#4a2c3a"
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}