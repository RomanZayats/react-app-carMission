import React, { useState, useEffect } from "react";
import FormItemAdminUsers from "../FormItem/FormItemAdminUsers";
import SectionHeading from "../../../generalComponents/SectionHeading/SectionHeading";
import "./FormContainerAdminUsers.scss";
import Button from "../../../generalComponents/Button/Button";
import axios from "axios";
import { toastr } from "react-redux-toastr";

const FormContainerAdminUsers = () => {
  const [formList, setFormList] = useState([]);
  // const [admins, setAdmins] = useState([]);

  const mapFormToRender = (admins) => {
    const forms = admins.map((admin) => {
      return <FormItemAdminUsers sourceObj={admin} key={admin._id} />;
    });

    setFormList(forms);
  };
  useEffect(() => {
    const getAdmins = async () => {
      const adminsFromDB = await axios
        .get("/api/admin-users/")
        .catch((err) => toastr.error(err.message));

      if (adminsFromDB.status === 200) {
        console.log(adminsFromDB.data);
        mapFormToRender(adminsFromDB.data);
      } else {
        toastr.warning("Хм...", "Что-то пошло не так");
      }
    };

    getAdmins();
  }, []);

  const createNewFormItem = () => {
    const empty = {
      num: "",
      name: "",
      iconSrc: "",
    };

    return <FormItemAdminUsers sourceObj={empty} isNew key={Date.now()} />;
  };

  const handleAddItem = () => {
    const form = createNewFormItem();

    const updated = formList.map((i) => i);
    updated.push(form);
    setFormList(updated);
  };

  return (
    <div className="admin-stages">
      <SectionHeading text="Администраторы" />
      <div className="admin-stages__form-container">{formList}</div>
      <Button
        text="+"
        className="admin-stages__add-btn"
        onClick={handleAddItem}
      />
    </div>
  );
};

export default FormContainerAdminUsers;
