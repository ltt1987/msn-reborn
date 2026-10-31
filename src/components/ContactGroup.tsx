// A collapsible contact group with an online count header, e.g.
// "Favorites (2/2)". Collapsed groups hide their rows; each group keeps its
// own expand state.

import { useState } from 'react';
import { ContactRow } from './ContactRow';
import { isOnline, type Buddy } from '../types';

interface ContactGroupProps {
  name: string;
  members: Buddy[];
  onOpen: (id: string) => void;
  defaultExpanded?: boolean;
}

export function ContactGroup({ name, members, onOpen, defaultExpanded = true }: ContactGroupProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const online = members.filter((m) => isOnline(m.defaultStatus)).length;

  return (
    <div className="contact-group">
      <button
        type="button"
        className="contact-group__header"
        onClick={() => setExpanded((e) => !e)}
        aria-expanded={expanded}
      >
        <span
          className={'contact-group__chevron' + (expanded ? ' contact-group__chevron--open' : '')}
          aria-hidden
        >
          ▸
        </span>
        <span className="contact-group__name">{name}</span>
        <span className="contact-group__count">({online}/{members.length})</span>
      </button>
      {expanded && (
        <div className="contact-group__rows">
          {members.map((b) => (
            <ContactRow key={b.id} buddy={b} onOpen={onOpen} />
          ))}
        </div>
      )}
    </div>
  );
}
