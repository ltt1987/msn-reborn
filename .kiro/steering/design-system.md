---
inclusion: always
---

# Design System Steering — Windows Live Messenger 2009

All UI in this project recreates the Windows Live Messenger (WLM) 2009 look.
When in doubt, choose the option that looks more like 2009, not more modern.

## Typography

- UI font stack: `Tahoma, "Segoe UI", Geneva, Verdana, sans-serif`
- Base UI text: 11–12px. Contact display names: 12px. Personal messages
  (status text): 11px italic gray. Window titles: 12px semibold white on the
  title-bar gradient.
- Chat message text: 13px Tahoma; sender name bold in their chosen font color.

## Color palette

- Window background: soft vertical gradient `#EAF4FD` → `#D6E9F8`
- Aero title bar: gradient `#5B9BD5` → `#2F6DB3`, white text, subtle top gloss
- Accent blue (links, selected contact): `#2F6DB3`
- Panel white: `#FFFFFF` with 1px border `#A8C6E0`
- Status colors — Available `#69B53F`, Busy `#D9534F`, Away `#F0AD4E`,
  Appear Offline / Offline `#9AA0A6`
- Personal-message gray: `#6B7A8D`
- Halloween nod (subtle, judges' category is spooky): the butterfly mascot
  wears a tiny witch hat; sign-in screen has one faint pumpkin in the corner.
  Do NOT turn the whole UI orange/black — authenticity wins.

## Window chrome

- Every app window is a "card" with 8px rounded corners, 1px `#7FB2E0`
  border, shadow `0 8px 32px rgba(31, 78, 120, .35)`, and a title bar with
  minimize / maximize / close glyphs drawn in CSS (white ✕ on hover-red
  close, WLM style).
- Desktop backdrop behind windows: a soft blue-green "Windows era" gradient
  with a faint aurora swirl (CSS only), filling the viewport.

## Components

- **Contact list**: collapsible group headers (small caps, blue-gray),
  rows with 32px display picture in a status-colored frame, name + gray
  personal message beneath. Hover row: `#E5F1FB`. Selected: `#CCE4F7`.
- **Display pictures**: generated avatar tiles (initials + era-style gradient
  or simple SVG scene). Frames colored by status.
- **Chat window**: white message area; toolbar row of icon buttons
  (emoticon, wink, nudge, font, voice-clip gag); input area with the classic
  two-pane split; "last message received" timestamp line.
- **Nudge**: chat window shakes via CSS keyframes (~350ms, ±6px) + nudge
  sound; system line "You have just sent a nudge!" / "X sent you a nudge."
- **Winks**: a large playful SVG animation overlaying the chat for ~2s.
- Respect `prefers-reduced-motion`: no shake, winks fade instead of bounce.

## Sounds (synthesized, WebAudio — never sampled)

- Sign-in chime, new-message blip, nudge buzz: tiny oscillator-based
  recreations in `src/lib/sounds.ts`, mutable in the header speaker toggle.
