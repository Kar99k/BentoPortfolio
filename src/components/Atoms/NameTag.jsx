import { Icon } from "@iconify/react";
import WordRotate from "../magicui/word-rotate";

const NameTag = () => {
  return (
    <div className="">
      <div className="text-2xl font-bold flex gap-1 justify-center items-center">
        Karthikeyan
        <Icon
          icon="material-symbols:verified"
          color="#99D52A"
          width="1em"
          height="1em"
        />
      </div>
      <div className="absolute top-6 flex gap-1 items-center">
        <div className="text-lime9 text-sm font-medium">I&lsquo;m </div>
        <WordRotate
          className="text-sm text-white font-medium"
          words={[
            "a FrontEnd Engineer",
            "a Video Editor",
            "an UI/UX Designer",
            "a Graphic Designer",
            "a Motion graphics artist",
          ]}
        />
      </div>
    </div>
  );
};

export default NameTag;
