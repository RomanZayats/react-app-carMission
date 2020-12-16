import React from "react";
import { Field } from "formik";
import "./AdminFormField.scss";

const AdminFormField = ({
  as,
  name,
  errors,
  type,
  labelName,
  labelClassName,
  fieldClassName,
  errorClassName,
}) => {
  console.log(errors);
  return (
    <label className={labelClassName || "admin__label"}>
      <span className="admin__label-name">{labelName}</span>
      <Field
        as={as}
        name={name}
        type={type}
        className={fieldClassName || "admin__input"}
      />
      {errors[name] && (
        <span className={errorClassName || "admin__error-msg"}>
          {errors[name]}
        </span>
      )}
    </label>
  );
};

export default AdminFormField;
