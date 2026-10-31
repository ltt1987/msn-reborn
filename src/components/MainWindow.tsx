// The WLM 2009 main window: Aero title bar (with the header speaker mute
// toggle), identity header (own avatar tile, name, editable personal
// message, status menu), a decorative-but-functional search box, the
// collapsible contact groups, and a footer with Settings + About buttons.

import { useState } from 'react';
import { Avatar } from './Avatar';
import { StatusMenu } from './StatusMenu';
import { ContactGroup } from './ContactGroup';
import { buddies, groupBuddies } from '../data/buddies';
import { type Status } from '../types';

interface MainWindowProps {
  myStatus: Status;
  onStatusChange: (status: Status) => void;
  personalMessage: string;
  onPersonalMessageChange: (pm: string) => void;
  muted: boolean;
  onToggleMute: () => void;
  onOpenChat: (id: string) => void;
}

type Modal = null | 'about' | 'settings';

function SpeakerIcon({ muted }: { muted: boolean }) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
      <path d="M3 6h2.5L9 3v10L5.5 10H3V6z" />
      {muted ? (
        <path
          d="M11 5l4 6M15 5l-4 6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
      ) : (
        <>
          <path
            d="M11 5.5a3 3 0 0 1 0 5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
          <path
            d="M12.5 4a5 5 0 0 1 0 8"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
        </>
      )}
    </svg>
  );
}

export function MainWindow(props: MainWindowProps) {
  const [query, setQuery] = useState('');
  const [modal, setModal] = useState<Modal>(null);

  const groups = groupBuddies(buddies);
  const q = query.trim().toLowerCase();

  return (
    <div className="window-card main-window">
      <div className="titlebar">
        <span className="title-text">MSN Reborn</span>
        <div className="titlebar__right">
          <button
            type="button"
            className={'speaker-toggle' + (props.muted ? ' speaker-toggle--muted' : '')}
            onClick={props.onToggleMute}
            title={props.muted ? 'Unmute sounds' : 'Mute sounds'}
            aria-pressed={props.muted}
            aria-label={props.muted ? 'Unmute sounds' : 'Mute sounds'}
          >
            <SpeakerIcon muted={props.muted} />
          </button>
          <div className="window-glyphs" aria-hidden>
            <span className="glyph glyph--min" />
            <span className="glyph glyph--max" />
            <span className="glyph glyph--close" />
          </div>
        </div>
      </div>

      <div className="main-body">
        <div className="identity-header">
          <Avatar id="you" name="You" seed="you-msnreborn" status={props.myStatus} size={48} />
          <div className="identity-info">
            <div className="identity-name-row">
              <span className="display-name">You</span>
              <StatusMenu status={props.myStatus} onChange={props.onStatusChange} />
            </div>
            <input
              className="personal-message-input"
              type="text"
              value={props.personalMessage}
              onChange={(e) => props.onPersonalMessageChange(e.target.value)}
              placeholder="Type a personal message…"
              maxLength={140}
              aria-label="Personal message"
            />
          </div>
        </div>

        <div className="search-box">
          <span className="search-box__icon" aria-hidden>🔍</span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search contacts…"
            aria-label="Search contacts"
          />
        </div>

        <div className="contact-list">
          {groups.map((g) => {
            const members = q
              ? g.members.filter((m) => m.displayName.toLowerCase().includes(q))
              : g.members;
            if (q && members.length === 0) return null;
            return (
              <ContactGroup key={g.name} name={g.name} members={members} onOpen={props.onOpenChat} />
            );
          })}
        </div>

        <div className="main-footer">
          <button type="button" className="footer-btn" onClick={() => setModal('settings')}>
            ⚙️ Settings
          </button>
          <button type="button" className="footer-btn" onClick={() => setModal('about')}>
            About
          </button>
        </div>
      </div>

      {modal && (
        <div className="modal-overlay" onClick={() => setModal(null)}>
          <div className="window-card modal" onClick={(e) => e.stopPropagation()}>
            <div className="titlebar">
              <span className="title-text">
                {modal === 'about' ? 'About MSN Reborn' : 'Settings'}
              </span>
              <div className="window-glyphs">
                <button
                  type="button"
                  className="glyph glyph--close"
                  onClick={() => setModal(null)}
                  aria-label="Close dialog"
                />
              </div>
            </div>
            <div className="modal-body">
              {modal === 'about' ? (
                <>
                  <p>
                    <strong>MSN Reborn 👻</strong> — the Messenger that came back
                    from the dead.
                  </p>
                  <p>
                    A fan-made tribute created for Kiroween 2026 (Resurrection
                    category). Not affiliated with or endorsed by Microsoft. All
                    artwork and sounds are redrawn / synthesized for this
                    project; no Microsoft assets are included.
                  </p>
                </>
              ) : (
                <p>
                  Generative (BYOK) settings — base URL, model and API key —
                  arrive with the <code>ai-buddies</code> spec. Scripted Mode is
                  fully playable with zero configuration.
                </p>
              )}
            </div>
            <div className="modal-actions">
              <button type="button" className="footer-btn" onClick={() => setModal(null)}>
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
