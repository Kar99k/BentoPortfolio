import { Icon } from "@iconify/react/dist/iconify.js";
import { MyButton } from "./components/Atoms/MyButton";
import { Button } from "@nextui-org/react";
import NavBar from "./components/Molecules/NavBar";
import InfoGraphics from "./components/Molecules/InfoGraphics";
import ProPic from "./components/Atoms/ProPic";
import NameTag from "./components/Atoms/NameTag";
import Tags from "./components/Molecules/Tags";
import CTA from "./components/Molecules/CTA";
import NameCard from "./components/Organisms/NameCard";
import TechStack from "./components/Molecules/TechStack";
import LogoMarquee from "./components/Atoms/LogoMarquee";
import WorkItem from "./components/Atoms/WorkItem";
import WorkCard from "./components/Molecules/WorkCard";
import SocialHandle from "./components/Molecules/SocialHandle";
import Services from "./components/Molecules/Services";

function App() {
  return (
    <div className=" absolute left-0 right-0 top-1 container mx-auto w-[390px]">
      <div className=" flex flex-col justify-center items-center gap-2 mt-4">
        <NavBar />
        <InfoGraphics />
        <NameCard />

        <div className="grid grid-cols-8 grid-rows-2 gap-2 w-[90%]">
          <div className="row-span-2">
            <Button className="w-[172px] h-[72px] text-xl bg-zinc-950">
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
    </div>
  );
}

export default App;
