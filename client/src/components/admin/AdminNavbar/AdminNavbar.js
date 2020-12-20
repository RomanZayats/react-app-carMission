import React from "react";
import { useSelector } from "react-redux";
import { getNavbarData } from "../../../store/navbar/selectors";
import AdminNavarItem from "../AdminNavbarItem/AdminNavarItem";
import SectionHeading from "../../generalComponents/SectionHeading/SectionHeading";
import Button from "../../generalComponents/Button/Button";
import "./AdminNavbar.scss";


const AdminNavbar = () => {
    const navbarData = useSelector(getNavbarData);
    const sortByNumberInNavbar = (arr) => {
        arr.sort((a, b) => +a.numberInNavbar > +b.numberInNavbar ? 1 : -1);
    }
    sortByNumberInNavbar(navbarData);
    const sectionsLinkArr = navbarData.map((e) => ({ value: e.sectionId, label: e.sectionId}));
    const sectionsNumberInNavbar = navbarData.map((e) => ({ value: e.numberInNavbar, label: e.numberInNavbar}));


    const navbarItems = navbarData.map(({ textContent, contacts, footerLocation, headerLocation, _id, id, sectionId, numberInNavbar }, index) =>
        <AdminNavarItem
            className="admin__navbar"
            textContent={textContent}
            headerLocation={headerLocation}
            footerLocation={footerLocation}
            contacts={contacts}
            sectionsArr={sectionsLinkArr}
            sectionId={sectionId}
            numberInNavbar={numberInNavbar}
            sectionsNumberInNavbar={sectionsNumberInNavbar}
            id={id || _id}
            key={index}
        />
    )
    
    return (
        <div className="admin__navbar">
            <SectionHeading text="Пункты меню" />
            <ul className="admin__navbar-menu">{navbarItems}</ul>
            <Button className="admin__add-btn" text="Add item" onClick={() => {}} />
        </div>
    );
};

export default AdminNavbar;