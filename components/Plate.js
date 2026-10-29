// Abstract architectural drawing used in place of photography until real images are added.
export default function Plate({ seed = 1 }) {
  const bars = Array.from({ length: 7 }, (_, i) => ({ x: 18 + i * 40, h: 30 + ((seed * 37 + i * 53) % 55) }));
  return (
    <svg viewBox="0 0 300 200" className="plate" aria-hidden="true" preserveAspectRatio="xMidYMax slice">
      <line x1="0" y1="170" x2="300" y2="170" />
      {bars.map((b, i) => (
        <g key={i}>
          <rect x={b.x} y={170 - b.h * 1.6} width="28" height={b.h * 1.6} />
          {Array.from({ length: Math.floor(b.h / 14) }, (_, r) => (
            <line key={r} x1={b.x + 5} x2={b.x + 23} y1={170 - b.h * 1.6 + 12 + r * 14} y2={170 - b.h * 1.6 + 12 + r * 14} />
          ))}
        </g>
      ))}
    </svg>
  );
}
