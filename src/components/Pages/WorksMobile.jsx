import WorkItemComponent from "../Molecules/WorkItemComponent";

const WorksMobile = () => {
  return (
    <>
      <WorkItemComponent
        Header="Header 1"
        Description="Lorem ipsum dolor sit amet consectetur. Convallis morbi vitae malesuada consequat sit vestibulum. Sodales magna sed et erat est."
        Tags={["UI/UX", "Frontend", "React"]}
      />
      <WorkItemComponent
        Header="Header 1"
        Description="Lorem ipsum dolor sit amet consectetur. Convallis morbi vitae malesuada consequat sit vestibulum. Sodales magna sed et erat est."
        Tags={["UI/UX", "Frontend", "React"]}
      />
    </>
  );
};

export default WorksMobile;
