type IconProps = { className?: string };
const base = "h-7 w-7";

export function IconSpeech({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className}>
      <path d="M4 5h16v10H9l-4 4V5Z" strokeLinejoin="round" />
      <path d="M8 9h8M8 12h5" strokeLinecap="round" />
    </svg>
  );
}

export function IconHands({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className}>
      <path d="M7 12V5.5a1.5 1.5 0 0 1 3 0V11" strokeLinecap="round" />
      <path d="M10 11V4a1.5 1.5 0 0 1 3 0v7" strokeLinecap="round" />
      <path d="M13 11V5a1.5 1.5 0 0 1 3 0v9" strokeLinecap="round" />
      <path d="M16 10a1.5 1.5 0 0 1 3 0v4c0 3.3-2.7 6-6 6h-1c-2.5 0-3.8-.9-5-2.3L4 14" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconRun({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className}>
      <circle cx="14.5" cy="4.5" r="1.6" />
      <path d="M13 8l-4 3 2 3-2 6M13 8l4 1 2 5M9 11l-4 1M15 12l3 2 2-1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconPuzzle({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className}>
      <path d="M5 8h3.2a1.6 1.6 0 1 1 0 2.2V13H5v-3a1.5 1.5 0 1 0 0-2Z" strokeLinejoin="round" />
      <path d="M8.2 8H14v3a1.5 1.5 0 1 1 0 3v3H8v-3.2a1.6 1.6 0 1 0 0-2.2V8Z" strokeLinejoin="round" />
      <path d="M14 8h5v5h-3.2" strokeLinejoin="round" />
    </svg>
  );
}

export function IconBook({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className}>
      <path d="M4 5.5S6 4 9.5 4 15 5.5 15 5.5v14S13 18 9.5 18 4 19.5 4 19.5v-14Z" strokeLinejoin="round" />
      <path d="M20 5.5S18 4 14.5 4c-1.3 0-2.4.2-3.3.5M20 19.5S18 18 14.5 18c-1.3 0-2.4.2-3.3.5" strokeLinejoin="round" />
    </svg>
  );
}

export function IconHeartHead({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className}>
      <path d="M12 20s-6.5-4.2-6.5-9A4 4 0 0 1 12 8a4 4 0 0 1 6.5 3c0 4.8-6.5 9-6.5 9Z" strokeLinejoin="round" />
      <path d="M12 8v3M10.5 9.5h3" strokeLinecap="round" />
    </svg>
  );
}

export function IconGrowth({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className}>
      <path d="M4 20 C 8 20, 8 14, 12 14 S 16 8, 20 8" strokeLinecap="round" />
      <path d="M16 8h4v4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconClipboard({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className}>
      <rect x="5" y="4.5" width="14" height="16" rx="2" />
      <path d="M9 4.5V4a2 2 0 0 1 4 0v.5M9 11h6M9 14.5h6M9 18h3.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconClock({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className}>
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 15 13" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconCalendar({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className}>
      <rect x="3" y="4" width="18" height="17" rx="2" strokeLinejoin="round" />
      <line x1="16" y1="2" x2="16" y2="6" strokeLinecap="round" />
      <line x1="8" y1="2" x2="8" y2="6" strokeLinecap="round" />
      <line x1="3" y1="10" x2="21" y2="10" strokeLinecap="round" />
    </svg>
  );
}
