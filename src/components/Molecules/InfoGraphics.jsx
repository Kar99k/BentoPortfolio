import Metrics from "../Atoms/Metrics";

const InfoGraphics = () => {
  return (
    <div className="w-[312px] flex flex-row gap-3">
      <Metrics header={20} footer="Projects" />
      <Metrics header={4} footer="years Xperience" />
      <Metrics header={15} footer="Clients" />
    </div>
  );
};

export default InfoGraphics;
