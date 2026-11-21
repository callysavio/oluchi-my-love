import Flower from "./Flower";
import Butterfly from "./Butterfly";

// Two flowers and two butterflies only. Slow, small and soft, so they never pull attention
// away from Rita's photographs or the text.
const FLOWERS = [
  {
    id: "flower-1",
    look: { petal: "#f4b6c2", center: "#e8b04a", petals: 6 }, // blush
    style: { "--x": "16%", "--size": "26px", "--dur": "38s", "--delay": "-6s", "--sway": "5vw" },
  },
  {
    id: "flower-2",
    look: { petal: "#b9a3e3", center: "#fff1c1", petals: 6 }, // lavender
    style: { "--x": "80%", "--size": "22px", "--dur": "46s", "--delay": "-24s", "--sway": "-5vw" },
  },
];

const BUTTERFLIES = [
  {
    id: "butterfly-1",
    look: { a: "#f59e42", b: "#f7d774" }, // amber
    style: { "--y0": "26vh", "--size": "30px", "--dur": "52s", "--delay": "-10s", "--flap": "0.5s", "--dir": "normal" },
  },
  {
    id: "butterfly-2",
    look: { a: "#8a6fd1", b: "#c7b3f2" }, // violet
    style: { "--y0": "58vh", "--size": "28px", "--dur": "60s", "--delay": "-36s", "--flap": "0.55s", "--dir": "reverse" },
  },
];

/**
 * variant="page"    -> fixed layer over the whole site (+ a soft coloured glow behind it)
 * variant="welcome" -> the same two flowers and two butterflies on the welcome screen
 */
export default function FloatingGarden({ variant = "page" }) {
  const isWelcome = variant === "welcome";

  return (
    <>
      {!isWelcome && <div className="page-glow" aria-hidden="true" />}
      <div className={isWelcome ? "garden garden-welcome" : "garden"} aria-hidden="true">
        {FLOWERS.map((f) => (
          <span key={f.id} className="petal" style={f.style}>
            <Flower {...f.look} />
          </span>
        ))}
        {BUTTERFLIES.map((b) => (
          <span key={b.id} className="butterfly" style={b.style}>
            <Butterfly {...b.look} />
          </span>
        ))}
      </div>
    </>
  );
}