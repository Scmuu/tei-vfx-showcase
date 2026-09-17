import { Pause, Play, SkipBack, SkipForward, Volume2 } from "lucide-react";
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

  const restart = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = 0;
  };

  const format = (value: number) => {
    if (!Number.isFinite(value)) return "0:00";
    const m = Math.floor(value / 60);
    const s = Math.floor(value % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const seek = (event: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !Number.isFinite(duration) || duration <= 0) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
    audio.currentTime = ratio * duration;
    setProgress(audio.currentTime);
  };

  return (
    <div className="relative mx-auto w-full max-w-3xl">
      <div className="relative flex items-center gap-4 font-body text-sm tabular-nums text-foreground/70">
        <img
          src="/player-art.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute bottom-2 left-[7.5rem] z-10 h-9 w-auto select-none drop-shadow-[0_6px_16px_hsl(var(--background)/0.8)]"
        />

        <div className="flex shrink-0 items-center gap-2 text-foreground/70">
          <Volume2 className="h-4 w-4" />
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

        <span className="w-12 shrink-0">{format(progress)}</span>

        <div
          role="slider"
          aria-label="Music progress"
          aria-valuemin={0}
          aria-valuemax={Math.round(duration) || 0}
          aria-valuenow={Math.round(progress)}
          tabIndex={0}
          onClick={seek}
          onKeyDown={(event) => {
            const audio = audioRef.current;
            if (!audio) return;
            if (event.key === "ArrowRight") audio.currentTime = Math.min(duration, audio.currentTime + 5);
            if (event.key === "ArrowLeft") audio.currentTime = Math.max(0, audio.currentTime - 5);
          }}
          className="group relative h-4 flex-1 cursor-pointer"
        >
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 rounded-full bg-foreground/25" />
          <div
            className="absolute left-0 top-1/2 h-px -translate-y-1/2 rounded-full bg-foreground/80"
            style={{ width: `${duration > 0 ? (progress / duration) * 100 : 0}%` }}
          />
        </div>

        <span className="w-12 shrink-0 text-right">{format(duration)}</span>

        <div className="flex shrink-0 items-center gap-2.5 text-foreground/80">
          <button
            type="button"
            onClick={restart}
            aria-label="Restart music"
            className="transition-colors hover:text-foreground"
          >
            <SkipBack className="h-5 w-5" fill="currentColor" />
          </button>

          <button
            type="button"
            onClick={toggle}
            aria-label={playing ? "Pause music" : "Play music"}
            className="transition-colors hover:text-foreground"
          >
            {playing ? (
              <Pause className="h-6 w-6" fill="currentColor" />
            ) : (
              <Play className="h-6 w-6" fill="currentColor" />
            )}
          </button>

          <button
            type="button"
            onClick={restart}
            aria-label="Restart music"
            className="transition-colors hover:text-foreground"
          >
            <SkipForward className="h-5 w-5" fill="currentColor" />
          </button>
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
