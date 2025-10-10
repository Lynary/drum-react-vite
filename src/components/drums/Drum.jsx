import "./Drum.css";
import { Howl } from "howler";

const sounds = {
  w: "/sounds/tom-1.mp3",
  a: "/sounds/tom-2.mp3",
  s: "/sounds/tom-3.mp3",
  d: "/sounds/tom-4.mp3",
  j: "/sounds/crash.mp3",
  k: "/sounds/kick-bass.mp3",
  l: "/sounds/snare.mp3",
};

export function Drum({ keyButton, children }) {
  const playSound = (key) => {
    const audio = new Howl({ src: [sounds[key]] });
    audio.play();
  };

  const handleClickSound = () => {
    playSound(keyButton);
  };

  const handleKeyDown = (e) => {
    playSound(e.key);
  };

  return (
    <button
      onKeyDown={handleKeyDown}
      onClick={handleClickSound}
      className={`${keyButton} drum`}
    >
      {children}
    </button>
  );
}
