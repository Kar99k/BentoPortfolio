import { CardBody, CardHeader, Image } from "@nextui-org/react";
import Instagram from "@/assets/logos/Instagram.svg";
import Linkedin from "@/assets/logos/Linkedin.svg";
import yt from "@/assets/logos/Youtube.svg";
import { MyCard } from "../Atoms/MyCard";

const SocialHandle = () => {
  return (
    <MyCard color="zinc" className="w-36 items-center md:w-full">
      <CardHeader className="px-0 py-0 mt-3 justify-center text-base font-bold md:text-2xl">
        Follow me on
      </CardHeader>
      <CardBody className="py-3 -mt-2 items-center justify-center flex flex-row gap-2 overflow-hidden">
        <Image
          isBlurred
          radius="sm"
          width={32}
          src={Linkedin}
          className="cursor-pointer  hover:scale-[1.2]"
        />
        <Image
          isBlurred
          radius="sm"
          width={32}
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
      </CardBody>
    </MyCard>
  );
};

export default SocialHandle;
