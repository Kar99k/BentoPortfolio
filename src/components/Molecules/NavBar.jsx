import { MyButton } from "../Atoms/MyButton";
import { MyCard } from "../Atoms/MyCard";

const NavBar = ({ clicked, setClicked }) => {
  return (
    <MyCard
      color="zinc"
      className="px-3 py-3 w-[90%] h-[64px] flex-row gap-3 justify-center items-center scale-[1.2]"
    >
      <MyButton
        color="navButton"
        size="base"
        variant={clicked === "Home" ? "" : "ghost"}
        onClick={(e) => {
          setClicked(e.currentTarget.textContent);
        }}
      >
        Home
      </MyButton>
      <MyButton
        color="navButton"
        size="base"
        variant={clicked === "Works" ? "" : "ghost"}
        onClick={(e) => {
          setClicked(e.currentTarget.textContent);
        }}
      >
        Works
      </MyButton>
      <MyButton
        color="navButton"
        size="base"
        variant={clicked === "Services" ? "" : "ghost"}
        onClick={(e) => {
          setClicked(e.currentTarget.textContent);
        }}
      >
        Services
      </MyButton>
    </MyCard>
  );
};

export default NavBar;
