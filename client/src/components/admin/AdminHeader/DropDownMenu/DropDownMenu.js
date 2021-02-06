import React from "react";
import "./DropDownMenu.scss";
import Button from "../../../generalComponents/Button/Button";
import { decodeUser } from "../../../../utils/functions/decodeUser";

const DropDownMenu = ({ setDropdown }) => {
  const { firstName, lastName, login, id } = decodeUser().decoded;
  console.log(login);
  const triggerChangeLogin = () => {
    setDropdown(false);
    console.log("change login");
  };
  const triggerChangePass = () => {
    setDropdown(false);
    console.log("change password");
  };

  return (
    <div className="dropdown-wrap">
      <span className="dropdown-wrap__name">{firstName}</span>
      <span className="dropdown-wrap__name">{lastName}</span>
      <Button
        className="dropdown-wrap__btn"
        text="Изменить логин"
        onClick={triggerChangeLogin}
      />
      <Button
        className="dropdown-wrap__btn"
        text="Изменить пароль"
        onClick={triggerChangePass}
      />
    </div>
  );
};

export default DropDownMenu;
