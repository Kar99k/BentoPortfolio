import { Card, Image, CardFooter, Divider } from "@nextui-org/react";

const WorkItem = ({ name = "Project Name", desc = "description" }) => {
  return (
    <Card isFooterBlurred className="border-none size-28 ">
      <Image
        isBlurred
        alt="Woman listing to music"
        className="object-cover"
        height={200}
        src="https://nextui.org/images/hero-card.jpeg"
        width={200}
      />

      <CardFooter className="flex flex-col before:bg-white/10 border-white/20 overflow-hidden py-1 absolute bottom-0 shadow-xl z-10">
        <p className="font-bold text-xsm">{name}</p>
        <p className="font-medium text-[6px] text-center">{desc}</p>
      </CardFooter>
    </Card>
  );
};

export default WorkItem;
