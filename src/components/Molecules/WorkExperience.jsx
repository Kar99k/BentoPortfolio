import { Button } from "@nextui-org/react";

const WorkExperience = ({ onOpen }) => {
  return (
    <Button
      className="relative w-[90%] h-16 scale-[1.2] bg-zinc-950 font-semibold p-0 md:scale-[1] md:h-full md:w-full"
      variant="flat"
      onPress={onOpen}
    >
      <span className="absolute bottom-50 left-0 right-0 text-center z-10 text-xl md:text-2xl text-white">
        Work Experience
      </span>
      <img
        src="https://media.giphy.com/media/10ulkX3Y06BRmw/giphy.gif"
        className="w-[100%] h-full object-cover brightness-100 hover:brightness-50 "
      />
    </Button>
  );
};

export default WorkExperience;
