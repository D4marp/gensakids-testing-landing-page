export default function Squiggle({ color = "var(--color-marigold-500)" }: { color?: string }) {
  return (
    <svg viewBox="0 0 200 20" preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M2 12 C 30 2, 50 18, 80 10 S 130 2, 160 10 S 190 16, 198 8"
        fill="none"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}
