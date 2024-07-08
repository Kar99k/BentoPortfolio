import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import { MyButton } from "../Atoms/MyButton";

const Services = () => {
  return (
    <Card className="w-36 h-60">
      <CardHeader className="px-0 py-0 mt-3 justify-center text-xl font-bold">
        Services
      </CardHeader>
      <CardBody className="py-1 items-center flex flex-col gap-2">
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

      <CardFooter className="flex flex-col bg-violet-950/25 overflow-hidden absolute bottom-0 z-10 rounded-xl p-3 ">
        <MyButton color="violetCTA" size="service" className="backdrop-blur-md">
          Schedule a call
        </MyButton>
      </CardFooter>
    </Card>
  );
};

export default Services;
