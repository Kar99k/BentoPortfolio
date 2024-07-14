const TimelineItem = ({ timeline, title, company, description }) => {
  return (
    <>
      <p className="text-xsm font-semibold italic">{timeline}</p>

      <p className="text-sm font-bold text-lime-400">{title}</p>
      <p className="text-xsm font-semibold italic">{company}</p>

    
        {description.map((item, index) => {
          return (
            <p className="text-xsm mt-1 text-zinc-400" key={index}>
              🔸{item}
            </p>
          );
        })}
  
    </>
  );
};

export default TimelineItem;
