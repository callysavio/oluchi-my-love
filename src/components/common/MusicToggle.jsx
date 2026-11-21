import { useCallback, useEffect, useRef, useState } from "react";
import { VolumeX } from "lucide-react";
import { audioUrl } from "../../utils/assets";
import { site } from "../../data/site";

const MAX_VOLUME = 0.45;

// Tries to start as soon as the page loads. Browsers usually block that, so it also starts on the
// visitor's first tap/click/key press (that is the "Open Your Love Story" tap). Fades in gently.
// If the visitor turns the music off, it stays off.
export default function MusicToggle() {
  const src = audioUrl(site.music.file);
  const audioRef = useRef(null);
  const rampRef = useRef(null);
  const userPaused = useRef(false);
  const [playing, setPlaying] = useState(false);

  const ramp = useCallback((target, ms, done) => {
    const audio = audioRef.current;
    if (!audio) return;
    clearInterval(rampRef.current);
    const steps = Math.max(1, Math.round(ms / 50));
    const delta = (target - audio.volume) / steps;
    let i = 0;
    rampRef.current = setInterval(() => {
      i += 1;
      audio.volume = Math.min(1, Math.max(0, audio.volume + delta));
      if (i >= steps) {
        audio.volume = target;
        clearInterval(rampRef.current);
        done?.();
      }
    }, 50);
  }, []);

  const start = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio || userPaused.current) return false;
    try {
      audio.volume = 0;
      await audio.play();
      setPlaying(true);
      ramp(MAX_VOLUME, 2000);
      return true;
    } catch {
      return false; // blocked by the browser; we'll retry on the first interaction
    }
  }, [ramp]);

  useEffect(() => {
    if (!src) return undefined;
    let started = false;
    const events = ["pointerdown", "pointerup", "touchend", "keydown", "click"];

    const cleanup = () => events.forEach((e) => window.removeEventListener(e, onGesture));

    const attempt = async () => {
      if (started) return;
      if (await start()) {
        started = true;
        cleanup();
      }
    };

    function onGesture(e) {
      // Let the music button handle its own taps.
      if (e.target?.closest?.(".music-btn")) return;
      attempt();
    }

    attempt(); // try immediately on load
    events.forEach((e) => window.addEventListener(e, onGesture, { passive: true }));

    return () => {
      cleanup();
      clearInterval(rampRef.current);
    };
  }, [src, start]);

  if (!src) return null;

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      userPaused.current = true;
      setPlaying(false);
      ramp(0, 400, () => audio.pause());
    } else {
      userPaused.current = false;
      await start();
    }
  };

  const title = site.music.title;

  return (
    <>
      <audio ref={audioRef} src={src} loop preload="auto" />
      <button
        className="music-btn"
        onClick={toggle}
        aria-pressed={playing}
        aria-label={playing ? `Turn off ${title}` : `Turn on ${title}`}
      >
        {playing && <span className="music-ring" aria-hidden="true" />}
        {playing ? (
          <span className="music-eq" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </span>
        ) : (
          <VolumeX size={20} aria-hidden="true" />
        )}
        <span className="music-label">{playing ? "Music on" : "Music off"}</span>
      </button>
    </>
  );
}