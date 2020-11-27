import React, { useEffect, useState } from "react";
import axios from "axios";
import WorkStageItem from "../WorkStageItem/WorkStageItem";

const WorkStagesList = () => {
  const [workStagesList, setWorkStagesList] = useState([]);

  useEffect(() => {
    getWorkStages();
  }, []);

  const getWorkStages = async () => {
    const stagesFromServer = await axios("/api/work-stages/").then(
      (r) => r.data
    );

    setWorkStagesList(stagesFromServer);
  };

  const listToRender = workStagesList.map((stage) => {
    const { stageNum, stageText, _id: id } = stage;

    return (
      <WorkStageItem
        stageName={stageText}
        stageNum={stageNum}
        stageLength={workStagesList.length}
        key={id}
      />
    );
  });

  return <>{listToRender}</>;
};

export default WorkStagesList;
