// MyButton.tsx
import { extendVariants, Button } from "@nextui-org/react";

export const MyButton = extendVariants(Button, {
  variants: {
    color: {
      navButton: "bg-[#99d52a] text-[#11181C]",
      monoButtonBlue: "bg-[#00254D] text-[#0091FF]",
      monoButtonGreen: "bg-[#153226] text-[#30A46C]",
      violetCTA: "bg-[#644FC1] text-[#fff]",
    },

    size: {
      sm: "px-3 w-[87px] h-[40px] text-sm gap-4 rounded-[10px]",
    },

    variant: {
      ghost: "bg-transparent border",
    },
  },
  compoundVariants: [
    {
      color: "navButton",
      class:
        "px-3 py-2 w-[87px] h-[40px] text-sm gap-4 rounded-[10px] font-bold justify-center items-center gap-1 inline-flex",
    },
    {
      color: "violetCTA",
      class: "font-bold",
    },
    {
      variant: "ghost",
      class: "text-[#fff] border-[#99d52a]",
    },
  ],
});
