import { cn } from "@/lib/utils";

const AnimatedShinyText = ({ children, className, shimmerWidth = 80 }) => {
  return (
    <p
      style={{
        "--shimmer-width": `${shimmerWidth}px`,
      }}
      className={cn(
        "mx-auto max-w-md text-neutral-600/70 dark:text-neutral-400/70",
        // Shimmer effect
        "animate-shimmer bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shimmer-width)_100%] ",
        // Shimmer gradient
        "bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent  dark:via-white/80",
        className
      )}
    >
      {children}
    </p>
  );
};

export default AnimatedShinyText;
