import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import Instagram from "@/assets/logos/Instagram.svg";
import Linkedin from "@/assets/logos/Linkedin.svg";
import yt from "@/assets/logos/Youtube.svg";
import { MyCard } from "../Atoms/MyCard";

const SocialHandle = () => {
  return (
    <MyCard color="zinc" className="w-36 items-center">
      <CardHeader className="px-0 py-0 mt-3 justify-center text-base font-bold">
        Follow me on
      </CardHeader>
      <CardBody className="py-3 -mt-2 items-center justify-center flex flex-row gap-2 overflow-hidden">
        <Image isBlurred radius="sm" width={32} src={Linkedin} />
        <Image isBlurred radius="sm" width={32} src={Instagram} />
        <Image isBlurred radius="sm" width={40} src={yt} />
      </CardBody>
    </MyCard>
  );
};

export default SocialHandle;
