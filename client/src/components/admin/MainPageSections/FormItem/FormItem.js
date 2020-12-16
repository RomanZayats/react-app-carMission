import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import "./FormItem.scss";
import AdminFormField from "../../AdminFormField/AdminFormField";
import axios from "axios";
import { saveErrObjAction } from "../../../../store/errorObject/saveErrObjAction";
import { openErrModal } from "../../../../store/ErrorModal/openErrModal";
import { useDispatch } from "react-redux";
import useUpdateTimeout from "../../../../utils/hooks/useUpdateTimeout";
import Button from "../../../generalComponents/Button/Button";
import UpdateConfirmation from "../../updateConfirmation/UpdateConfirmation";
import { validationSchema } from "../validationSchema";

const FormItem = ({ obj }) => {

  const { heading, description, index, disabled, _id } = obj;
  const dispatch = useDispatch();
  const [isUpdated, setIsUpdated] = useState(false);
  const timeOut = useUpdateTimeout(setIsUpdated);

  useEffect(() => {
    return () => clearTimeout(timeOut);
  }, [timeOut]);

  const onSubmit = async (values) => {

    const updatedObj = { ...obj, ...values };

    const sectionToServer = await axios({
      method: "PUT",
      url: `/api/sections-main/${_id}`,
      data: updatedObj
    }).catch((err) => {
      dispatch(saveErrObjAction(err));
      dispatch(openErrModal);
    });

    if (sectionToServer.status === 200) {
      setIsUpdated(true);
    }
  };

  return (
    <Formik
      initialValues={{ heading, description, index, disabled }}
      validationSchema={validationSchema}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      {({ errors, touched }) => (
        <Form className="admin__form-item">
          <AdminFormField
            className="admin__form-label"
            type="input"
            name="heading"
            errors={errors}
            labelName="Заголовок"
          />
          <AdminFormField
            className="admin__form-label"
            type="input"
            name="description"
            errors={errors}
            labelName="Описание"
            as="textarea"
          />
          <AdminFormField
            className="admin__form-label"
            type="input"
            name="index"
            errors={errors}
            labelName="Порядок при отображении"
          />
          <label className="admin__form-label admin__input">
            <Field
              type="checkbox"
              name="disabled"
            />
            &nbsp;Скрыть секцию на странице
          </label>

          <div className="admin__buttons-box">
            <Button
              className="admin__delete-btn"
              text="Delete item"
              onClick={(event) => {
                event.preventDefault();
              }}
            />
            <Field
              type="submit"
              disabled={isUpdated}
              name="submit"
              className="admin__submit-btn"
              value="Submit changes"
            />
            {isUpdated && <UpdateConfirmation/>}
          </div>


        </Form>
      )}
    </Formik>
  );
};

export default FormItem;
