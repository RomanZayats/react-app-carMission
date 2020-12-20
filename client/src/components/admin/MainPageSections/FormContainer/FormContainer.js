import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import FormItem from "../FormItem/FormItem";
import SectionHeading from "../../../generalComponents/SectionHeading/SectionHeading";
import "./FormContainer.scss";
import { getMainSections } from "../../../../store/appMainSections/selectors";
import Button from "../../../generalComponents/Button/Button";
import axios from "axios";
import { saveErrObjAction } from "../../../../store/errorObject/saveErrObjAction";
import { openErrModal } from "../../../../store/ErrorModal/openErrModal";

const FormContainerMainPageSections = () => {
  const data = useSelector(getMainSections);
  const dispatch = useDispatch();
  const [sectionCreationStatus, setSectionCreationStatus] = useState("no");
  const formList = data.map((section) => {
    const { heading, description, index, disabled, _id } = section;
    return <FormItem obj={section} heading={heading} description={description} index={index} disabled={disabled}
                     id={_id} key={uuidv4()}/>;
  });

  const addSection = async () => {
    const createSection = await axios({
      method: "POST",
      url: "/api/sections-main"
    }).catch((err) => {
      dispatch(saveErrObjAction(err));
      dispatch(openErrModal);
    });

    if (createSection.status === 200) {
      setSectionCreationStatus("created");
    }
  };

  const emptySectionObject = {
    heading: "",
    description: "",
    index: "",
    disabled: true
  };

  return (
    <div className="admin__form-container">
      <div className="admin__container-head">
        <SectionHeading text="Секции главной страницы"/>
      </div>
      {formList}

      <Button text="+" className="admin__add-btn" onClick={() => {setSectionCreationStatus("creating");}}/>

      {sectionCreationStatus === "creating" ? <FormItem obj={emptySectionObject}
                                                        sectionCreationStatus={sectionCreationStatus}
                                                        setSectionCreationStatus={setSectionCreationStatus}/> : null}
    </div>
  );
};

export default FormContainerMainPageSections;
