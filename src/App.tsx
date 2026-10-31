// Owns global state: signed-in flag, the user's status & personal message,
// the persisted mute flag, and the set of open chat windows. Renders the
// full-viewport desktop backdrop, then either the SignIn card or the
// MainWindow plus any floating chat windows.

import { useEffect, useState } from 'react';
import { SignIn } from './components/SignIn';
import { MainWindow } from './components/MainWindow';
import { ChatWindow } from './components/ChatWindow';
import { buddiesById } from './data/buddies';
import { STORAGE_KEYS, getItem, setItem } from './lib/storage';
import { setMuted as setSoundsMuted } from './lib/sounds';
import { type Status } from './types';

export function App() {
  const [signedIn, setSignedIn] = useState(false);
  const [myStatus, setMyStatus] = useState<Status>(() =>
    getItem<Status>(STORAGE_KEYS.myStatus, 'available'),
  );
  const [myPersonalMessage, setMyPersonalMessage] = useState<string>(() =>
    getItem<string>(STORAGE_KEYS.myPersonalMessage, ''),
  );
  const [muted, setMutedState] = useState<boolean>(() =>
    getItem<boolean>(STORAGE_KEYS.muted, false),
  );
  const [openChats, setOpenChats] = useState<string[]>([]);

  // Persist + sync the sound engine whenever mute changes (also on load).
  useEffect(() => {
    setItem(STORAGE_KEYS.muted, muted);
    setSoundsMuted(muted);
  }, [muted]);

  function handleStatusChange(status: Status) {
    setMyStatus(status);
    setItem(STORAGE_KEYS.myStatus, status);
  }

  function handlePersonalMessageChange(pm: string) {
    setMyPersonalMessage(pm);
    setItem(STORAGE_KEYS.myPersonalMessage, pm);
  }

  function toggleMute() {
    setMutedState((m) => !m);
  }

  function openChat(id: string) {
    setOpenChats((prev) => (prev.includes(id) ? prev : [...prev, id]));
  }

  function closeChat(id: string) {
    setOpenChats((prev) => prev.filter((x) => x !== id));
  }

  return (
    <div className="desktop">
      {!signedIn ? (
        <SignIn onSignIn={() => setSignedIn(true)} />
      ) : (
        <>
          <MainWindow
            myStatus={myStatus}
            onStatusChange={handleStatusChange}
            personalMessage={myPersonalMessage}
            onPersonalMessageChange={handlePersonalMessageChange}
            muted={muted}
            onToggleMute={toggleMute}
            onOpenChat={openChat}
          />
          {openChats.map((id, i) => {
            const buddy = buddiesById[id];
            if (!buddy) return null;
            return (
              <ChatWindow key={id} buddy={buddy} index={i} onClose={() => closeChat(id)} />
            );
          })}
        </>
      )}
    </div>
  );
}
