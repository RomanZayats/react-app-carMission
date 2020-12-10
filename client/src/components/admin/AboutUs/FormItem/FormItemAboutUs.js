import React from "react";
import { Formik, Form, Field } from "formik";
import AdminFormField from "../../AdminFormField/AdminFormField";
import * as yup from "yup";

const FormItemWorkStages = ({ imgPath, title: propsTitle, text, isMain }) => {
  const title = text && !propsTitle ? text : propsTitle;

  const validationSchema = yup.object().shape({
    imgPath: yup
      .string()
      .required("Required field!")
      .min(15)
      .max(50, "Length err! String must contain 15-50 chars"),
    title: yup
      .string()
      .required("Required field!")
      .min(15)
      .max(600, "Length err! String must contain 15-600 chars"),
  });

  return (
    <Formik
      initialValues={{ imgPath, title }}
      validationSchema={validationSchema}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={(values) => {
        console.log("confirm submit");
      }}
    >
      {({ errors, touched }) => (
        <Form className="admin__form-item">
          <AdminFormField
            className="admin__form-label"
            type="input"
            name="imgPath"
            errors={errors}
            labelName="Путь к картинке"
          />
          <AdminFormField
            as={isMain ? "textarea" : "input"}
            type={isMain ? "textarea" : "input"}
            fieldClassName={isMain ? "admin__form-textarea" : ""}
            name="title"
            errors={errors}
            labelName={isMain ? "Текстовый контент" : "Подпись к картинке"}
          />
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

export default FormItemWorkStages;
