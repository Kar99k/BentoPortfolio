import { Image } from "@nextui-org/react";
import Marquee from "../magicui/marquee";
import react from "@/assets/logos/React.svg";
import js from "@/assets/logos/JS.svg";
import Css from "@/assets/logos/Css.svg";
import Html from "@/assets/logos/Html.svg";
import electron from "@/assets/logos/Electron.png";
import Angular from "@/assets/logos/Angular.svg";
import Ae from "@/assets/logos/Ae.svg";
import Ps from "@/assets/logos/Ps.svg";
import Pr from "@/assets/logos/Pr.svg";
import Figma from "@/assets/logos/Figma.svg";
import Next from "@/assets/logos/Next.svg";
import Boot from "@/assets/logos/Boot.svg";
import Tail from "@/assets/logos/Tail.svg";
import jQuery from "@/assets/logos/jQuery.svg";
import Flutter from "@/assets/logos/Flutter.svg";
import Graphql from "@/assets/logos/Graphql.svg";

const LogoMarquee = () => {
  return (
    <div className="h-36 overflow-hidden md:hidden">
      <div className="w-28 h-48 bg-custom-gradient absolute z-20 -mt-1"></div>

      <div className="flex gap-1">
        <Marquee vertical="true" className="[--duration:15s]">
          <Image isBlurred width={32} src={js} />
          <Image isBlurred width={32} src={Html} />
          <Image isBlurred width={32} src={Css} />
          <Image isBlurred width={32} src={react} />
          <Image isBlurred width={32} src={Next} />
          <Image isBlurred width={32} src={Angular} />
          <Image isBlurred width={32} src={electron} />
        </Marquee>

        <Marquee
          vertical="true"
          reverse="true"
          className="[--duration:15s] [--gap:0.8em]"
        >
          <Image isBlurred width={32} src={Boot} />
          <Image isBlurred width={32} src={Tail} />
          <Image isBlurred width={32} src={jQuery} />
          <Image isBlurred width={24} className="ml-1" src={Flutter} />
          <Image isBlurred width={32} src={Graphql} />
          <Image isBlurred width={32} src={Ae} />
          <Image isBlurred width={32} src={Ps} />
          <Image isBlurred width={32} src={Pr} />
          <Image
            radius="none"
            isBlurred
            width={16}
            src={Figma}
            className="ml-2"
          />
        </Marquee>
      </div>
    </div>
  );
};

export default LogoMarquee;
