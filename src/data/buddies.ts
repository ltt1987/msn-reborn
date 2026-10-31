// Fixed buddy roster for the hackathon build (Req: roster is fixed; add/remove
// is out of scope). Runtime data must stay in sync with the persona steering
// files in /.kiro/steering/persona-*.md, which are the source of truth for
// voice and character.

import { type Buddy } from '../types';

export const buddies: Buddy[] = [
  {
    id: 'ben',
    displayName: 'Ben',
    personalMessage: 'dad of two. asleep by 10. still undefeated at Pro Evo on PS2',
    group: 'Favorites',
    avatarSeed: 'ben',
    defaultStatus: 'available',
  },
  {
    id: 'rainy',
    displayName: '~*Rainy*~ xX',
    personalMessage: 'rawr means i love u in dinosaur 🦖 | brb dinner',
    group: 'Favorites',
    avatarSeed: 'rainy',
    defaultStatus: 'away',
  },
  {
    id: 'clippy',
    displayName: 'Clippy 📎',
    personalMessage: "It looks like you're resurrecting a messenger. Would you like help?",
    group: 'Assistants',
    avatarSeed: 'clippy',
    defaultStatus: 'available',
  },
  {
    id: 'flutter',
    displayName: 'Flutter 🦋',
    personalMessage: 'back from the garden grave for Kiroween 🎃',
    group: 'Assistants',
    avatarSeed: 'flutter',
    defaultStatus: 'available',
  },
];

export const buddiesById: Record<string, Buddy> = buddies.reduce(
  (acc, b) => {
    acc[b.id] = b;
    return acc;
  },
  {} as Record<string, Buddy>,
);

export interface BuddyGroup {
  name: string;
  members: Buddy[];
}

/** Group buddies preserving a canonical order — Favorites, Assistants, then
 * any other groups alphabetically — matching the WLM contact-list layout. */
export function groupBuddies(list: Buddy[]): BuddyGroup[] {
  const order = ['Favorites', 'Assistants'];
  const map = new Map<string, Buddy[]>();
  for (const b of list) {
    if (!map.has(b.group)) map.set(b.group, []);
    map.get(b.group)!.push(b);
  }
  return [...map.keys()]
    .sort((a, b) => {
      const ia = order.indexOf(a);
      const ib = order.indexOf(b);
      if (ia !== -1 && ib !== -1) return ia - ib;
      if (ia !== -1) return -1;
      if (ib !== -1) return 1;
      return a.localeCompare(b);
    })
    .map((name) => ({ name, members: map.get(name)! }));
}
