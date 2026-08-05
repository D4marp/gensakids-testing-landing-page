export default function BlockAccent({
  className = "",
  color = "var(--color-sky-500)",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 60 60"
      width="60"
      height="60"
      aria-hidden="true"
      className={className}
    >
      <path d="M0 20 H24 V60 H0 Z" fill={color} />
    </svg>
  );
}
