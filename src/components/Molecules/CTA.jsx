import { Icon } from "@iconify/react";
import { MyButton } from "../Atoms/MyButton";

const Cta = () => {
  return (
    <div className="flex gap-4 sm:-mt-2 md:mt-0">
      <MyButton
        color="monoButtonBlue"
        size="monosm"
        startContent={<Icon icon="logos:telegram" width="1em" height="1em" />}
        onClick={() =>
          window.open(
            "https://telegram.me/karkey5994",
            "_blank",
            "noopener noreferrer"
          )
        }
      >
        Telegram me
      </MyButton>

      <MyButton
        color="monoButtonGreen"
        size="monosm"
        startContent={
          <Icon icon="logos:whatsapp-icon" width="1em" height="1em" />
        }
        aria-label="Chat on WhatsApp"
        onClick={() =>
          window.open(
            "https://wa.me/919751744041",
            "_blank",
            "noopener noreferrer"
          )
        }
      >
        Whatsapp me
      </MyButton>
    </div>
  );
};

export default Cta;
