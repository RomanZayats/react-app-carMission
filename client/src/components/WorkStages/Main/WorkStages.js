import React from "react";
import WorkStagesList from "../WorkStagesList/WorkStagesList";
import Button from "../../generalComponents/Button/Button";

const WorkStages = () => {
  return (
    <section>
      <div>
        <div>
          <WorkStagesList />
        </div>
        <p>description</p>
        <Button text="ololo" />
      </div>
    </section>
  );
};

export default WorkStages;
