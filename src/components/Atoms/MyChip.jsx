import AnimatedShinyText from "../magicui/animated-shiny-text";

const MyChip = ({ variant = "primary", text, emoji = "💻" }) => {
  const baseClasses = "rounded-[8px]  text-[8px] ";
  const variantClasses = {
    primary:
      "border border-white/5 text-white bg-black hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 z-10 -mt-2",
    secondary:
      "border border-white/5 text-white bg-text-zinc-950 hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 w-fit",
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]}`}>
      <AnimatedShinyText className="inline-flex items-center justify-center px-1 py-1">
        <span className="font-medium">
          {emoji} {text}
        </span>
      </AnimatedShinyText>
    </div>
  );
};

export default MyChip;
