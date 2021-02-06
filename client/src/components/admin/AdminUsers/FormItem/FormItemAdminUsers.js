import React from "react";
import "./FormItemAdminUsers.scss";

import ChangeCredForm from "../../AdminHeader/DropDownMenu/ChangeCredForm/ChangeCredForm";

const FormItemAdminUsers = ({ sourceObj, isNew }) => {
  const { firstName, lastName, login } = sourceObj;

  return (
    <div>
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{login}</p>
      <ChangeCredForm />
    </div>
  );
};

export default FormItemAdminUsers;
