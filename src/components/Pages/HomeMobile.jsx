import InfoGraphics from "../Molecules/InfoGraphics";
import NameCard from "../Organisms/NameCard";
import {
  Button,
  Divider,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import TechStack from "../Molecules/TechStack";
import WorkCard from "../Molecules/WorkCard";
import SocialHandle from "../Molecules/SocialHandle";
import Download from "@/assets/logos/Download.svg";
import "rsuite/Timeline/styles/index.css";
import TimelineItem from "../Molecules/TimelineItem";
import { Timeline } from "rsuite";
import WorkExperience from "../Molecules/WorkExperience";
import content from "@/lib/constants";
import climax from "@/assets/Pics/ClimaxFCx1.webp";

const HomeMobile = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="flex flex-col w-[100%] justify-center items-center gap-10 md:hidden">
      <InfoGraphics />
      <NameCard />
      <WorkExperience onOpen={onOpen} />
      <Modal
        backdrop={"blur"}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="w-[360px] bg-zinc-950/90"
        hideCloseButton
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-2xl text-center">
                Experience
              </ModalHeader>

              <Divider />
              <ModalBody className="justify-center p-4">
                <Timeline
                  className="custom-timeline"
                  isItemActive={(index) => index === 0}
                >
                  <Timeline.Item>
                    <TimelineItem
                      timeline={content.timeline[0]}
                      title={content.title[0]}
                      company={content.company[0]}
                      description={content.para.content1}
                    />
                  </Timeline.Item>

                  <Timeline.Item>
                    <TimelineItem
                      timeline={content.timeline[1]}
                      title={content.title[1]}
                      company={content.company[1]}
                      description={content.para.content2}
                    />
                  </Timeline.Item>

                  <Timeline.Item>
                    <TimelineItem
                      timeline={content.timeline[2]}
                      title={content.title[2]}
                      company={content.company[2]}
                      description={content.para.content3}
                    />
                  </Timeline.Item>
                </Timeline>
              </ModalBody>
              <ModalFooter className="justify-center">
                <Button
                  color="danger"
                  variant="flat"
                  onPress={onClose}
                  className="w-full"
                >
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <div className="flex flex-row gap-4 scale-[1.15] mt-2">
        <div className="flex flex-col gap-4">
          <Button
            className="w-[172px] h-[80px] text-xl bg-[#141513] font-semibold"
            startContent={<img src={Download} width={12} />}
          >
            Resume
          </Button>
          <WorkCard />
        </div>
        <div className="flex flex-col gap-4">
          <TechStack />
          <SocialHandle />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-3 mt-1 ">
        <Image
          isBlurred
          src={climax}
          alt="Climax from Fight Club"
          className="rounded-2xl scale-[1.08]"
        />
        <p className="text-xsm font-semibold">Made with 💚 by Karthikeyan</p>
      </div>
    </div>
  );
};

export default HomeMobile;
