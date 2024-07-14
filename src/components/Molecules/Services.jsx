import { CardBody, CardHeader } from "@nextui-org/react";
import { MyButton } from "../Atoms/MyButton";
import { MyCard } from "../Atoms/MyCard";

const Services = () => {
  return (
    <MyCard color="zinc" className="w-full h-[242px] ">
      <CardHeader className="px-0 py-0 mt-2 justify-center text-xl font-bold md:text-2xl">
        Services
      </CardHeader>
      <CardBody className="py-4 items-center flex flex-col gap-3 -mt-1">
        <MyButton color="navButton" size="service">
          WebDev
        </MyButton>
        <MyButton color="navButton" size="service">
          UI/UX Design
        </MyButton>
        <MyButton color="navButton" size="service">
          Video Editing
        </MyButton>
        <MyButton color="navButton" size="service">
          Motion Graph.
        </MyButton>
      </CardBody>
    </MyCard>
  );
};

export default Services;
