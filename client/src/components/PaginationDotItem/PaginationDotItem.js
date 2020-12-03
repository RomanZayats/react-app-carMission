import React from "react";
import { HashLink } from "react-router-hash-link";
import "./PaginationDotItem.scss";

const PaginationDotItem = ({ anchor, isVisible }) => {
  return (
    <HashLink className="dot__link" smooth to={`#${anchor}`}>
      <div className={isVisible ? "dot dot--active" : "dot"} />
    </HashLink>
  );
};

export default PaginationDotItem;
