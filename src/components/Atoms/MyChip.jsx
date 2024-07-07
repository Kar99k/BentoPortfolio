import { Chip, extendVariants } from "@nextui-org/react";

export const MyChip = extendVariants(Chip, {
  variants: {
    color: {
      chip: "bg-[#000] text-[#fff]",
    },
  },
});
