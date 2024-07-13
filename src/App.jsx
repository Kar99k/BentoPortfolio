import { useEffect, useState } from "react";
import HomeMobile from "./components/Pages/HomeMobile";
import ServiceMobile from "./components/Pages/ServiceMobile";
import WorksMobile from "./components/Pages/WorksMobile";
import NavBar from "./components/Molecules/NavBar";
import Metrics from "./components/Atoms/Metrics";
import InfoGraphics from "./components/Molecules/InfoGraphics";
import NameCard from "./components/Organisms/NameCard";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [nav, setNav] = useState("Home");

  useEffect(() => {
    const handleWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWidth);

    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, []);

  return (
    <div>
      {windowWidth < 834 && (
        <div className="absolute left-0 right-0 top-0 container mx-auto w-[390px] py-4">
          <div className=" flex flex-col justify-center items-center gap-6">
            <NavBar clicked={nav} setClicked={setNav} />
            {nav === "Home" && <HomeMobile />}
            {nav === "Works" && <WorksMobile />}
            {nav === "Services" && <ServiceMobile />}
          </div>
        </div>
      )}

      {windowWidth >= 834 && windowWidth < 1440 && (
        <div className="w-[834px] p-6 flex flex-wrap gap-4 mx-auto">
          <div className="flex flex-wrap w-[67%] h-[476px] gap-4 justify-between">
            <div className="w-[164px] h-[140px] rounded-2xl">
              <Metrics header={20} footer="Projects" />
            </div>
            <div className="w-[164px] h-[140px] rounded-2xl">
              <Metrics header={4} footer="years Xperience" />
            </div>
            <div className="w-[164px] h-[140px] rounded-2xl">
              <Metrics header={15} footer="Clients" />
            </div>
            <div className="bg-zinc-500 w-[526px] h-[256px] rounded-2xl">
              <NameCard />
            </div>
            <div className="bg-zinc-500 w-[164px] h-[80px] rounded-2xl"></div>
            <div className="bg-zinc-500 w-[346px] h-[80px] rounded-2xl"></div>
          </div>

          <div className="flex flex-col gap-4 h-[508px]">
            <div className="bg-zinc-500 w-[243px] h-[50%] rounded-2xl"></div>
            <div className="bg-zinc-500 w-[243px] h-[70%] rounded-2xl"></div>
          </div>

          <div className="flex flex-row gap-4 w-[834px]">
            <div className="flex flex-col gap-4 h-[364px]">
              <div className="bg-zinc-500 w-[264px] h-[60%] rounded-2xl"></div>
              <div className="bg-zinc-500 w-[264px] h-[25%] rounded-2xl"></div>
            </div>
            <div className="bg-zinc-500 w-full h-[89%] rounded-2xl"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
