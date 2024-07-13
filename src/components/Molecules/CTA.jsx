import { Icon } from "@iconify/react";
import { MyButton } from "../Atoms/MyButton";

const CTA = () => {
  return (
    <div className="flex gap-4 sm:-mt-2 md:mt-0">
      <MyButton
        color="monoButtonBlue"
        size="monosm"
        startContent={<Icon icon="logos:telegram" width="1em" height="1em" />}
      >
        Telegram me
      </MyButton>

      <MyButton
        color="monoButtonGreen"
        size="monosm"
        startContent={
          <Icon icon="logos:whatsapp-icon" width="1em" height="1em" />
        }
      >
        Whatsapp me
      </MyButton>
    </div>
  );
};

export default CTA;
