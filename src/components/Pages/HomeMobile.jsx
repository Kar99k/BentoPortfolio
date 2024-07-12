import InfoGraphics from "../Molecules/InfoGraphics";
import NameCard from "../Organisms/NameCard";
import { Button } from "@nextui-org/react";
import TechStack from "../Molecules/TechStack";
import WorkCard from "../Molecules/WorkCard";
import SocialHandle from "../Molecules/SocialHandle";

const HomeMobile = () => {
  return (
    <div className="flex flex-col w-[100%] justify-center items-center gap-10">
      <InfoGraphics />
      <NameCard />

      <div className="grid grid-cols-8 grid-rows-2 gap-2 mt-7 w-[90%] scale-[1.2]">
        <div className="row-span-2">
          <Button className="w-[172px] h-[72px] text-xl bg-zinc-950 font-bold">
            📄 Resume
          </Button>
        </div>
        <div className="row-span-11 col-start-5 ml-4">
          <TechStack />
        </div>
        <div className="row-span-11 row-start-3">
          <WorkCard />
        </div>
        <div className="row-start-11 row-span-12 col-start-6 -ml-6 mt-2">
          <SocialHandle />
        </div>
      </div>
    </div>
  );
};

export default HomeMobile;
