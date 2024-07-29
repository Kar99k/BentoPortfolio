import { Card, extendVariants } from "@nextui-org/react";

export const MyCard = extendVariants(Card, {
  variants: {
    color: {
      zinc: "bg-[#141513]",
    },
  },
});
