
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const logoVariants = cva(
  "font-bold rounded px-2 py-2 select-none",
  {
    variants: {
      variant: {
        default: "",
        grayscale: "grayscale",
        monochrome: "text-current",
        white: "text-white"
      },
      size: {
        sm: "text-lg md:text-xl px-2 py-1",
        default: "text-xl md:text-2xl px-2 py-2",
        lg: "text-2xl md:text-3xl px-3 py-2",
        xl: "text-3xl md:text-4xl px-4 py-3"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface LogoProps extends VariantProps<typeof logoVariants> {
  className?: string;
}

export function Logo({ variant, size, className }: LogoProps) {
  const getTextColors = () => {
    switch (variant) {
      case "grayscale":
        return {
          primary: "text-gray-800",
          secondary: "text-gray-600"
        };
      case "monochrome":
        return {
          primary: "text-current",
          secondary: "text-current opacity-75"
        };
      case "white":
        return {
          primary: "text-white",
          secondary: "text-white/90"
        };
      default:
        return {
          primary: "text-gray-900",
          secondary: "text-[#976B47]"
        };
    }
  };

  const colors = getTextColors();

  return (
    <div className={cn(logoVariants({ variant, size }), className)}>
      <span className={cn("font-serif tracking-tight font-black", colors.primary)}>
        Touchstone
      </span>
      <span className={cn("font-bold ml-1", colors.secondary, 
        size === "sm" ? "text-base" : 
        size === "lg" ? "text-xl md:text-2xl" :
        size === "xl" ? "text-2xl md:text-3xl" :
        "text-lg"
      )}>
        Education
      </span>
    </div>
  );
}
