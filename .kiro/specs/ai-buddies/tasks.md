# Tasks — ai-buddies

- [ ] 1. Define `BuddyEngine` interface + `ReplyChunk` types; implement
  engine selection with Scripted as default (Req 1, 3)
- [ ] 2. Write runtime persona data in `data/buddies.ts` mirroring the four
  persona steering files (Req 2)
- [ ] 3. Author Scripted dialogue data for Rainy and Ben (greetings, ≥6
  topics each, fallbacks, nudge reactions) (Req 3)
- [ ] 4. Author Scripted dialogue data for Clippy (tips system) and
  Flutter (onboarding tour) (Req 3, 7, 8)
- [ ] 5. Implement topic routing + non-repeating fallback rotation (Req 3)
- [ ] 6. Implement per-buddy memory extraction + callbacks (Req 4)
- [ ] 7. Implement status-aware reply prefixing for Busy/Away (Req 6)
- [ ] 8. Build Settings dialog (BYOK fields, engine toggle, key stored
  only in localStorage) (Req 9)
- [ ] 9. Implement `LlmEngine` (OpenAI-compatible fetch, persona system
  prompt, 20-message context) with Scripted fallback on any error (Req 5)
- [ ] 10. Vitest: routing picks the most specific topic; fallback pool
  doesn't repeat; memory extraction patterns
