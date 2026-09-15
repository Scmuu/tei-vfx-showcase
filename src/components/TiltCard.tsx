import { MouseEvent, ReactNode } from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
};

const TiltCard = ({ children, className = "" }: TiltCardProps) => {
  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const card = event.currentTarget;
    const bounds = card.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;

    card.style.setProperty("--tilt-x", `${(0.5 - y) * 10}deg`);
    card.style.setProperty("--tilt-y", `${(x - 0.5) * 10}deg`);
    card.style.setProperty("--light-x", `${x * 100}%`);
    card.style.setProperty("--light-y", `${y * 100}%`);
  };

  const resetTilt = (event: MouseEvent<HTMLDivElement>) => {
    event.currentTarget.style.setProperty("--tilt-x", "0deg");
    event.currentTarget.style.setProperty("--tilt-y", "0deg");
    event.currentTarget.style.setProperty("--light-x", "50%");
    event.currentTarget.style.setProperty("--light-y", "50%");
  };

  return (
    <div
      className={`energy-card ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={resetTilt}
    >
      <div className="energy-card__light" aria-hidden="true" />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

export default TiltCard;