export default function ZigzagAccent({
  className = "",
  color = "var(--color-brand-500)",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 120 32"
      width="120"
      height="32"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M2 24 L 22 8 L 42 24 L 62 8 L 82 24 L 102 8 L 118 22"
        stroke={color}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
