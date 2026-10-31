# Tasks — chat-window

- [ ] 1. Define `ChatMessage` model + per-buddy persistence in
  `lib/storage.ts` (Req 8)
- [ ] 2. Build `ChatWindow` shell with buddy header, message area and
  composer; Enter-to-send (Req 1, 2)
- [ ] 3. Build `MessageList` with sender bursts, system lines and
  "Last message received" line (Req 2, 10)
- [ ] 4. Implement typing indicator with human-feeling reveal delays for
  multi-chunk replies (Req 3)
- [ ] 5. Implement Nudge: shake animation, buzz sound, system lines,
  5s cooldown, buddy nudge-back hook (Req 4, 5)
- [ ] 6. Draw the classic emoticon set as inline SVGs; build the picker;
  token replacement in rendered messages (Req 7)
- [ ] 7. Create two original wink SVGs ("Big Kiss", "Dancing Pumpkin")
  and the overlay player (Req 6)
- [ ] 8. Add font-color cycling for the user's messages (Req 2)
- [ ] 9. Reduced-motion behavior for nudge + winks (Req 9)
- [ ] 10. Vitest: message persistence round-trip + emoticon tokenization
