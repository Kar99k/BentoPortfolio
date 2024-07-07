import { Card, CardFooter, CardHeader } from "@nextui-org/react";

const Metrics = (props) => {

  return (
    <Card className="w-24 h-[88px] px-5 py-5 gap-1">
      <CardHeader className="w-full h-1/2 text-4xl font-bold text-lime9 justify-center">
        {props.header}
      </CardHeader>
      <CardFooter className="w-full text-white text-sm font-medium justify-center leading-normal">
        {props.footer}
      </CardFooter>
    </Card>
  );
};

export default Metrics;
