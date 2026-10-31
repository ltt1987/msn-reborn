# Requirements — log-resurrection (Chat-Log Revival & Memory Timeline)

The emotional core of the project: a user brings back a conversation that
ended when MSN died — or tries the bundled sample — and the AI continues it
in the original friend's voice.

## Requirements

1. THE SYSTEM SHALL offer "Resurrect a conversation" in the main window,
   opening a dialog that accepts pasted text or a file upload.
2. THE SYSTEM SHALL parse two input shapes:
   a. Plain-text logs in the classic copy-paste shape
      (`Name says:` / `Name dit :` style headers followed by message lines,
      plus `HH:MM` timestamped variants), and
   b. MSN Messenger XML history files (`<Message><From><User FriendlyName>
      …<Text>` structure).
3. IF parsing yields fewer than 4 messages or no identifiable second
   speaker, THE SYSTEM SHALL show a friendly error with a "Try the sample
   log instead" action.
4. THE SYSTEM SHALL bundle one sample log (an original, fictional 2009
   conversation written for this project) loadable in one click.
5. AFTER a successful parse, THE SYSTEM SHALL create a temporary buddy
   "ghost" entry (name + avatar generated from the log) in a "Resurrected"
   group, and open its chat with the parsed history rendered in place.
6. THE SYSTEM SHALL derive a lightweight voice profile from the ghost's
   messages (average length, emoticon habits, signature phrases, greeting
   style) and use it to drive replies — Scripted Mode uses the profile to
   remix the ghost's own phrases; LLM mode uses it in the system prompt.
7. THE SYSTEM SHALL render a Memory Timeline view for a resurrected chat:
   first message date, last "alive" date, message counts, top phrases,
   and the moment of resurrection — styled like a memorial card that turns
   into a birthday card.
8. Resurrected chats SHALL persist in localStorage like normal chats, and
   the ghost SHALL be removable (with confirmation) from the contact list.
9. Flutter SHALL introduce the feature the first time the dialog opens
   (one short in-character line in the dialog header).

## Out of scope

Importing from other platforms (WhatsApp/Skype exports), OCR of
screenshots, resurrecting group chats with 3+ speakers (first two speakers
only; extra speakers fold into the second).
