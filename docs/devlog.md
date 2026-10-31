# Development Log — MSN Reborn

Kept (mostly) by the dev-log hook in `/.kiro/hooks/`. This log doubles as the
raw material for the hackathon "How we used Kiro" write-up.

## 2026-10-31 — Project kickoff 🎃

- Entered Kiroween 2026 (Resurrection category) on Devpost; requested the
  4,000 Kiro credits with the MSN-resurrection plan.
- Created the public repo `ltt1987/msn-reborn` (MIT).
- Authored the full `/.kiro` foundation BEFORE writing app code:
  - Steering: `product.md` (vision & scope guardrails), `design-system.md`
    (WLM 2009 visual spec), `tech.md` (stack & conventions), plus one persona
    steering file per AI buddy.
  - Specs: `retro-ui`, `chat-window`, `ai-buddies`, `log-resurrection` —
    each with EARS requirements, a design doc and a task list.
  - Hooks: dev-log keeper + a guard that alarms if `.kiro` is ever gitignored.
- Build order: retro-ui skeleton first, with Scripted Mode buddies so the app
  is playable end-to-end before any real AI is wired in.

## 2026-10-31 — retro-ui build (spec: retro-ui)

Scaffolded Vite + React 18 + TypeScript and implemented the full retro-ui
shell in one pass, then verified with `npm install && npm run build` (tsc
strict + vite build — clean, 43 modules):

- `src/styles.css` — the WLM 2009 design system: Aero title bar, 8px window
  cards, CSS-drawn window glyphs, desktop gradient + aurora swirl, status
  frames, contact rows, and a `prefers-reduced-motion` pass.
- `src/lib/storage.ts` — typed `msnreborn:`-prefixed localStorage helpers.
- `src/lib/sounds.ts` — WebAudio-synthesized sign-in chime / message blip /
  nudge buzz, honouring the persisted mute flag.
- `src/data/buddies.ts` — four-buddy roster (Ben, Rainy, Clippy, Flutter)
  in Favorites / Assistants, kept in sync with the persona steering files.
- `src/components/` — `SignIn` (prefilled email, 900ms "Signing in…",
  chime), `MainWindow` (identity header with editable+persisted personal
  message, status menu, search, contact groups, footer), `StatusMenu`,
  `ContactGroup` + `ContactRow`, `Avatar` (generated initials tiles plus
  bespoke butterfly-with-witch-hat and paperclip SVGs), `Butterfly` mascot,
  and a placeholder `ChatWindow` (full chat is spec chat-window).
- `src/App.tsx` — owns signed-in / status / personal-message / mute /
  open-chats state; header speaker toggle persists to localStorage.
