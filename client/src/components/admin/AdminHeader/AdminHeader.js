import React from "react";
import Button from "../../generalComponents/Button/Button";
import "./AdminHeader.scss";
import { useDispatch } from "react-redux";
import { setIsAuth } from "../../../store/auth/actions";
import axios from "axios";
import AccountIcon from "./SVG/AccountIcon";

const AdminHeader = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("token");
    axios.defaults.headers.common.Authorization = null;
    dispatch(setIsAuth(false));
  };

  return (
    <div className="admin-header">
      <h3 className="admin-header__head">Admin Page</h3>
      <div className="admin-header__btn-wrapper">
        <Button text={<AccountIcon />} className="admin-header__account" />
        {/* <Button */}
        {/*  className="button2-send-request" */}
        {/*  text="Change login" */}
        {/*  onClick={handleLogout} */}
        {/* /> */}
        {/* <Button */}
        {/*  className="button2-send-request" */}
        {/*  text="Change password" */}
        {/*  onClick={handleLogout} */}
        {/* /> */}
        <Button
          className="button2-send-request"
          text="Logout"
          onClick={handleLogout}
        />
      </div>
    </div>
  );
};

export default AdminHeader;
