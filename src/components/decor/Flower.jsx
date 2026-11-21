// A single flower drawn in SVG. `FlowerShape` is reusable inside bigger drawings.
export function FlowerShape({ petal = "#f4b6c2", center = "#e8b04a", petals = 6 }) {
  const angles = Array.from({ length: petals }, (_, i) => (360 / petals) * i);
  return (
    <g>
      {angles.map((a) => (
        <ellipse
          key={`p${a}`}
          cx="50"
          cy="27"
          rx="12"
          ry="22"
          transform={`rotate(${a} 50 50)`}
          fill={petal}
          stroke="rgba(0,0,0,0.08)"
          strokeWidth="1"
        />
      ))}
      {angles.map((a) => (
        <ellipse
          key={`i${a}`}
          cx="50"
          cy="33"
          rx="5"
          ry="12"
          transform={`rotate(${a + 180 / petals} 50 50)`}
          fill="#ffffff"
          fillOpacity="0.28"
        />
      ))}
      <circle cx="50" cy="50" r="9" fill={center} />
      <circle cx="47" cy="47" r="3" fill="#ffffff" fillOpacity="0.5" />
    </g>
  );
}

export default function Flower(props) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" focusable="false">
      <FlowerShape {...props} />
    </svg>
  );
}