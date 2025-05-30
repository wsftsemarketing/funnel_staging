import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
  size?: "small" | "large";
  onComplete?: () => void;
}

export function CountdownTimer({ 
  targetDate, 
  className, 
  size = "large",
  onComplete 
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      let newTimeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };

      if (difference > 0) {
        newTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      } else if (onComplete) {
        onComplete();
      }

      setTimeLeft(newTimeLeft);
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onComplete]);

  const formatNumber = (num: number) => {
    return num.toString().padStart(2, '0');
  };

  const isSmall = size === "small";

  return (
    <div className={cn("flex justify-between w-full", className)}>
      <div className="text-center">
        <div className={cn(
          "bg-white/90 backdrop-blur-sm border border-white/50 shadow-sm rounded-xl flex flex-col items-center justify-center",
          isSmall ? "w-14 h-14" : "w-[70px] h-[70px]"
        )}>
          <span className={cn("font-bold", isSmall ? "text-xl" : "text-3xl")}>
            {formatNumber(timeLeft.days)}
          </span>
          <span className={cn("text-foreground/60 font-medium", isSmall ? "text-[10px]" : "text-xs")}>DAYS</span>
        </div>
      </div>

      <div className="text-center">
        <div className={cn(
          "bg-white/90 backdrop-blur-sm border border-white/50 shadow-sm rounded-xl flex flex-col items-center justify-center",
          isSmall ? "w-14 h-14" : "w-[70px] h-[70px]"
        )}>
          <span className={cn("font-bold", isSmall ? "text-xl" : "text-3xl")}>
            {formatNumber(timeLeft.hours)}
          </span>
          <span className={cn("text-foreground/60 font-medium", isSmall ? "text-[10px]" : "text-xs")}>HOURS</span>
        </div>
      </div>

      <div className="text-center">
        <div className={cn(
          "bg-white/90 backdrop-blur-sm border border-white/50 shadow-sm rounded-xl flex flex-col items-center justify-center",
          isSmall ? "w-14 h-14" : "w-[70px] h-[70px]"
        )}>
          <span className={cn("font-bold", isSmall ? "text-xl" : "text-3xl")}>
            {formatNumber(timeLeft.minutes)}
          </span>
          <span className={cn("text-foreground/60 font-medium", isSmall ? "text-[10px]" : "text-xs")}>MINS</span>
        </div>
      </div>

      <div className="text-center">
        <div className={cn(
          "bg-white/90 backdrop-blur-sm border border-white/50 shadow-sm rounded-xl flex flex-col items-center justify-center",
          isSmall ? "w-14 h-14" : "w-[70px] h-[70px]"
        )}>
          <span className={cn("font-bold", isSmall ? "text-xl" : "text-3xl")}>
            {formatNumber(timeLeft.seconds)}
          </span>
          <span className={cn("text-foreground/60 font-medium", isSmall ? "text-[10px]" : "text-xs")}>SECS</span>
        </div>
      </div>
    </div>
  );
}
