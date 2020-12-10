import React from "react";
import { useSelector } from "react-redux";
import { getNavbarData } from "../../../../store/navbar/selectors";
import SideBarItem from "../SideBarItem/SideBarItem";
import "./SideBar.scss";

const SideBar = ({ linksId }) => {
  const linksList = linksId.map((id, index) => {
    return <SideBarItem id={id} key={index} />;
  });

  return (
    <nav className="admin-sidebar">
      <ul className="admin-sidebar__list">{linksList}</ul>
    </nav>
  );
};

export default SideBar;
