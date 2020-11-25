import React from "react";
import NavbarItem from "../NavbarItem/NavbarItem";
import PropTypes from "prop-types";
import "./Navbar.scss"


const Navbar = ({
    items, className
}) => {
    const navbarItems = items.map((e) =>
        !e.disabled ? <NavbarItem
            className={className}
            textContent={e.textContent}
            contacts={e.contacts}
            sectionId={e.sectionId}
            onClick={e.onClick}
            id={e.id}
            key={e.id}
        /> : null
    )

    return (
        <ul className={className}>
            {navbarItems}
        </ul>
    );
};

Navbar.propTypes = {
    items: PropTypes.array,
    className: PropTypes.string
};

Navbar.defaultProps = {
    items: [],
    className: ""
};


export default Navbar;