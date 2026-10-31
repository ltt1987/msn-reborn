# Tasks — retro-ui

- [ ] 1. Scaffold Vite + React + TypeScript project; add base `styles.css`
  with the desktop backdrop and window-card chrome (Req 3)
- [ ] 2. Implement `lib/storage.ts` typed localStorage helpers (Req 9)
- [ ] 3. Implement `lib/sounds.ts` with synthesized sign-in chime and
  message blip; respect the persisted mute flag (Req 2, 10)
- [ ] 4. Build `SignIn` component with prefilled email and signing-in
  state (Req 1, 2)
- [ ] 5. Build `MainWindow` identity header: own avatar, name, editable
  personal message with persistence (Req 4, 9)
- [ ] 6. Build `StatusMenu` with the four statuses and status-dot colors
  (Req 5)
- [ ] 7. Create `data/buddies.ts` roster for the four buddies (Req 6, 7)
- [ ] 8. Build `ContactGroup` + contact rows per the design system;
  collapse/expand groups with online counts (Req 6, 7)
- [ ] 9. Wire contact open → placeholder chat window mount in `App`
  (Req 8; full chat behavior is spec chat-window)
- [ ] 10. Add header speaker mute toggle with persistence (Req 10)
- [ ] 11. Reduced-motion pass: disable non-essential animation under
  `prefers-reduced-motion`
