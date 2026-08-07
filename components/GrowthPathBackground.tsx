export default function GrowthPathBackground() {
  return (
    <svg
      viewBox="0 0 1200 700"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.55]"
    >
      <path
        d="M -50 620 C 150 520, 220 700, 420 560 S 700 380, 860 460 S 1150 300, 1260 180"
        fill="none"
        stroke="var(--color-brand-200)"
        strokeWidth="3"
        strokeDasharray="1 14"
        strokeLinecap="round"
      />
      <circle cx="150" cy="590" r="6" fill="var(--color-marigold-300)" />
      <circle cx="420" cy="560" r="8" fill="var(--color-brand-200)" />
      <circle cx="860" cy="460" r="6" fill="var(--color-indigo-200)" />
      <circle cx="1150" cy="300" r="9" fill="var(--color-marigold-300)" />
    </svg>
  );
}
