import { Card, Image } from "@nextui-org/react";
import avatar from "../../../public/avatar.svg";
import MyChip from "./MyChip";

const ProPic = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Card className="w-[84px] h-[84px]" radius="md">
        <Image
          isBlurred
          alt="Lorelei avatar from dicebear.com"
          src={avatar}
          height={84}
          width={84}
        />
      </Card>

      <MyChip text="Open to Work"></MyChip>
    </div>
  );
};

export default ProPic;
