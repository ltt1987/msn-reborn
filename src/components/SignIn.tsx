// Windows Live-style sign-in card. Email is prefilled and editable but
// unused (the resurrection is ceremonial — no password). On submit we play
// the sign-in chime, show a brief "Signing in…" state, then notify the
// parent after 900ms. The butterfly mascot (with her witch hat) presides,
// and one faint pumpkin lurks in the corner for Kiroween.

import { useState, type FormEvent } from 'react';
import { Butterfly } from './Butterfly';
import { sounds } from '../lib/sounds';

interface SignInProps {
  onSignIn: () => void;
}

const SIGNING_IN_MS = 900;

export function SignIn({ onSignIn }: SignInProps) {
  const [email, setEmail] = useState('you@msnreborn.app');
  const [signingIn, setSigningIn] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (signingIn) return;
    setSigningIn(true);
    sounds.signIn();
    window.setTimeout(onSignIn, SIGNING_IN_MS);
  }

  return (
    <div className="signin-screen">
      <div className="window-card signin-card">
        <div className="titlebar">
          <span className="title-text">MSN Reborn</span>
          <div className="window-glyphs" aria-hidden>
            <span className="glyph glyph--min" />
            <span className="glyph glyph--max" />
            <span className="glyph glyph--close" />
          </div>
        </div>
        <form className="signin-body" onSubmit={handleSubmit}>
          <Butterfly size={84} />
          <h1 className="signin-title">Sign in</h1>
          <p className="signin-sub">to Windows Live™ Messenger Reborn</p>

          <label className="signin-field-label" htmlFor="signin-email">Email address</label>
          <input
            id="signin-email"
            className="signin-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            spellCheck={false}
            autoComplete="username"
          />

          <button className="signin-button" type="submit" disabled={signingIn}>
            {signingIn ? 'Signing in…' : 'Sign in'}
          </button>

          <p className="signin-note">No password needed — the resurrection is free. 🎃</p>
        </form>
        <span className="signin-pumpkin" aria-hidden>🎃</span>
      </div>
    </div>
  );
}
