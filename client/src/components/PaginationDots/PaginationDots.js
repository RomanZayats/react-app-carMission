import React from "react";
import PaginationDotItem from "../PaginationDotItem/PaginationDotItem";
import "./PaginationDots.scss"

const PaginationDots = ({componentsList}) => {
    const dotsList = componentsList.map((section, index) => {

        return <PaginationDotItem key={index}
                                  anchor={section.props.anchorName}
                                  // isVisible={section.props.children.props.isVisible}
        />
    })

    return (
        <div
            className="pagination-dots"
        >
            {dotsList}
        </div>
    );
};

export default PaginationDots;