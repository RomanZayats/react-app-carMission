import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import AdminFormField from "../../AdminFormField/AdminFormField";
import * as yup from "yup";
import Button from "../../../generalComponents/Button/Button";

const passwordSchema = yup.object().shape({
  oldPassword: yup
    .string("Введите текст")
    .typeError("Введите текст")
    .strict(true)
    .required("Обязательное поле"),
  password: yup
    .string("Введите текст")
    .typeError("Введите текст")
    .strict(true)
    .required("Обязательное поле"),
  confirmPassword: yup
    .string("Введите текст")
    .typeError("Введите текст")
    .strict(true)
    .required("Обязательное поле"),
});

const ChangePassForm = () => {
  const [isPassChange, setIsPassChange] = useState(false);

  const triggerPassChange = (e) => {
    e.preventDefault();
    setIsPassChange(true);
  };

  const handlePassChange = (values) => {
    console.log(isPassChange);
    setIsPassChange(false);
  };

  return (
    <Formik
      initialValues={{
        oldPassword: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={passwordSchema}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={handlePassChange}
    >
      {({ errors, touched }) => (
        <Form className="admin-stages__form-item">
          {isPassChange && (
            <>
              <AdminFormField
                labelClassName="admin-stages__form-label"
                fieldClassName="admin-stages__form-input"
                errorClassName="admin-stages__form-error"
                type="password"
                name="oldPassword"
                errors={errors}
                labelName="Старый пароль"
              />
              <AdminFormField
                labelClassName="admin-stages__form-label"
                fieldClassName="admin-stages__form-input"
                errorClassName="admin-stages__form-error"
                type="password"
                name="password"
                errors={errors}
                labelName="Новый пароль"
              />
              <AdminFormField
                labelClassName="admin-stages__form-label"
                fieldClassName="admin-stages__form-input"
                errorClassName="admin-stages__form-error"
                type="password"
                name="confirmPassword"
                errors={errors}
                labelName="Повторите новый пароль"
              />
            </>
          )}
          {isPassChange ? (
            <Field
              type="submit"
              name="submit"
              className="admin-stages__submit-btn"
              value={"Подтвердить смену пароля"}
            />
          ) : (
            <Button
              text="Сменить пароль"
              className="admin-stages__submit-btn"
              onClick={triggerPassChange}
            />
          )}
        </Form>
      )}
    </Formik>
  );
};

export default ChangePassForm;
