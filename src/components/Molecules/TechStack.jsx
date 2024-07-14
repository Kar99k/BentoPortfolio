import { CardBody, CardHeader } from "@nextui-org/react";
import LogoMarquee from "../Atoms/LogoMarquee";
import { MyCard } from "../Atoms/MyCard";
import LogoMarqueeFull from "../Atoms/LogoMarqueeFull";

const TechStack = ({ windowWidth }) => {
  return (
    <MyCard color="zinc" className="h-60 w-36 items-center md:w-full md:h-full">
      <CardHeader className="px-0 py-0 mt-3 justify-center text-xl font-bold md:text-2xl">
        TechStack
      </CardHeader>
      <CardBody className="py-1 items-center md:py-2">
        {windowWidth >= 834 ? "" : <LogoMarquee />}
        {windowWidth >= 834 && windowWidth < 1440 && <LogoMarqueeFull />}
      </CardBody>
    </MyCard>
  );
};

export default TechStack;
