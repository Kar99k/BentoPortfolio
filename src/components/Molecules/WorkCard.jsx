import { Card, CardBody } from "@nextui-org/react";
import WorkItem from "../Atoms/WorkItem";
import SparklesText from "../magicui/sparkles-text";
import Marquee from "../magicui/marquee";
import { MyCard } from "../Atoms/MyCard";

const WorkCard = () => {
  return (
    <MyCard color="zinc" className="px-4 py-3 w-fit flex flex-col gap-8 ">
      <SparklesText text="Works" />
      <CardBody className="overflow-hidden w-[140px]">
        <Marquee
          pauseOnHover="true"
          className="[--duration:5s] rounded-xl"
        >
          <WorkItem />
        </Marquee>
      </CardBody>
    </MyCard>
  );
};

export default WorkCard;
