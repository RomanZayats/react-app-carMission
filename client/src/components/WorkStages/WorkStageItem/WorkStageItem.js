import React from "react";
import Gear from "../SVG/Gear/Gear";
import WorkStageName from "../WorkStageName/WorkStageName";

const WorkStageItem = ({ stageNum, stageName }) => {
  return (
    <div className="work-stages__item">
      {stageNum % 2 === 0 && (
        <WorkStageName
          stageName={stageName}
          classModifier="work-stages__item-name--even"
        />
      )}
      <div className="work-stages__graphics-wrapper">
        <Gear />
        <div className="work-stages__icon-wrapper" />
      </div>
      <span className="work-stages__stage-number">
        {stageNum < 10 ? `0${stageNum}` : stageNum}
      </span>
      {stageNum % 2 !== 0 && (
        <WorkStageName
          stageName={stageName}
          classModifier="work-stages__item-name--odd"
        />
      )}
    </div>
  );
};

export default WorkStageItem;
