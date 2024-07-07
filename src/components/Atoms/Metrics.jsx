/* eslint-disable react/prop-types */
import { Card, CardFooter, CardHeader } from "@nextui-org/react";
import NumberTicker from "../magicui/number-ticker";

const Metrics = (props) => {
  return (
    <Card className="w-full h-[88px] p-2 flex flex-col justify-between items-center">
      <CardHeader className="mt-2 h-1/2 text-4xl font-bold text-lime9 text-center justify-center tracking-tighter">
        <NumberTicker value={props.header} stiffVal={100} />
      </CardHeader>
      <CardFooter className="text-white text-sm font-medium text-center justify-center leading-none mb-2">
        {props.footer}
      </CardFooter>
    </Card>
  );
};

export default Metrics;
