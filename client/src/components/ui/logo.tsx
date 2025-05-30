
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const logoVariants = cva(
  "font-bold select-none",
  {
    variants: {
      variant: {
        default: "",
        grayscale: "grayscale",
        monochrome: "text-current",
        white: "text-white"
      },
      size: {
        sm: "text-lg md:text-xl",
        default: "text-xl md:text-2xl",
        lg: "text-2xl md:text-3xl",
        xl: "text-3xl md:text-4xl"
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
      <span className={cn("font-bold ml-1", colors.secondary)}>
        Education
      </span>
    </div>
  );
}
