# Design — log-resurrection

## Parser (`src/lib/logParser.ts`)

```ts
export interface ParsedLog {
  speakers: [string, string];        // [me, ghost] best-effort
  messages: { from: 0 | 1; text: string; at?: number }[];
  firstAt?: number; lastAt?: number;
}
export function parseLog(raw: string): ParsedLog | null;
```

- Detect XML by a leading `<?xml` or `<Log>`/`<Message` presence → DOMParser
  path (FriendlyName + Text + DateTime attributes).
- Plain-text path: header regexes for `X says:` / `X says (HH:MM):` /
  `[HH:MM] X:` lines; lines without a header append to the previous
  message. Speaker assignment: the speaker matching the user's display
  name (or the first speaker) is "me"; the other becomes the ghost.
- Return `null` when <4 messages or <2 speakers (Req 3).

## Voice profile (`src/lib/voiceProfile.ts`)

From ghost messages compute: avg message length, emoticon frequency + top
emoticons, top repeated phrases (2–3 word n-grams), greeting/farewell
lines, lowercase ratio. Scripted continuation: templates that splice the
ghost's own phrases + era fallbacks in their style. LLM mode: profile is
serialized into the system prompt ("You are X, resurrected from a 2009
chat log. You write short messages, love the emoticon …").

## UI

- `components/ResurrectDialog.tsx` — paste area, file input, sample-log
  button, parse errors, Flutter's intro line (Req 9).
- Ghost buddies: appended to `buddies` state with `ghost: true`, group
  "Resurrected", avatar = initials tile in a ghostly pale palette.
- `components/TimelineView.tsx` — memorial→birthday card: dates, counts,
  top phrases chips, "Resurrected on <today>" stamp.

## Privacy

Logs never leave the browser (parsing + LLM context are local/BYOK only).
State this in the dialog footer — it's a feature, say it out loud.
