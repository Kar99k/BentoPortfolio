import AnimatedShinyText from "../magicui/animated-shiny-text";

const MyChip = ({ variant = "primary", text, emoji = "💻" }) => {
  const baseClasses = "rounded-full  text-[8px] top-[4.7rem]";
  const variantClasses = {
    primary:
      "border border-white/5 text-white bg-black hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 absolute z-10",
    secondary:
      "border border-white/5 text-white bg-black hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400",
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]}`}>
      <AnimatedShinyText className="inline-flex items-center justify-center px-2 py-1">
        <span className="font-medium">
          {emoji} {text}
        </span>
      </AnimatedShinyText>
    </div>
  );
};

export default MyChip;
