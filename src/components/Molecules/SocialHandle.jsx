import { CardBody, Image } from "@nextui-org/react";
import Instagram from "@/assets/logos/Instagram.svg";
import Linkedin from "@/assets/logos/Linkedin.svg";
import yt from "@/assets/logos/Youtube.svg";
import { MyCard } from "../Atoms/MyCard";

const SocialHandle = () => {
  return (
    <MyCard
      color="zinc"
      className="w-36 h-20 justify-center  items-center flex flex-col gap-1 p-0 md:w-full"
    >
      <CardBody className="flex flex-row items-center overflow-hidden justify-center gap-2 p-0">
        <Image
          isBlurred
          radius="sm"
          src={Linkedin}
          className="cursor-pointer size-7 md:size-10"
        />
        <Image
          isBlurred
          radius="sm"
          src={Instagram}
          className="cursor-pointer size-7 md:size-10"
        />
        <Image
          isBlurred
          radius="sm"
          src={yt}
          className="cursor-pointer  size-9 md:size-14"
        />
      </CardBody>
    </MyCard>
  );
};

export default SocialHandle;
