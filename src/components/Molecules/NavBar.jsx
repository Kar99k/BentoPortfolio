import { Card } from "@nextui-org/react";
import { MyButton } from "../Atoms/MyButton";
import { useState } from "react";

const NavBar = () => {
  const [clicked, setClicked] = useState("Home");

  return (
    <Card className="px-3 py-3 w-[312px] h-[64px] flex-row gap-3 justify-center items-center">
      <MyButton
        color="navButton"
        variant={clicked === "Home" ? "" : "ghost"}
        onClick={(e) => {
          setClicked(e.currentTarget.textContent);
        }}
      >
        Home
      </MyButton>
      <MyButton
        color="navButton"
        variant={clicked === "Works" ? "" : "ghost"}
        onClick={(e) => {
          setClicked(e.currentTarget.textContent);
        }}
      >
        Works
      </MyButton>
      <MyButton
        color="navButton"
        variant={clicked === "Services" ? "" : "ghost"}
        onClick={(e) => {
          setClicked(e.currentTarget.textContent);
        }}
      >
        Services
      </MyButton>
    </Card>
  );
};

export default NavBar;
