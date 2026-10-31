// Generated display-picture tiles per the design system: initials on an
// era-style gradient for ordinary contacts, and bespoke SVG scenes for the
// two special buddies. The tile sits in a status-coloured frame with a status
// dot badge, exactly like the WLM contact list.

import { Butterfly } from './Butterfly';
import { STATUS_COLORS, type Status } from '../types';

interface AvatarProps {
  id: string;
  name: string;
  seed: string;
  status: Status;
  size?: number;
}

function hashHue(seed: string): number {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) | 0;
  return Math.abs(h) % 360;
}

function initials(name: string): string {
  const words = name
    .replace(/[^a-zA-Z0-9 ]/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (words.length === 0) return '?';
  return words
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

function InitialsTile({ seed, name, size }: { seed: string; name: string; size: number }) {
  const hue = hashHue(seed);
  return (
    <div
      className="avatar__initials"
      style={{
        background: `linear-gradient(135deg, hsl(${hue},62%,55%), hsl(${(hue + 40) % 360},68%,45%))`,
        fontSize: Math.round(size * 0.4),
      }}
    >
      <span>{initials(name)}</span>
    </div>
  );
}

// A friendly googly-eyed paperclip — our redrawn Clippy (not a Microsoft asset).
function Clippy() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 48 48" aria-hidden>
      <path
        d="M16 9 v30 a7 7 0 0 0 14 0 v-22 a4 4 0 0 1 8 0 v22 a7 7 0 0 1 -14 0"
        fill="none"
        stroke="#b7b7b7"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <ellipse cx="22" cy="15" rx="3.4" ry="3.8" fill="#fff" stroke="#7f8a98" strokeWidth="1" />
      <circle cx="22.6" cy="15.4" r="1.5" fill="#1f2a37" />
    </svg>
  );
}

export function Avatar({ id, name, seed, status, size = 32 }: AvatarProps) {
  const color = STATUS_COLORS[status];
  return (
    <div className="avatar" style={{ width: size, height: size }}>
      <div className="avatar__frame" style={{ borderColor: color }}>
        <div className="avatar__tile">
          {id === 'flutter' ? (
            <Butterfly size={size} animate={false} />
          ) : id === 'clippy' ? (
            <Clippy />
          ) : (
            <InitialsTile seed={seed} name={name} size={size} />
          )}
        </div>
      </div>
      <span className="avatar__dot" style={{ background: color }} />
    </div>
  );
}
