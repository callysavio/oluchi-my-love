import { FlowerShape } from "./Flower";

// Places a FlowerShape so its centre lands on (cx, cy) at scale s.
const place = (cx, cy, s) => `translate(${cx - 50 * s} ${cy - 50 * s}) scale(${s})`;

const TONES = {
  light: {
    stem: "#6f9c7e",
    leaf: "#8fb89a",
    blooms: [
      { petal: "#f4b6c2", center: "#e8b04a", petals: 6 },
      { petal: "#ee7f72", center: "#fbe3a0", petals: 5 },
      { petal: "#b9a3e3", center: "#fff1c1", petals: 6 },
      { petal: "#f7d774", center: "#c0662f", petals: 8 },
    ],
  },
  // For dark (wine) backgrounds
  dark: {
    stem: "#a9c9b2",
    leaf: "#c5dccb",
    blooms: [
      { petal: "#f9d3da", center: "#e8b04a", petals: 6 },
      { petal: "#f7d774", center: "#c0662f", petals: 8 },
      { petal: "#e5d8fb", center: "#fff1c1", petals: 6 },
      { petal: "#ffffff", center: "#e8b04a", petals: 7 },
    ],
  },
};

const LEAVES = [
  [60, 28, 30],
  [110, 62, 50],
  [140, 115, 70],
  [24, 70, -20],
  [46, 125, 20],
  [62, 160, 35],
];

/** position: "tl" | "tr" | "bl" | "br"   tone: "light" | "dark" */
export default function FlowerCorner({ position = "tl", tone = "light" }) {
  const t = TONES[tone] ?? TONES.light;

  return (
    <div className={`flower-corner flower-${position}`} aria-hidden="true">
      <svg viewBox="0 0 240 240" focusable="false">
        <g fill="none" stroke={t.stem} strokeWidth="2.4" strokeLinecap="round">
          <path d="M0 8 C70 14 130 70 170 170" />
          <path d="M8 0 C20 70 50 130 80 190" />
          <path d="M0 70 C40 80 80 100 110 120" />
        </g>

        {LEAVES.map(([x, y, r]) => (
          <ellipse key={`${x}-${y}`} rx="7" ry="15" transform={`translate(${x} ${y}) rotate(${r})`} fill={t.leaf} />
        ))}

        <g transform={place(170, 170, 0.6)}><FlowerShape {...t.blooms[0]} /></g>
        <g transform={place(80, 190, 0.5)}><FlowerShape {...t.blooms[1]} /></g>
        <g transform={place(110, 120, 0.42)}><FlowerShape {...t.blooms[2]} /></g>
        <g transform={place(40, 40, 0.32)}><FlowerShape {...t.blooms[3]} /></g>
      </svg>
    </div>
  );
}