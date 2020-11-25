import React from "react";
import "./WorkStages.scss";
import WorkStagesList from "../WorkStagesList/WorkStagesList";
import Button from "../../generalComponents/Button/Button";

const WorkStages = () => {
  return (
    <section className="work-stages">
      <div className="work-stages__content">
        <h3 className="work-stages__head">Section head</h3>
        <div className="work-stages__items-wrapper">
          <WorkStagesList />
        </div>
        <p className="work-stages__description">description</p>
        <Button text="ololo" className="button-callBack-bigger" />
      </div>
    </section>
  );
};

export default WorkStages;
