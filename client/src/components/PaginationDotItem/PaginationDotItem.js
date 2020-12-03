import React from "react";
import { NavHashLink } from "react-router-hash-link";
import "./PaginationDotItem.scss";

const PaginationDotItem = ({ anchor, isVisible }) => {
  return (
    <NavHashLink
      activeClassName="dot__link--active"
      className="dot__link"
      smooth
      to={`#${anchor}`}
    >
      <div className={isVisible ? "dot dot--active" : "dot"} />
    </NavHashLink>
  );
};

export default PaginationDotItem;
