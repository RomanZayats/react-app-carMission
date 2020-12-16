import React from "react";
import { Formik, Form, Field } from "formik";
import "./FormItemWorkStages.scss";
import * as yup from "yup";
import AdminFormField from "../../AdminFormField/AdminFormField";
import Button from "../../../generalComponents/Button/Button";

const workStagesSchema = yup.object().shape({
  num: yup
    .number()
    .typeError("Введите число")
    .positive("Отрицательный шаг? Серьёзно?")
    .integer("Введите целое число")
    .required("Обязательное поле"),
  name: yup
    .string()
    .typeError("Введите текст")
    .strict(true)
    .required("Обязательное поле"),
  iconSrc: yup
    .string("Введите текст")
    .typeError("Введите текст")
    .strict(true)
    .required("Обязательное поле"),
});

const FormItemWorkStages = ({ sourceObj, isNew }) => {
  const { num, name, iconSrc } = sourceObj;

  const handleDelete = (e) => {
    e.preventDefault();

    console.log("deleted");
  };

  const handleUpdate = (values) => {
    console.log("confirm update");
  };

  const handlePost = (values) => {
    console.log("confirm create new");
  };

  return (
    <Formik
      initialValues={{ num, name, iconSrc }}
      validationSchema={workStagesSchema}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={isNew ? handlePost : handleUpdate}
    >
      {({ errors, touched }) => (
        <Form className="admin-stages__form-item">
          <AdminFormField
            labelClassName="admin-stages__form-label"
            fieldClassName="admin-stages__form-input"
            errorClassName="admin-stages__form-error"
            type="text"
            name="num"
            errors={errors}
            labelName="Номер шага"
          />
          <AdminFormField
            labelClassName="admin-stages__form-label"
            fieldClassName="admin-stages__form-input"
            errorClassName="admin-stages__form-error"
            type="text"
            name="name"
            errors={errors}
            labelName="Название шага"
          />
          <AdminFormField
            labelClassName="admin-stages__form-label"
            fieldClassName="admin-stages__form-input"
            errorClassName="admin-stages__form-error"
            type="text"
            name="iconSrc"
            errors={errors}
            labelName="Ссылка на иконку шага"
          />
          <Field
            type="submit"
            name="submit"
            className="admin-stages__submit-btn"
            value={isNew ? "Создать шаг" : "Подтвердить изменения"}
          />
          <Button
            className="admin-stages__delete-btn"
            text="&#10005;"
            onClick={handleDelete}
          />
        </Form>
      )}
    </Formik>
  );
};

export default FormItemWorkStages;
