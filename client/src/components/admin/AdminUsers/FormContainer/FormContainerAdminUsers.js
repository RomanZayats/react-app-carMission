import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getWorkStages } from "../../../../store/workStages/selectors";
import FormItemAdminUsers from "../FormItem/FormItemAdminUsers";
import SectionHeading from "../../../generalComponents/SectionHeading/SectionHeading";
import "./FormContainerAdminUsers.scss";
import Button from "../../../generalComponents/Button/Button";

const FormContainerAdminUsers = () => {
  const [formList, setFormList] = useState([]);
  const data = useSelector(getWorkStages);

  useEffect(() => {
    const mapFormToRender = () => {
      return data.map((stage) => {
        return <FormItemAdminUsers sourceObj={stage} key={stage._id} />;
      });
    };
    setFormList(mapFormToRender());
  }, [data]);

  const createNewFormItem = () => {
    const empty = {
      num: "",
      name: "",
      iconSrc: "",
    };

    return <FormItemAdminUsers sourceObj={empty} isNew key={Date.now()} />;
  };

  const handleAddItem = () => {
    const form = createNewFormItem();

    const updated = formList.map((i) => i);
    updated.push(form);
    setFormList(updated);
  };

  return (
    <div className="admin-stages">
      <SectionHeading text="Этапы сотрудничества" />
      <div className="admin-stages__form-container">{formList}</div>
      <Button
        text="+"
        className="admin-stages__add-btn"
        onClick={handleAddItem}
      />
    </div>
  );
};

export default FormContainerAdminUsers;
