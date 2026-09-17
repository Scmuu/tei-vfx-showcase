import { Pause, Play, Volume2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.25);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.25;

    const tryPlay = () => {
      audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    };
    tryPlay();

    const onInteract = () => {
      if (audio.paused) tryPlay();
      window.removeEventListener("pointerdown", onInteract);
      window.removeEventListener("keydown", onInteract);
    };
    window.addEventListener("pointerdown", onInteract);
    window.addEventListener("keydown", onInteract);

    return () => {
      window.removeEventListener("pointerdown", onInteract);
      window.removeEventListener("keydown", onInteract);
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  const format = (value: number) => {
    if (!Number.isFinite(value)) return "0:00";
    const m = Math.floor(value / 60);
    const s = Math.floor(value % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="relative mx-auto w-full max-w-sm">
      <img
        src="/player-art.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 left-0 z-10 h-24 w-auto select-none drop-shadow-[0_8px_20px_hsl(var(--background)/0.8)]"
      />

      <div className="relative rounded-2xl border border-foreground/15 bg-background/40 px-4 py-3 backdrop-blur-md">
        <input
          type="range"
          min={0}
          max={duration || 0}
          step={0.1}
          value={progress}
          onChange={(event) => {
            const audio = audioRef.current;
            if (!audio) return;
            audio.currentTime = Number(event.target.value);
            setProgress(Number(event.target.value));
          }}
          aria-label="Music progress"
          className="h-1 w-full cursor-pointer appearance-none rounded-full bg-foreground/20 accent-primary"
        />

        <div className="mt-2 flex items-center justify-between gap-3 font-body text-[11px] tabular-nums text-foreground/70">
          <span>{format(progress)}</span>

          <button
            type="button"
            onClick={toggle}
            aria-label={playing ? "Pause music" : "Play music"}
            className="grid h-9 w-9 place-items-center rounded-full border border-foreground/25 bg-background/60 text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </button>

          <span>{format(duration)}</span>
        </div>

        <div className="mt-2 flex items-center justify-center gap-2">
          <Volume2 className="h-3.5 w-3.5 text-foreground/60" />
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={(event) => {
              const next = Number(event.target.value);
              setVolume(next);
              if (audioRef.current) audioRef.current.volume = next;
            }}
            aria-label="Volume"
            className="h-1 w-24 cursor-pointer appearance-none rounded-full bg-foreground/20 accent-primary"
          />
        </div>
      </div>

      <audio
        ref={audioRef}
        src="/music.mp3"
        loop
        autoPlay
        preload="auto"
        onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
        onTimeUpdate={(event) => setProgress(event.currentTarget.currentTime)}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
    </div>
  );
};

export default MusicPlayer;
