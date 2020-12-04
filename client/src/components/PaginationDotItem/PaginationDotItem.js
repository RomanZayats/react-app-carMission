import React from "react";
import { NavHashLink } from "react-router-hash-link";
import "./PaginationDotItem.scss";
import { useDispatch } from "react-redux";
import {
  setDotClick,
  setTargetSection,
} from "../../store/paginationDotClick/actions";

const PaginationDotItem = ({ anchor, isVisible }) => {
  const dispatch = useDispatch();

  const setClick = () => {
    dispatch(setDotClick());
    dispatch(setTargetSection(anchor));
  };

  return (
    <NavHashLink
      activeClassName="dot__link--active"
      className="dot__link"
      smooth
      to={`#${anchor}`}
      onClick={setClick}
    >
      <div className={isVisible ? "dot dot--active" : "dot"} />
    </NavHashLink>
  );
};

export default PaginationDotItem;
