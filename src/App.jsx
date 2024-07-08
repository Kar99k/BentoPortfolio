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

function App() {
  return (
    <div className="container mx-auto ">
      {/* <NavBar/>
      <InfoGraphics/> */}
      {/* <ProPic /> */}
      {/* <NameTag/> */}
      {/* <Tags /> */}
      {/* <CTA /> */}
      {/* <NameCard /> */}
      {/* <TechStack /> */}
      <WorkItem />
    </div>
  );
}

export default App;
