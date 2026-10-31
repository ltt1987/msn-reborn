// The MSN butterfly mascot, redrawn from scratch (no MS assets) wearing her
// tiny witch hat for the Kiroween resurrection. Used both as Flutter's
// display picture and as the large sign-in mascot.

interface ButterflyProps {
  size?: number;
  animate?: boolean;
}

export function Butterfly({ size = 48, animate = true }: ButterflyProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={animate ? 'butterfly' : undefined}
      aria-hidden
    >
      <defs>
        <linearGradient id="bfw1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#5B9BD5" />
          <stop offset="1" stopColor="#2F6DB3" />
        </linearGradient>
        <linearGradient id="bfw2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8FDEEA" />
          <stop offset="1" stopColor="#3AA6CC" />
        </linearGradient>
      </defs>
      <g className="butterfly__left">
        <ellipse cx="16" cy="19" rx="10" ry="9" fill="url(#bfw1)" />
        <ellipse cx="17" cy="31" rx="6" ry="6" fill="url(#bfw2)" />
      </g>
      <g className="butterfly__right">
        <ellipse cx="32" cy="19" rx="10" ry="9" fill="url(#bfw2)" />
        <ellipse cx="31" cy="31" rx="6" ry="6" fill="url(#bfw1)" />
      </g>
      <rect x="23.3" y="13" width="1.6" height="24" rx="0.8" fill="#33414f" />
      {/* tiny witch hat */}
      <path d="M19.4 13.4 L24 3 L28.6 13.4 Z" fill="#3b2a5e" />
      <rect x="17.3" y="12.2" width="13.4" height="3" rx="1.5" fill="#2a1d44" />
    </svg>
  );
}
