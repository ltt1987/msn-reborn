// Shared domain types and status helpers for MSN Reborn.

/** A presence status. The user may only pick the first four; buddies may
 * also report `offline` (e.g. an Appear-Offline buddy renders offline). */
export type Status =
  | 'available'
  | 'busy'
  | 'away'
  | 'appearOffline'
  | 'offline';

/** The statuses the user is allowed to select from the status menu. */
export const USER_STATUSES: readonly Status[] = [
  'available',
  'busy',
  'away',
  'appearOffline',
];

export interface Buddy {
  id: string;
  displayName: string;
  personalMessage: string;
  group: string;
  /** Seed used to derive the display-picture gradient / initials. */
  avatarSeed: string;
  defaultStatus: Status;
}

/** Status → frame/dot color, per the WLM 2009 design system. */
export const STATUS_COLORS: Record<Status, string> = {
  available: '#69B53F',
  busy: '#D9534F',
  away: '#F0AD4E',
  appearOffline: '#9AA0A6',
  offline: '#9AA0A6',
};

/** Human-readable status labels for menus. */
export const STATUS_LABELS: Record<Status, string> = {
  available: 'Available',
  busy: 'Busy',
  away: 'Away',
  appearOffline: 'Appear Offline',
  offline: 'Offline',
};

/** Online = visible & active. Appear-Offline and Offline do not count. */
export function isOnline(status: Status): boolean {
  return status === 'available' || status === 'busy' || status === 'away';
}
