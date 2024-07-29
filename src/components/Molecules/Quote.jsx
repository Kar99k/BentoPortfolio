import { MyCard } from "../Atoms/MyCard";
import { CardBody, Image } from "@nextui-org/react";
import climax from "@/assets/Pics/ClimaxFCx1.webp";

const Quote = () => {
  return (
    <MyCard
      className=" w-[264px] h-[64%] rounded-2xl gap-2 overflow-hidden items-center"
      color="zinc"
    >
      <CardBody className="flex text-wrap text-center font-garamond text-[20px] gap-4 leading-tight">
        <Image src={climax} sizes={84} />
        <p>
          You met me at a very strange time in my{" "}
          <span className="text-[#99D52A]">Sprint</span> cycle.
        </p>
      </CardBody>
    </MyCard>
  );
};

export default Quote;
