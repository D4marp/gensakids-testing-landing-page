export default function DotGrid({
  className = "",
  color = "var(--color-marigold-500)",
  rows = 3,
  cols = 4,
}: {
  className?: string;
  color?: string;
  rows?: number;
  cols?: number;
}) {
  const gap = 16;
  const w = (cols - 1) * gap + 8;
  const h = (rows - 1) * gap + 8;
  const dots = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dots.push(
        <circle key={`${r}-${c}`} cx={4 + c * gap} cy={4 + r * gap} r="3.5" fill={color} />
      );
    }
  }
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      width={w}
      height={h}
      aria-hidden="true"
      className={className}
    >
      {dots}
    </svg>
  );
}
