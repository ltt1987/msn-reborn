// A single contact row: status-framed display picture, display name, and gray
// personal message. Opens the chat window on double-click (desktop) or tap
// (touch devices), per Req 8. Full chat behaviour lives in the chat-window
// spec; here we just notify the parent to mount a chat window.

import { Avatar } from './Avatar';
import { type Buddy } from '../types';

interface ContactRowProps {
  buddy: Buddy;
  onOpen: (id: string) => void;
}

// Coarse pointers (touch) don't reliably fire dblclick, so a single tap opens
// there; desktop waits for the double-click so a single click doesn't pop a
// window while the user is just browsing the list.
const isCoarsePointer =
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(pointer: coarse)').matches;

export function ContactRow({ buddy, onOpen }: ContactRowProps) {
  return (
    <div
      className="contact-row"
      role="button"
      tabIndex={0}
      title={`Open chat with ${buddy.displayName}`}
      onClick={() => {
        if (isCoarsePointer) onOpen(buddy.id);
      }}
      onDoubleClick={() => onOpen(buddy.id)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpen(buddy.id);
        }
      }}
    >
      <Avatar
        id={buddy.id}
        name={buddy.displayName}
        seed={buddy.avatarSeed}
        status={buddy.defaultStatus}
        size={32}
      />
      <div className="contact-row__info">
        <div className="contact-row__name">{buddy.displayName}</div>
        <div className="contact-row__pm">{buddy.personalMessage}</div>
      </div>
    </div>
  );
}
