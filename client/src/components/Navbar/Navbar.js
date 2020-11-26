import React from "react";
import NavbarItem from "../NavbarItem/NavbarItem";
import PropTypes from "prop-types";
import "./Navbar.scss"

const Navbar = ({
    items, className, mainNavBar, onClick, mobileNavbar
}) => {

    const navbarItems = items.map((e) =>
        !e.disabled ? <NavbarItem
            onClick={onClick}
            className={className}
            textContent={e.textContent}
            contacts={e.contacts}
            sectionId={e.sectionId}
            onClick={e.onClick}
            id={e.id}
            key={e.id}
        /> : null
    )

    if (mainNavBar) {
        return (
            <ul className={className} onClick={onClick}>
                {navbarItems}
            </ul>

        )
    }

    if(mobileNavbar) {
        return (
            <div className={`${className}__window`} onClick={onClick}>
                <ul className={className}>
                    {navbarItems}
                </ul>
            </div>
            )
        }

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