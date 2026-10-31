// Dropdown for the four user-selectable statuses. Selection is persisted by
// the parent (stored under `msnreborn:myStatus`). The trigger shows the
// current status dot + label; the list shows a coloured dot per option.

import { useEffect, useRef, useState } from 'react';
import { STATUS_COLORS, STATUS_LABELS, USER_STATUSES, type Status } from '../types';

interface StatusMenuProps {
  status: Status;
  onChange: (status: Status) => void;
}

export function StatusMenu({ status, onChange }: StatusMenuProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click / Escape.
  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: PointerEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div className="status-menu" ref={ref}>
      <button
        type="button"
        className="status-menu__trigger"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        title="Change status"
      >
        <span className="status-dot" style={{ background: STATUS_COLORS[status] }} />
        <span className="status-menu__label">{STATUS_LABELS[status]}</span>
        <span className="status-menu__chevron" aria-hidden>▾</span>
      </button>
      {open && (
        <ul className="status-menu__list" role="listbox">
          {USER_STATUSES.map((s) => (
            <li key={s}>
              <button
                type="button"
                role="option"
                aria-selected={s === status}
                className="status-menu__item"
                onClick={() => {
                  onChange(s);
                  setOpen(false);
                }}
              >
                <span className="status-dot" style={{ background: STATUS_COLORS[s] }} />
                {STATUS_LABELS[s]}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
