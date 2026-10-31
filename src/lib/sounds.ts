// Synthesized WebAudio sounds — never sampled, never an MS asset (per product
// steering). The mute flag is persisted and mirrored by the app via setMuted,
// so every sound checks the module-level `muted` before producing audio.

import { STORAGE_KEYS, getItem, setItem } from './storage';

type WebkitWindow = Window & typeof globalThis & {
  webkitAudioContext?: typeof AudioContext;
};

let ctx: AudioContext | null = null;
let muted = getItem<boolean>(STORAGE_KEYS.muted, false);

function getCtx(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  try {
    if (!ctx) {
      const AC = window.AudioContext || (window as WebkitWindow).webkitAudioContext;
      if (!AC) return null;
      ctx = new AC();
    }
    // Browsers start AudioContexts suspended until a user gesture.
    if (ctx.state === 'suspended') void ctx.resume();
    return ctx;
  } catch {
    return null;
  }
}

/** Mirror the persisted mute flag into the sound engine. */
export function setMuted(value: boolean): void {
  muted = value;
  setItem(STORAGE_KEYS.muted, value);
}

export function isMuted(): boolean {
  return muted;
}

/** Play a single oscillator note with a soft attack/decay envelope. */
function tone(
  freq: number,
  startOffset: number,
  duration: number,
  type: OscillatorType = 'sine',
  gain = 0.15,
): void {
  const c = getCtx();
  if (!c || muted) return;
  const osc = c.createOscillator();
  const env = c.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  const t = c.currentTime + startOffset;
  env.gain.setValueAtTime(0.0001, t);
  env.gain.linearRampToValueAtTime(gain, t + 0.012);
  env.gain.exponentialRampToValueAtTime(0.0001, t + duration);
  osc.connect(env).connect(c.destination);
  osc.start(t);
  osc.stop(t + duration + 0.05);
}

export const sounds = {
  /** Two-note rising chime played on sign-in. */
  signIn(): void {
    tone(659.25, 0, 0.18, 'sine', 0.14); // E5
    tone(987.77, 0.12, 0.3, 'sine', 0.14); // B5
  },
  /** New-message blip. */
  messageBlip(): void {
    tone(880, 0, 0.1, 'square', 0.07); // A5
    tone(1174.66, 0.05, 0.1, 'square', 0.05); // D6
  },
  /** Nudge buzz. */
  nudge(): void {
    tone(120, 0, 0.08, 'sawtooth', 0.12);
    tone(120, 0.1, 0.08, 'sawtooth', 0.12);
  },
};
