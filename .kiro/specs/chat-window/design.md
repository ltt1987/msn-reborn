# Design — chat-window

## Components

- `components/ChatWindow.tsx` — window chrome reuse from retro-ui; header
  (buddy identity), `MessageList`, `Toolbar`, `Composer`.
  Local state: `messages: ChatMessage[]`, `isTyping`, `wink: WinkKind|null`.
- `components/MessageList.tsx` — renders messages grouped by sender bursts;
  system lines (nudges, sign-ins) in centered gray italic; emoticon tokens
  replaced by `<Emoticon code>` inline SVGs.
- `components/Toolbar.tsx` — buttons: Emoticon (opens picker), Wink (opens
  wink menu), Nudge, Font color (cycles the user's color), Voice Clip
  (Scripted gag: buddy replies as if a voice clip was received).
- `components/WinkOverlay.tsx` — absolutely-positioned SVG animation,
  auto-dismiss after 2s, `aria-hidden`.

## Message model

```ts
type ChatMessage =
  | { kind: 'text'; id: string; from: 'me' | string; text: string; at: number }
  | { kind: 'system'; id: string; text: string; at: number }
  | { kind: 'wink'; id: string; from: 'me' | string; wink: WinkKind; at: number }
  | { kind: 'nudge'; id: string; from: 'me' | string; at: number };
```

Persisted per buddy under `msnreborn:chat:<buddyId>` (last 200 messages).

## Interactions

- Nudge: add CSS class `nudging` to the window for 350ms → keyframe shake;
  play `sounds.nudge()`; append system/nudge message. Cooldown 5s on the
  button to prevent spam (the real MSN had one too).
- Typing indicator: the buddy engine emits reply chunks; ChatWindow shows
  the indicator for `min(600ms + 30ms/char, 3000ms)` before revealing each
  chunk — multi-message bursts feel like a real person double-texting.
- Enter sends; Shift+Enter newline. Composer keeps focus after send.

## Decisions

- Emoticons are inline SVG recreations (yellow faces + symbols), drawn
  in-project per product steering (no Microsoft artwork).
- Wink art is original SVG (kiss lips; a dancing pumpkin for Kiroween).
