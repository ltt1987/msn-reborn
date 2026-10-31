# Requirements — retro-ui (Sign-in, Desktop & Main Window)

The resurrection's shell: sign-in screen, desktop backdrop, and the main
Messenger window with the contact list. Visual source of truth:
`/.kiro/steering/design-system.md`.

## Requirements

1. WHEN the app loads, THE SYSTEM SHALL show a Windows Live style sign-in
   screen with an email field prefilled `you@msnreborn.app`, a "Sign in"
   button, and the butterfly mascot (with her tiny witch hat).
2. WHEN the user clicks Sign in, THE SYSTEM SHALL play the sign-in chime,
   show a brief "Signing in…" state, and THEN display the main window.
3. THE SYSTEM SHALL render the main window as a WLM 2009 card (Aero title
   bar, rounded corners, CSS-drawn window glyphs) over a full-viewport
   era-style desktop gradient.
4. THE SYSTEM SHALL show the user's own display picture, display name and
   an editable personal message at the top of the main window.
5. WHEN the user clicks their status, THE SYSTEM SHALL offer Available /
   Busy / Away / Appear Offline and SHALL reflect the choice in the status
   dot color everywhere the user appears.
6. THE SYSTEM SHALL group contacts into collapsible groups (Favorites,
   Assistants, and any groups defined by buddy data), showing an online
   count per group (e.g. "Favorites (2/2)").
7. THE SYSTEM SHALL render each contact row with a status-framed display
   picture, display name, and gray personal message, per the design system.
8. WHEN the user double-clicks a contact (or single-clicks on touch),
   THE SYSTEM SHALL open that contact's chat window (spec: chat-window).
9. WHEN the user changes their personal message, THE SYSTEM SHALL persist
   it to localStorage and restore it on reload.
10. THE SYSTEM SHALL provide a header speaker toggle that mutes/unmutes all
    app sounds and persists the choice.

## Out of scope

Real authentication, multiple accounts, contact add/remove (buddy roster is
fixed for the hackathon build).
