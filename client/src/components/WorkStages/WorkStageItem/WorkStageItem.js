import React from "react";
import Gear from "../SVG/Gear/Gear";
import WorkStageName from "../WorkStageName/WorkStageName";

const WorkStageItem = ({ stageNum, stageName }) => {
  return (
    <div className="work-stages__item">
      <WorkStageName stageName={stageName} />
      <div className="work-stages__graphics-wrapper">
        <Gear />
        <div className="work-stages__icon-wrapper" />
      </div>
      <span className="work-stages__stage-number">
        {stageNum < 10 ? `0${stageNum}` : stageNum}
      </span>
    </div>
  );
};

export default WorkStageItem;
