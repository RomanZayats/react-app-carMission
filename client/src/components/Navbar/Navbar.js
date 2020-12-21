import React from "react";
import NavbarItem from "../NavbarItem/NavbarItem";
import PropTypes from "prop-types";
import "./Navbar.scss";
import { v4 as uuidv4 } from "uuid";

const Navbar = ({ items, className, onClick, mobileNavbar, isFooter }) => {
  const navbarItems = items.map((e) =>
    !e.disabled ? (
      <NavbarItem
        className={className}
        textContent={e.textContent}
        contacts={e.contacts}
        sectionId={`#${e.sectionId}`}
        id={uuidv4()}
        key={e._id}
        isFooter={e.contacts && isFooter}
      />
    ) : null
  );

  if (mobileNavbar) {
    return (
      <div className={`${className}__window`} onClick={onClick}>
        <ul className={className}>{navbarItems}</ul>
      </div>
    );
  }

  return <ul className={className}>{navbarItems}</ul>;
};

Navbar.propTypes = {
  items: PropTypes.array,
  className: PropTypes.string,
  onClick: PropTypes.func,
  mobileNavbar: PropTypes.bool,
  isFooter: PropTypes.bool
};

Navbar.defaultProps = {
  items: [],
  className: "",
  onClick: () => {},
  mobileNavbar: false,
  isFooter: false

};

export default Navbar;
