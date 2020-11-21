import React from "react";
import PropTypes from "prop-types";
import "./FilterFieldTitle.scss";

export const FilterFieldTitle = ({text}) => {
    return (
        <h4 className="filter__field-title">{text}</h4>
    );
};

FilterFieldTitle.propTypes = {
    text: PropTypes.string.isRequired
};
