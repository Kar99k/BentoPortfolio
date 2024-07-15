import InfoGraphics from "../Molecules/InfoGraphics";
import NameCard from "../Organisms/NameCard";
import { Button, Divider } from "@nextui-org/react";
import TechStack from "../Molecules/TechStack";
import WorkCard from "../Molecules/WorkCard";
import SocialHandle from "../Molecules/SocialHandle";
import Download from "@/assets/logos/Download.svg";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import Timeline from "rsuite/Timeline";
import "rsuite/Timeline/styles/index.css";
import TimelineItem from "../Molecules/TimelineItem";

const content = {
  timeline: [
    "Aug 2022 - Present, 📍Bangalore",
    "Apr 2022 - Jun 2022,📍Bangalore",
    "Feb 2022 - Apr 2022,📍Bangalore",
  ],
  title: [
    "Software Engineer",
    "Junior Frontend Engineer",
    "Frontend Development Intern",
  ],
  company: [
    "Boeing International Corporation India Pvt Ltd",
    "Starya Mobility Pvt Ltd",
    "Geek Synergy Technologies",
  ],
  para: {
    content1: [
      "Conducted Agile Sprint Planning, prioritizing backlog features with ScrumMaster and tech leads.",
      "Led a team in transitioning a web app to a PWA with Next.js, achieving 70% cost savings.",
      "Engineered multi-language support and boosted content availability offline, improving operational efficiency and page load speeds by 40%.",
    ],
    content2: [
      "Mentored UI Design interns to implement neomorphism design, increasing UI engagement by 30%.",
      "Integrated live vehicle data via RESTful APIs for real-time battery and range display.",
      "Designed a Redux strategy, reducing UI bugs and increasing navigation speed by 30%, and developed in-app push notifications, boosting user engagement by 20%.",
    ],
    content3: [
      "Designed UI for e-commerce using Bootstrap, enhancing user journey.",
      "Optimized cart interface with semantic HTML, client-side validation, and Stripe.js for checkout, improving security, SEO by 55%, and increasing transaction success rates by 80%.",
    ],
  },
};

const HomeMobile = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="flex flex-col w-[100%] justify-center items-center gap-10 md:hidden">
      <InfoGraphics />
      <NameCard />
      <Button
        className="w-[90%] h-16 scale-[1.2] bg-zinc-950 text-xl font-bold"
        variant="flat"
        onPress={onOpen}
      >
        Experience
      </Button>

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
            className="w-[172px] h-[80px] text-xl bg-zinc-950 font-bold"
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
        <img
          src="https://media.giphy.com/media/mXpFZCVJeYTXW/giphy.gif"
          className="rounded-2xl scale-[1.08]"
        />
        <p className="text-xsm font-semibold">Made with 💚 by Karthikeyan</p>
      </div>
    </div>
  );
};

export default HomeMobile;
