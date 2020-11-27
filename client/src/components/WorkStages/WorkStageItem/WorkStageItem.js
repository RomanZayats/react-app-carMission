import React from "react";
import Gear from "../SVG/Gear/Gear";
import WorkStageName from "../WorkStageName/WorkStageName";
import Arrow from "../SVG/Arrow/Arrow";

const WorkStageItem = ({ stageNum, stageName, stageLength }) => {
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
        {stageNum < stageLength && (
          <Arrow className="work-stages__icon-arrow" />
        )}
        <span className="work-stages__stage-number">
          {stageNum < 10 ? `0${stageNum}` : stageNum}
        </span>
      </div>
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
