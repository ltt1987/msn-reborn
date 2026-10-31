---
inclusion: always
---

# Product Steering — MSN Reborn

## Vision

Resurrect MSN / Windows Live Messenger (discontinued 2013) as a modern web
app for the Kiroween 2026 **Resurrection** category. The resurrection has two
layers:

1. **The software** — a faithful Windows Live Messenger (2009-era) client
   rebuilt with today's web tech.
2. **The memories** — AI buddies who live in the contact list, and a
   chat-log resurrection feature that lets a user continue a conversation
   that ended a decade ago.

## Audience & judging lens

- Hackathon judges and nostalgic 25–40-year-old users. UI language: **English**.
- Judged on Potential Value, Implementation (depth of Kiro usage), and
  Quality & Design. Every feature should visibly serve at least one of these.

## Scope guardrails

IN scope:

- Single-user experience against AI buddies (no real human-to-human chat).
- Scripted Mode (no network, fully playable) + BYOK generative mode.
- All state in the browser (localStorage). No backend, no accounts.

OUT of scope (do not build, even if asked mid-task — flag it instead):

- Real-time messaging between real users, WebSocket servers, auth systems.
- Voice/video calling (a fake "calling…" gag is allowed in Scripted Mode).
- Any Microsoft-owned assets: no original icons, sounds, logos or artwork.
  Everything visual/audio must be redrawn or synthesized in-project.

## Non-negotiables

- `/.kiro` is always committed, never gitignored.
- The app must be fully playable with zero configuration (Scripted Mode is
  the default; BYOK is an enhancement, never a gate).
- Fan-remake disclaimer stays in README and in the app's About dialog.
- Accessibility floor: keyboard-focusable controls, `prefers-reduced-motion`
  disables the nudge shake and wink animations.
