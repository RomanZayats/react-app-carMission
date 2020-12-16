import React from "react";
import { Formik, Form, Field } from "formik";
import "./FormItemWorkStages.scss";
import * as yup from "yup";
import AdminFormField from "../../AdminFormField/AdminFormField";
import Button from "../../../generalComponents/Button/Button";
import { toastr } from "react-redux-toastr";
import axios from "axios";

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

  const handleDeleteItem = (e) => {
    e.preventDefault();
    toastr.success("delete", "item deleted");
  };

  const handleUpdate = async (values) => {
    const updatedObj = {
      ...sourceObj,
      ...values,
    };
    const updatedStage = await axios
      .put(`/api/work-stages/${sourceObj._id}`, updatedObj)
      .catch((err) => {
        toastr.error(err.message);
      });

    if (updatedStage.status === 200) {
      toastr.success("Успешно", `Шаг "${values.name}" обновлён в базе данных`);
    } else {
      toastr.warning("Хм...", "Что-то пошло не так");
    }
  };

  const handleAddItem = (values) => {
    toastr.success("new", "item created");
  };

  return (
    <Formik
      initialValues={{ num, name, iconSrc }}
      validationSchema={workStagesSchema}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={isNew ? handleAddItem : handleUpdate}
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
            onClick={handleDeleteItem}
          />
        </Form>
      )}
    </Formik>
  );
};

export default FormItemWorkStages;
