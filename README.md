# MSN Reborn 👻

**The Messenger that came back from the dead.**

MSN / Windows Live Messenger was shut down in 2013, taking with it a generation's
after-school conversations, nudges, winks and painstakingly crafted personal
messages. **MSN Reborn** resurrects it for Kiroween 2026 (Resurrection category):
a pixel-faithful Windows Live Messenger experience for the modern web — except
your contact list is now alive with **AI buddies**, and you can **import your old
chat logs and continue conversations that ended over a decade ago**.

## ✨ Features

- 🎃 **Faithful WLM resurrection** — sign-in screen, contact list, statuses,
  personal messages, display pictures, "What I'm listening to"
- 🤖 **AI buddies** — four era-authentic contacts (a 2007 scene kid, your old
  deskmate, an overeager paperclip, and the MSN butterfly herself), each with
  memory of your conversations
- 📳 **Nudges, winks & emoticons** — the full vocabulary of 2000s affection,
  including the window-shaking nudge
- 🪦 **Chat-log resurrection** — paste or upload an old MSN chat log and the AI
  picks up your friend's voice and continues the thread; a Memory Timeline
  shows the conversation's past life
- 🔑 **Zero-config demo** — a built-in Scripted Mode makes every buddy playable
  with no API key; add your own key (BYOK) in Settings for fully generative chat

## 🛠️ Built with Kiro

This project is spec-driven end to end. The `/.kiro` directory is the real
workbench and is intentionally committed:

- **Specs** (`/.kiro/specs/`) — requirements (EARS), design and task lists for
  `retro-ui`, `chat-window`, `ai-buddies` and `log-resurrection`
- **Steering** (`/.kiro/steering/`) — product guardrails, the WLM 2009 design
  system, the tech stack, and one persona file per AI buddy
- **Hooks** (`/.kiro/hooks/`) — a dev-log hook that keeps `docs/devlog.md`
  current, and a guard hook that alarms if `.kiro` ever lands in `.gitignore`

See `docs/devlog.md` for how the build unfolded.

## 🚀 Run it

```bash
npm install
npm run dev
```

Static build for any host (Vercel / Netlify / GitHub Pages):

```bash
npm run build
```

## ⚖️ Disclaimer

A fan-made tribute created for a hackathon. Not affiliated with or endorsed by
Microsoft. All artwork and sounds are redrawn / synthesized for this project;
no Microsoft assets are included.

## 📄 License

MIT — see [LICENSE](LICENSE).
