# Requirements — chat-window (Conversation Experience)

The chat window itself: messages, the classic toolbar, nudges, winks,
emoticons and typing indicators. Buddies' brains live in spec ai-buddies;
this spec is everything the user sees and touches.

## Requirements

1. THE SYSTEM SHALL open one chat window per buddy, showing the buddy's
   display picture, name, personal message and current status in a header.
2. WHEN the user sends a message, THE SYSTEM SHALL append it to the message
   area with the user's display name in their chosen font color, and SHALL
   request a reply from the buddy engine (spec ai-buddies).
3. WHILE a buddy reply is pending, THE SYSTEM SHALL show
   "X is writing a message…" with animated dots, for a human-feeling delay.
4. WHEN the user clicks the Nudge button, THE SYSTEM SHALL shake the chat
   window (~350ms), play the nudge buzz, and append the system line
   "You have just sent a nudge!".
5. WHEN a buddy nudges the user, THE SYSTEM SHALL shake the window and
   append "X just sent you a nudge." — in Scripted Mode buddies SHALL
   nudge back at most once per conversation per session unless provoked.
6. WHEN the user clicks the Wink button, THE SYSTEM SHALL offer at least
   two winks (e.g. "Big Kiss", "Dancing Pumpkin 🎃") rendered as original
   SVG animations overlaying the chat for ~2 seconds.
7. THE SYSTEM SHALL provide an emoticon picker with the classic set
   (`:)`, `:(`, `;)`, `:D`, `:P`, `(L)`, `(K)`, `:@`, `:$`) and SHALL
   render those tokens as inline emoticon graphics in sent messages.
8. THE SYSTEM SHALL persist each conversation's messages to localStorage
   and restore them when the chat is reopened or the app reloads.
9. IF `prefers-reduced-motion` is set, THE SYSTEM SHALL NOT shake the
   window for nudges (sound + system line only) and winks SHALL fade
   instead of bouncing.
10. THE SYSTEM SHALL show a "Last message received at …" line in the
    classic position after each buddy reply burst.

## Out of scope

File transfer (a fake progress gag in Scripted Mode is allowed), real
voice/video calls, message editing/deletion.
