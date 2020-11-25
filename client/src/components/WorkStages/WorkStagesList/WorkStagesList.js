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

  const mapActualList = () => {
    return workStagesList.map((stage) => {
      const { stageNum, stageText, _id: id } = stage;

      return (
        <WorkStageItem stageName={stageText} stageNum={stageNum} key={id} />
      );
    });
  };

  return <>{mapActualList()}</>;
};

export default WorkStagesList;
