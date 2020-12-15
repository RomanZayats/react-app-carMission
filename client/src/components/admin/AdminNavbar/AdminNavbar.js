import React from "react";
import { useSelector } from "react-redux";
import { getNavbarData } from "../../../../store/navbar/selectors";
import AdminNavarItem from "../AdminNavbarItem/AdminNavarItem";


const AdminNavbar = () => {
    const navbarData = useSelector(getNavbarData);

    const navbarItems = navbarData.map(({ textContent, contacts, footerLocation, headerLocation, disabled, _id }, index) => 
        <AdminNavarItem 
            className="admin__navbar-item"
            textContent={textContent}
            disabled={disabled}
            headerLocation={headerLocation}
            footerLocation={footerLocation}
            contacts={contacts}
            key={index}
        />
    )
    
    return (
        <ul>{navbarItems}</ul>
    );
};

export default AdminNavbar;