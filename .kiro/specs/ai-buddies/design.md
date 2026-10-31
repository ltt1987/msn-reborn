# Design — ai-buddies

## Engine interface (`src/lib/buddyEngine.ts`)

```ts
export type ReplyChunk =
  | { type: 'text'; text: string }
  | { type: 'nudge' }
  | { type: 'wink'; wink: 'kiss' | 'pumpkin' };

export interface BuddyEngine {
  reply(ctx: {
    buddy: Buddy; history: ChatMessage[]; userText: string;
    memory: BuddyMemory;
  }): Promise<ReplyChunk[]>;
}
```

`getEngine()` returns `LlmEngine` when BYOK settings are complete, else
`ScriptedEngine`. ChatWindow never knows which engine answered.

## Scripted engine (`src/data/scripts.ts`)

Per buddy: `greetings[]`, `topics[]` ({ match: RegExp | keywords, replies:
string[] | chunk builders }), `fallbacks[]`, `nudgeReactions[]`.
Routing: greeting (first open) → topic match (most specific first) →
memory callback (if a stored fact fits) → rotating fallback (no repeats
until the pool is exhausted). Scripted replies must read as the persona —
review against the steering file before merging new lines.

## Memory (`src/lib/memory.ts`)

Pattern-extracted facts: `my name is X`, `my favorite * is Y`, `my (cat|dog)
* is named Z`, stored per buddy under `msnreborn:memory:<buddyId>`.
Buddies surface facts naturally (greetings, fallbacks), never as a list.

## LLM engine

- POST `{baseUrl}/chat/completions` (OpenAI-compatible), `model` from
  settings, system prompt assembled from the buddy's persona steering
  content (bundled as a string in `buddies.ts`), last 20 messages as
  context, temperature 0.9.
- Persona system prompts MUST include the era rules (e.g. Rainy never uses
  2020s slang) and the safety line: stay in character, keep it kind.
- Errors (network, 4xx/5xx) → catch → Scripted fallback for that turn;
  set `msnreborn:llmNotice` once so Settings can explain what happened.

## Settings dialog (`components/SettingsDialog.tsx`)

Fields: engine mode (Auto / Scripted only), base URL (default
`https://api.openai.com/v1`), model (default `gpt-4o-mini`), API key
(password input). "Test connection" button sends a 1-token ping.
