import { Image } from "@nextui-org/react";
import Marquee from "../magicui/marquee";
import react from "@/assets/logos/React.svg";
import js from "@/assets/logos/JS.svg";
import Css from "@/assets/logos/Css.svg";
import Html from "@/assets/logos/Html.svg";
import electron from "@/assets/logos/Electron.webp";
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

const LogoMarqueeFull = () => {
  return (
    <div className="h-48 overflow-hidden md:-mt-2 max-md:hidden">
      <div className="w-28 h-[196px] absolute z-20 "></div>

      <div className="flex gap-1">
        <Marquee vertical="true" className="[--duration:10s]">
          <Image isBlurred alt="javascript" width={32} src={js} />
          <Image isBlurred alt="html" width={32} src={Html} />
          <Image isBlurred alt="css" width={32} src={Css} />
          <Image isBlurred alt="react" width={32} src={react} />
          <Image isBlurred alt="next" width={32} src={Next} />
          <Image isBlurred alt="angular" width={32} src={Angular} />
          <Image isBlurred alt="electron" width={32} src={electron} />
        </Marquee>

        <Marquee
          vertical="true"
          reverse="true"
          className="[--duration:10s] [--gap:0.8em]"
        >
          <Image isBlurred alt="Boot" width={32} src={Boot} />
          <Image isBlurred alt="Tail" width={32} src={Tail} />
          <Image isBlurred alt="jquery" width={32} src={jQuery} />
          <Image
            isBlurred
            alt="flutter"
            width={24}
            className="ml-1"
            src={Flutter}
          />
          <Image isBlurred alt="graphql" width={32} src={Graphql} />
        </Marquee>

        <Marquee vertical="true" className="[--duration:10s] [--gap:0.8em]">
          <Image isBlurred alt="ae" width={32} src={Ae} />
          <Image isBlurred alt="ps" width={32} src={Ps} />
          <Image isBlurred alt="pr" width={32} src={Pr} />
          <Image
            radius="none"
            isBlurred
            alt="figma"
            width={16}
            src={Figma}
            className="ml-2"
          />
        </Marquee>
      </div>
    </div>
  );
};

export default LogoMarqueeFull;
