import React from "react";
import WorkStagesList from "../WorkStagesList/WorkStagesList";
import Button from "../../generalComponents/Button/Button";

const WorkStages = () => {
  return (
    <section className="work-stages">
      <div className="work-stages__content">
        <div className="work-stages__items-wrapper">
          <WorkStagesList />
        </div>
        <p className="work-stages__description">description</p>
        <Button text="ololo" />
      </div>
    </section>
  );
};

export default WorkStages;
