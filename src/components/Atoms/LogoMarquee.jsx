import Marquee from "../magicui/marquee";
import { Icon } from "@iconify/react";

const LogoMarquee = () => {
  return (
    <div className="h-36 overflow-hidden md:hidden">
      <div className="w-28 h-48 absolute z-20 -mt-1"></div>

      <div className="flex gap-1">
        <Marquee vertical="true" className="[--duration:15s]">
          <Icon
            icon="fa6-brands:square-js"
            width={32}
            style={{ color: "#eeff00" }}
          />
          <Icon icon="vscode-icons:file-type-html" width={32} />
          <Icon icon="devicon:css3" width={32} />
          <Icon icon="logos:react" width={32} />
          <Icon icon="logos:nextjs-icon" width={32} />
          <Icon icon="vscode-icons:file-type-angular" width={32} />
          <Icon icon="logos:electron" width={32} />
        </Marquee>

        <Marquee
          vertical="true"
          reverse="true"
          className="[--duration:15s] [--gap:0.8em]"
        >
          <Icon icon="logos:bootstrap" width={32} />
          <Icon icon="logos:tailwindcss-icon" width={32} />
          <Icon
            icon="devicon-plain:jquery-wordmark"
            style={{ color: "#eeff00" }}
            width={32}
          />
          <Icon icon="logos:flutter" width={32} />
          <Icon icon="logos:graphql" width={32} />
          <Icon icon="logos:adobe-after-effects" width={32} />
          <Icon
            icon="simple-icons:adobepremierepro"
            style={{ color: "#8800d1" }}
            width={32}
          />

          <Icon icon="logos:figma" width={32} />
        </Marquee>
      </div>
    </div>
  );
};

export default LogoMarquee;
