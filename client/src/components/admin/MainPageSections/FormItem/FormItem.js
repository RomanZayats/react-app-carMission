import React from "react";
import { Formik, Form, Field } from "formik";
import "./FormItem.scss";
import AdminFormField from "../../AdminFormField/AdminFormField";
import axios from "axios";
import { useDispatch } from "react-redux";
import { validationSchema } from "../validationSchema";
import { loadMainSection } from "../../../../store/appMainSections/operations";
import { toastr } from "react-redux-toastr";

const FormItem = ({ obj }) => {
  const { heading, description, index, disabled, name, _id } = obj;
  const dispatch = useDispatch();

  const onSubmit = async (values) => {
    const updatedObj = { ...obj, ...values };

    const sectionToServer = await axios({
      method: "PUT",
      url: `/api/sections-main/${_id}`,
      data: updatedObj,
    }).catch((err) => {
      toastr.error(err.message);
    });

    if (sectionToServer.status === 200) {
      dispatch(loadMainSection());
      toastr.success(
        "Успешно",
        `Секция "${values.name}" изменена в базе данных`
      );
    } else {
      toastr.warning("Хм...", "Что-то пошло не так");
    }
  };

  return (
    <Formik
      initialValues={{
        heading,
        description,
        index,
        disabled,
        name,
      }}
      validationSchema={validationSchema}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={onSubmit}
    >
      {({ errors }) => (
        <Form className="admin__form-item">
          <AdminFormField
            className="admin__form-label"
            type="text"
            name="heading"
            errors={errors}
            labelName="Заголовок"
          />
          <AdminFormField
            className="admin__form-label"
            type="text"
            name="description"
            errors={errors}
            labelName="Описание"
            as="textarea"
          />
          <AdminFormField
            className="admin__form-label"
            type="text"
            name="index"
            errors={errors}
            labelName="Порядок при отображении"
          />
          <AdminFormField
            className="admin__form-label"
            type="text"
            name="name"
            errors={errors}
            labelName="Название секции"
          />

          <label className="admin__label admin__checkbox-label">
            <Field
              className="admin__input admin__checkbox-input"
              type="checkbox"
              name="disabled"
            />
            <span className="admin__label-name admin__checkbox-label-name">
              &nbsp;Скрыть секцию на странице
            </span>
          </label>

          <Field
            type="submit"
            name="submit"
            className="admin__submit-btn"
            value="Submit changes"
          />
        </Form>
      )}
    </Formik>
  );
};
export default FormItem;
