import React from "react";
import "./FormItemAdminUsers.scss";

import ChangePassForm from "../ChangePassForm/ChangePassForm";

const FormItemAdminUsers = ({ sourceObj, isNew }) => {
  const { firstName, lastName, login } = sourceObj;

  return (
    <div>
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{login}</p>
      <ChangePassForm />
    </div>
  );
};

export default FormItemAdminUsers;
