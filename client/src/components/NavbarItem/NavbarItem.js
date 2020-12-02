import React from "react";
import PropTypes from "prop-types";
import { HashLink } from "react-router-hash-link";
import "./NavbarItem.scss";

const NavbarItem = ({ className, textContent, contacts, sectionId, id }) => {
  return (
    <li className={`${className}--item`}>
      <HashLink smooth to={sectionId} className={`${className}--link`} id={id}>
        {/* {sectionId === "#footer" ? contacts : textContent} */}
        {textContent}
      </HashLink>
    </li>
  );
};

NavbarItem.propTypes = {
  className: PropTypes.string,
  textContent: PropTypes.string,
  contacts: PropTypes.string,
  sectionId: PropTypes.string,
};

NavbarItem.defaultProps = {
  className: "",
  textContent: "",
  contacts: "",
  sectionId: "",
};

export default NavbarItem;
