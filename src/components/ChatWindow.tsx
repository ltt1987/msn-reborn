// Placeholder chat window for the retro-ui spec. Full chat behaviour
// (messages, emoticons, nudge, winks, engine replies) is the chat-window
// spec; here we just mount an on-brand WLM window card with the buddy's
// identity and a "coming alive" note, plus a working close button. Open
// windows cascade from the bottom-right.

import { Avatar } from './Avatar';
import { type Buddy } from '../types';

interface ChatWindowProps {
  buddy: Buddy;
  index: number;
  onClose: () => void;
}

export function ChatWindow({ buddy, index, onClose }: ChatWindowProps) {
  return (
    <div
      className="window-card chat-window"
      style={{ right: 24 + index * 28, bottom: 24 + index * 28 }}
    >
      <div className="titlebar">
        <span className="title-text">{buddy.displayName}</span>
        <div className="window-glyphs">
          <span className="glyph glyph--min" aria-hidden />
          <span className="glyph glyph--max" aria-hidden />
          <button
            type="button"
            className="glyph glyph--close"
            onClick={onClose}
            aria-label={`Close chat with ${buddy.displayName}`}
          />
        </div>
      </div>
      <div className="chat-body">
        <div className="chat-placeholder">
          <Avatar
            id={buddy.id}
            name={buddy.displayName}
            seed={buddy.avatarSeed}
            status={buddy.defaultStatus}
            size={56}
          />
          <div className="chat-placeholder__text">
            <strong>{buddy.displayName}</strong>
            <div className="chat-placeholder__pm">{buddy.personalMessage}</div>
            <p className="chat-placeholder__note">
              This conversation will come alive in the <code>chat-window</code> spec.
            </p>
          </div>
        </div>
        <div className="chat-input-area">
          <input className="chat-input" placeholder="Chat coming soon…" disabled />
        </div>
      </div>
    </div>
  );
}
