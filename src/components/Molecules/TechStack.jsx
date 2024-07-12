import { Card, CardBody, CardHeader } from "@nextui-org/react";
import LogoMarquee from "../Atoms/LogoMarquee";
import { MyCard } from "../Atoms/MyCard";

const TechStack = () => {
  return (
    <MyCard color="zinc" className="h-60 w-36 items-center">
      <CardHeader className="px-0 py-0 mt-3 justify-center text-xl font-bold">
        TechStack
      </CardHeader>
      <CardBody className="py-1 items-center">
        <LogoMarquee />
      </CardBody>
    </MyCard>
  );
};

export default TechStack;
