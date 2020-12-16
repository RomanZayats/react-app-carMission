import React from "react";
import { useSelector } from "react-redux";
import { getWorkStages } from "../../../../store/workStages/selectors";
import FormItemWorkStages from "../FormItem/FormItemWorkStages";
import SectionHeading from "../../../generalComponents/SectionHeading/SectionHeading";
import "./FormContainerWorkStages.scss";

const FormContainerWorkStages = () => {
  const data = useSelector(getWorkStages);

  const formList = data.map((stage) => {
    return <FormItemWorkStages sourceObj={stage} key={stage._id} />;
  });

  return (
    <div className="admin-stages">
      <SectionHeading text="Этапы сотрудничества" />
      <div className="admin-stages__form-container">{formList}</div>
    </div>
  );
};

export default FormContainerWorkStages;
