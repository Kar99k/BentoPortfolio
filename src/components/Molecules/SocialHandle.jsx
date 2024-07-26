import { CardBody, CardHeader, Image } from "@nextui-org/react";
import Instagram from "@/assets/logos/Instagram.svg";
import Linkedin from "@/assets/logos/Linkedin.svg";
import yt from "@/assets/logos/Youtube.svg";
import { MyCard } from "../Atoms/MyCard";

const SocialHandle = () => {
  return (
    <MyCard
      color="zinc"
      className="p-2 w-36 h-20 items-center flex flex-col gap-1 md:w-full"
    >
      <div className=" justify-center text-base font-semibold md:text-[18px]">
        Follow me on
      </div>
      <div className="flex flex-row gap-2">
        <Image
          isBlurred
          radius="sm"
          width={28}
          src={Linkedin}
          className="cursor-pointer hover:scale-[1.2]"
        />
        <Image
          isBlurred
          radius="sm"
          width={28}
          src={Instagram}
          className="cursor-pointer hover:scale-[1.2]"
        />
        <Image
          isBlurred
          radius="sm"
          width={40}
          src={yt}
          className="cursor-pointer hover:scale-[1.2]"
        />
      </div>
    </MyCard>
  );
};

export default SocialHandle;
