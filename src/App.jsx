import { Icon } from "@iconify/react/dist/iconify.js";
import { MyChip } from "./components/Atoms/MyChip";
import { MyButton } from "./components/Atoms/MyButton";
import { Button } from "@nextui-org/react";
import NavBar from "./components/Molecules/NavBar";
import InfoGraphics from "./components/Molecules/InfoGraphics";

function App() {
  return (
    <div className="container mx-auto">
      {/* <NavBar/> */}
      <InfoGraphics/>
    </div>
  );
}

export default App;
