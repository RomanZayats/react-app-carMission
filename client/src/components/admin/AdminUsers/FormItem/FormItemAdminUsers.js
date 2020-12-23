import React, { useState } from "react";
import "./FormItemAdminUsers.scss";
import { useDispatch } from "react-redux";
import axios from "axios";
import { toastr } from "react-redux-toastr";
import { filterWorkStages } from "../../../../store/workStages/operations";
import { addNewStage } from "../../../../store/workStages/actions";
import { Field, Form, Formik } from "formik";
import AdminFormField from "../../AdminFormField/AdminFormField";
import Button from "../../../generalComponents/Button/Button";
import * as yup from "yup";

const adminUsersSchema = yup.object().shape({
  firstName: yup
    .string("Введите текст")
    .typeError("Введите текст")
    .strict(true)
    .required("Обязательное поле"),
  lastName: yup
    .string("Введите текст")
    .typeError("Введите текст")
    .strict(true)
    .required("Обязательное поле"),
  login: yup
    .string("Введите текст")
    .typeError("Введите текст")
    .strict(true)
    .required("Обязательное поле"),
});

const FormItemAdminUsers = ({ sourceObj, isNew }) => {
  const { firstName, lastName, login } = sourceObj;
  const [isDeleted, setIsDeleted] = useState(false);
  const [isPassChange, setIsPassChange] = useState(false);
  const dispatch = useDispatch();

  const handleDeleteFromDB = async (e) => {
    e.preventDefault();

    const deleted = await axios
      .delete(`/api/tfynttnfy/delete/${sourceObj._id}`)
      .catch((err) => {
        toastr.error(err.message);
      });

    if (deleted.status === 200) {
      toastr.success("Успешно", `Шаг "${login}" удалён в базе данных`);
      dispatch(filterWorkStages(sourceObj._id));
    } else {
      toastr.warning("Хм...", "Что-то пошло не так");
    }
  };

  const handleDeleteNew = (e) => {
    e.preventDefault();
    setIsDeleted(true);
    toastr.success("Успешно", "Шаг удалён до внесения в базу данных");
  };

  const handleUpdate = async (values) => {
    const updatedObj = {
      ...sourceObj,
      ...values,
    };
    const updatedStage = await axios
      .put(`/api/tfyntyn/${sourceObj._id}`, updatedObj)
      .catch((err) => {
        toastr.error(err.message);
      });

    if (updatedStage.status === 200) {
      toastr.success(
        "Успешно",
        `Шаг изменён на "${values.login}" в базе данных`
      );
    } else {
      toastr.warning("Хм...", "Что-то пошло не так");
    }
  };

  const handlePostToDB = async (values) => {
    const newStage = await axios.post("/api/dthntm/", values).catch((err) => {
      toastr.error(err.message);
    });

    if (newStage.status === 200) {
      toastr.success("Успешно", `Шаг "${values.login}" добавлен в базу данных`);
      dispatch(addNewStage(newStage.data));
    } else {
      toastr.warning("Хм...", "Что-то пошло не так");
    }
  };

  const triggerPassChange = (e) => {
    e.preventDefault();
    console.log("Show inputs");
    setIsPassChange(true);
  };

  const handlePassChange = (e) => {
    e.preventDefault();
    console.log("Send changed password");
  };

  if (isDeleted) {
    return null;
  }

  return (
    <Formik
      initialValues={{
        firstName,
        lastName,
        login,
        password: "",
        confirmPassword: "",
      }}
      validationSchema={adminUsersSchema}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={isNew ? handlePostToDB : handleUpdate}
    >
      {({ errors, touched }) => (
        <Form className="admin-stages__form-item">
          <AdminFormField
            labelClassName="admin-stages__form-label"
            fieldClassName="admin-stages__form-input"
            errorClassName="admin-stages__form-error"
            type="text"
            name="firstName"
            errors={errors}
            labelName="Имя"
          />
          <AdminFormField
            labelClassName="admin-stages__form-label"
            fieldClassName="admin-stages__form-input"
            errorClassName="admin-stages__form-error"
            type="text"
            name="lastName"
            errors={errors}
            labelName="Фамилия"
          />
          <AdminFormField
            labelClassName="admin-stages__form-label"
            fieldClassName="admin-stages__form-input"
            errorClassName="admin-stages__form-error"
            type="text"
            name="login"
            errors={errors}
            labelName="Логин"
          />
          <Field
            type="submit"
            name="submit"
            className="admin-stages__submit-btn"
            value={isNew ? "Создать шаг" : "Подтвердить изменения"}
          />
          {isPassChange && (
            <AdminFormField
              labelClassName="admin-stages__form-label"
              fieldClassName="admin-stages__form-input"
              errorClassName="admin-stages__form-error"
              type="password"
              name="password"
              errors={errors}
              labelName="Новый пароль"
            />
          )}
          {isPassChange && (
            <AdminFormField
              labelClassName="admin-stages__form-label"
              fieldClassName="admin-stages__form-input"
              errorClassName="admin-stages__form-error"
              type="password"
              name="confirmPassword"
              errors={errors}
              labelName="Повторите новый пароль"
            />
          )}
          <Button
            text={isPassChange ? "Подтвердить смену пароля" : "Сменить пароль"}
            className="admin-stages__submit-btn"
            onClick={isPassChange ? handlePassChange : triggerPassChange}
          />
          <Button
            className="admin-stages__delete-btn"
            text="&#10005;"
            onClick={isNew ? handleDeleteNew : handleDeleteFromDB}
          />
        </Form>
      )}
    </Formik>
  );
};

export default FormItemAdminUsers;
