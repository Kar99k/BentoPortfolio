import { useEffect, useState } from "react";
import HomeMobile from "./components/Pages/HomeMobile";
import ServiceMobile from "./components/Pages/ServiceMobile";
import WorksMobile from "./components/Pages/WorksMobile";
import NavBar from "./components/Molecules/NavBar";

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
    <div className="absolute left-0 right-0 top-0 container mx-auto w-[390px] py-4 ">
      <div className=" flex flex-col justify-center items-center gap-6">
        {windowWidth <= 834 && <NavBar clicked={nav} setClicked={setNav} />}
        {nav === "Home" && <HomeMobile/>}
        {nav === "Works" && <WorksMobile />}
        {nav === "Services" && <ServiceMobile />}
      </div>
    </div>
  );
}

export default App;
