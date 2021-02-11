import React from "react";
import PaginationDotItem from "../PaginationDotItem/PaginationDotItem";
import "./PaginationDots.scss";
import { v4 as uuidv4 } from "uuid";

const PaginationDots = ({ componentsList }) => {
  const dotsList = componentsList.map((section) => {
    return <PaginationDotItem key={uuidv4()} anchor={section.name} />;
  });

  return <div className="pagination-dots">{dotsList}</div>;
};

export default PaginationDots;
