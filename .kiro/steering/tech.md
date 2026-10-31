---
inclusion: always
---

# Tech Steering — Stack & Conventions

## Stack

- **Vite + React 18 + TypeScript**, plain CSS (one global stylesheet +
  component-scoped class names). No UI framework, no Tailwind — the retro
  look needs hand-tuned CSS.
- **No backend.** All state in `localStorage`, keys prefixed `msnreborn:`.
- **AI**: two engines behind one interface (`src/lib/buddyEngine.ts`):
  1. `ScriptedEngine` (default) — data-driven, zero network, always works.
  2. `LlmEngine` (BYOK) — OpenAI-compatible chat completions via `fetch`;
     base URL, model and key come from the in-app Settings dialog and are
     stored only in localStorage.
- **Deploy**: static build (`npm run build`) to Vercel/Netlify/GitHub Pages.

## Layout

```text
src/
  App.tsx                # desktop backdrop + window manager state
  components/            # SignIn, MainWindow (contact list), ChatWindow,
                         # SettingsDialog, TimelineView, AboutDialog
  data/                  # buddies.ts (persona runtime data), scripts.ts
                         # (Scripted Mode dialogue trees), sampleLog.ts
  lib/                   # buddyEngine.ts, storage.ts, sounds.ts, logParser.ts
  styles.css             # the WLM 2009 design system in CSS
.kiro/                   # specs, steering, hooks — always committed
docs/devlog.md           # build log (hook-maintained)
```

## Conventions

- TypeScript strict; no `any` in `lib/` (UI components may use it sparingly).
- Components are function components + hooks; no external state library.
- Every user-visible string lives in the component or data file — no i18n
  framework (English only, per product steering).
- Persona runtime data in `src/data/buddies.ts` must stay in sync with the
  persona steering files in `/.kiro/steering/persona-*.md` — the steering
  files are the source of truth for voice and character.
- Tests: Vitest for `lib/` only (logParser, scripted engine routing).
  Run `npm test` before marking any spec task complete.
