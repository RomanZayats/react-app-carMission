import React, { useState, useEffect } from "react";
import FormItemAdminUsers from "../FormItem/FormItemAdminUsers";
import SectionHeading from "../../../generalComponents/SectionHeading/SectionHeading";
import "./FormContainerAdminUsers.scss";
import Button from "../../../generalComponents/Button/Button";
import axios from "axios";
import { toastr } from "react-redux-toastr";
import InviteForm from "../InviteForm/InviteForm";
import { decodeUser } from "../../../../utils/functions/decodeUser";
import AdminModal from "../../AdminModal/AdminModal";

const FormContainerAdminUsers = () => {
  const [formList, setFormList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [admins, setAdmins] = useState([]);
  const { decoded } = decodeUser();
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

  return (
    <div className="admin-stages">
      <SectionHeading text="Администраторы" />
      <div className="admin-stages__form-container">{formList}</div>
      {decoded.isOwner && (
        <Button
          text="+"
          className="admin-stages__add-btn"
          onClick={() => setIsModalOpen(true)}
        />
      )}
      <AdminModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        head="Приглашение пользователя"
      >
        <InviteForm />
      </AdminModal>
    </div>
  );
};

export default FormContainerAdminUsers;
