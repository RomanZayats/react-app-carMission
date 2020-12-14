import React from "react";
import { useSelector } from "react-redux";
import { getNavbarData } from "../../../../store/navbar/selectors";


const AdminNavbar = () => {
    const navbarData = useSelector(getNavbarData);
    

    return (
        <div>
            
        </div>
    );
};

export default AdminNavbar;