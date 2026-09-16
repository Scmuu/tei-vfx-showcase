import { PointerEvent, ReactNode, useRef } from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
};

const TiltCard = ({ children, className = "" }: TiltCardProps) => {
  const frameRef = useRef<number>();

  const handleMove = (event: PointerEvent<HTMLDivElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const card = event.currentTarget;
    const bounds = card.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;

    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      card.style.setProperty("--tilt-x", `${(0.5 - y) * 18}deg`);
      card.style.setProperty("--tilt-y", `${(x - 0.5) * 18}deg`);
      card.style.setProperty("--light-x", `${x * 100}%`);
      card.style.setProperty("--light-y", `${y * 100}%`);
      card.style.setProperty("--card-scale", "1.025");
    });
  };

  const resetTilt = (event: PointerEvent<HTMLDivElement>) => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    event.currentTarget.style.setProperty("--tilt-x", "0deg");
    event.currentTarget.style.setProperty("--tilt-y", "0deg");
    event.currentTarget.style.setProperty("--light-x", "50%");
    event.currentTarget.style.setProperty("--light-y", "50%");
    event.currentTarget.style.setProperty("--card-scale", "1");
  };

  return (
    <div
      className={`energy-card ${className}`}
      onPointerMove={handleMove}
      onPointerLeave={resetTilt}
    >
      <div className="energy-card__light" aria-hidden="true" />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

export default TiltCard;