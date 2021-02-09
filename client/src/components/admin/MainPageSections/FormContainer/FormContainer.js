import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import FormItem from "../FormItem/FormItem";
import SectionHeading from "../../../generalComponents/SectionHeading/SectionHeading";
import "./FormContainer.scss";
import { getMainSections } from "../../../../store/appMainSections/selectors";

const FormContainerMainPageSections = () => {
  const data = useSelector(getMainSections);

  const formList = data.map((section) => {
    const { heading, description, index, disabled, _id } = section;
    return (
      <FormItem
        obj={section}
        heading={heading}
        description={description}
        index={index}
        disabled={disabled}
        id={_id}
        key={_id}
      />
    );
  });

  useEffect(() => {}, [data]);

  return (
    <div className="admin">
      <div className="admin__container-head">
        <SectionHeading text="Секции главной страницы" />
      </div>
      <div className="admin__form-container">{formList}</div>
    </div>
  );
};

export default FormContainerMainPageSections;
