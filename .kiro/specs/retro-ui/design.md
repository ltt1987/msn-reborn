# Design — retro-ui

## Components

- `App.tsx` — owns global state: `signedIn`, `myStatus`, `myPersonalMessage`,
  `muted`, `openChats: string[]` (buddy ids). Renders `Desktop` backdrop,
  then `SignIn` or `MainWindow` + open `ChatWindow`s.
- `components/SignIn.tsx` — centered WLM sign-in card; email input
  (prefilled, editable but unused), Sign in button; on submit calls
  `onSignIn()` after a 900ms "Signing in…" state; plays `sounds.signIn()`.
- `components/MainWindow.tsx` — title bar ("MSN Reborn"), identity header
  (own avatar tile, name, personal-message input, status menu), search box
  (decorative filter over contacts), `ContactGroup` list, footer with
  Settings + About buttons.
- `components/StatusMenu.tsx` — dropdown for the four statuses with colored
  dots; selection stored in `msnreborn:myStatus`.

## Data

- Buddy roster comes from `src/data/buddies.ts` (id, displayName,
  personalMessage, group, avatarSeed, defaultStatus).
- Persistence via `src/lib/storage.ts` (typed get/set over localStorage).

## Styling

All classes follow `/.kiro/steering/design-system.md`. The window card,
title-bar gradient, contact rows and status frames are defined once in
`src/styles.css` and reused by chat windows.

## Decisions

- Single main window + floating chat windows (not tabs): closer to the real
  Messenger and better for the demo video.
- Sign-in is ceremonial (no password): the resurrection is the point; a
  fake password field would add friction for judges.
