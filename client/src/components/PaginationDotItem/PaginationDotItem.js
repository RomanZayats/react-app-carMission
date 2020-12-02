import React from "react";
import {HashLink} from "react-router-hash-link";
import "./PaginationDotItem.scss"

const PaginationDotItem = ({anchor, isVisible}) => {

    return (
        <div className={isVisible ? "dot dot--active" : "dot"}>
            <HashLink smooth to={`#${anchor}`}>To</HashLink>
        </div>
    );
};

export default PaginationDotItem;