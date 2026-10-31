# Requirements — ai-buddies (Persona Engine, Scripted + BYOK)

The buddies' brains. Two engines behind one interface: Scripted Mode
(default, zero network) and an LLM mode using the user's own API key.
Persona voices are defined by `/.kiro/steering/persona-*.md` — those files
are the source of truth; runtime data mirrors them.

## Requirements

1. THE SYSTEM SHALL define a `BuddyEngine` interface:
   `reply(buddyId, history, userText) => Promise<ReplyChunk[]>` where a
   chunk may be text, a nudge, or a wink.
2. THE SYSTEM SHALL ship four buddies — Rainy, Ben, Clippy, Flutter — each
   with runtime persona data (greeting script, topic hooks, quirks,
   fallbacks) mirroring its steering file.
3. BY DEFAULT THE SYSTEM SHALL use the Scripted engine: keyword/topic
   routing over per-buddy dialogue data, with in-character fallbacks. It
   SHALL work fully offline and with no configuration.
4. THE SYSTEM SHALL remember, per buddy, lightweight facts the user shares
   (name, favorites, pets) extracted by simple patterns, persist them, and
   have buddies reference them in later replies.
5. IF the user has saved BYOK settings (base URL, model, API key), THE
   SYSTEM SHALL use the LLM engine with the buddy's persona as the system
   prompt; IF a request fails, THE SYSTEM SHALL fall back to Scripted for
   that reply and show a one-time note in Settings (never break the chat).
6. WHEN the user's own status is Busy or Away, buddies SHALL leave a
   message anyway but prefix their burst with an acknowledgment of the
   status (era-authentic answering-machine behavior).
7. WHEN a chat with Flutter is opened for the first time, SHE SHALL run the
   onboarding tour script (welcome back, nudge hint, log-import hint).
8. WHEN a chat with Clippy is opened, HE SHALL offer app tips; IF the user
   tells him to go away, HE SHALL set his own status to Appear Offline for
   the rest of the session.
9. THE SYSTEM SHALL expose a Settings dialog where the user can enter BYOK
   details and toggle engines; the API key SHALL be stored only in
   localStorage and never sent anywhere except the configured endpoint.

## Out of scope

Server-side proxying of LLM calls, multi-provider failover chains, voice.
