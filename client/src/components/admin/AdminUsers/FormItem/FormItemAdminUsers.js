import React, { useState } from "react";
import "./FormItemAdminUsers.scss";
import { useDispatch } from "react-redux";
import axios from "axios";
import { toastr } from "react-redux-toastr";
import { filterWorkStages } from "../../../../store/workStages/operations";
import { addNewStage } from "../../../../store/workStages/actions";
import ChangePassForm from "../ChangePassForm/ChangePassForm";

const FormItemAdminUsers = ({ sourceObj, isNew }) => {
  const { firstName, lastName, login } = sourceObj;
  const dispatch = useDispatch();

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
