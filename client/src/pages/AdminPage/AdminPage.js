import React from "react";
import AdminHeader from "../../components/admin/AdminHeader/AdminHeader";
import SideBar from "../../components/admin/SideBar/Main/SideBar";
import { useSelector } from "react-redux";
import { getNavbarData } from "../../store/navbar/selectors";
import AdminRoutes from "../../routes/AdminRoutes";
import "./AdminPage.scss";

const AdminPage = () => {
  const navFromDB = useSelector(getNavbarData)
    .map((nav) => nav.sectionId)
    .filter((i) => !!i !== false);
  const linksId = ["main-page-sections"];
  navFromDB.forEach((link) => {
    const normalLink = link
      .split("")
      .filter((c) => c !== "#")
      .join("");
    linksId.push(normalLink);
  });

  return (
    <>
      <AdminHeader />
      <div className="admin-wrapper">
        <SideBar linksId={linksId} />
        <AdminRoutes linksId={linksId} />
      </div>
    </>
  );
};

export default AdminPage;
