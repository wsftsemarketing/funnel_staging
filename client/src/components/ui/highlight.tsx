import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type HighlightType = "primary" | "secondary" | "accent" | "minimal" | "marker" | "green" | "glow";

interface HighlightProps {
  children: ReactNode;
  type?: HighlightType;
  className?: string;
  animated?: boolean;
  gradient?: boolean;
}

export function Highlight({ 
  children, 
  type = "primary", 
  className,
  animated = false,
  gradient = false
}: HighlightProps) {
  const getHighlightClass = () => {
    switch (type) {
      case "primary":
        return gradient 
          ? "relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
          : "relative z-10 inline-block after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-[8px] after:w-full after:bg-primary/20 after:z-[-1] after:rounded-md";
      case "secondary":
        return "relative z-10 inline-block after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-[8px] after:w-full after:bg-secondary/20 after:z-[-1] after:rounded-md";
      case "accent":
        return "relative z-10 inline-block after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-[8px] after:w-full after:bg-accent/20 after:z-[-1] after:rounded-md";
      case "minimal":
        return "relative inline-block after:content-[''] after:absolute after:bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-primary/40 after:z-[-1]";
      case "marker":
        return "relative inline-block px-2 py-0.5 bg-primary/10 rounded-md border border-primary/10";
      case "glow":
        return "relative z-10 inline-block text-primary drop-shadow-[0_0_10px_rgba(var(--primary),0.3)]";
        case "green":
        return "relative z-10 inline-block after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-[8px] after:w-full after:bg-blue-900/20 after:z-[-1] after:rounded-md";
      default:
        return "relative z-10 inline-block after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-[8px] after:w-full after:bg-primary/20 after:z-[-1] after:rounded-md";
    }
  };

  // Animation classes
  const getAnimationClass = () => {
    if (!animated) return "";
    
    return "transition-all duration-300 hover:after:bg-primary/30";
  };
    
  return (
    <span className={cn(
      getHighlightClass(),
      getAnimationClass(),
      className
    )}>
      {children}
    </span>
  );
}
