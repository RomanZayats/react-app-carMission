import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getNavbarData } from "../../../store/navbar/selectors";
import AdminNavarItem from "../AdminNavbarItem/AdminNavarItem";
import SectionHeading from "../../generalComponents/SectionHeading/SectionHeading";
import Button from "../../generalComponents/Button/Button";
import "./AdminNavbar.scss";


const AdminNavbar = () => {
    const [navbarList, setNavbarList] = useState([]);
    const navbarData = useSelector(getNavbarData);
    const mainClassName = "admin-navbar"

    const sortByNumberInNavbar = (arr) => {
        arr.sort((a, b) => +a.numberInNavbar > +b.numberInNavbar ? 1 : -1);
    }
    sortByNumberInNavbar(navbarData);
    const sectionsLinkArr = navbarData.map((e) => ({ value: e.sectionId, label: e.sectionId}));
    const sectionsNumberInNavbar = navbarData.map((e) => ({ value: e.numberInNavbar, label: e.numberInNavbar}));

    const createNewFormItem = () => {
        const empty = {
            className: {mainClassName},
            textContent: "Введите название секции",
            headerLocation: "Выберите расположение в меню",
            footerLocation: "Выберите расположение в футере(подвале)",
            numberInNavbar: "Введите уникальный порядковый номер",
            sectionId: "Выберите к какой секции относится линк",

            sectionsArr: {sectionsLinkArr},
            sectionsNumberInNavbar: {sectionsNumberInNavbar}
        };
    };



    useEffect(() => {
        const mapFormToRender = () => {
          return navbarData.map(({ textContent, contacts, footerLocation, headerLocation, _id, id, sectionId, numberInNavbar, disabled }) => {
            return <AdminNavarItem
                        className={mainClassName}
                        textContent={textContent}
                        headerLocation={headerLocation}
                        footerLocation={footerLocation}
                        contacts={contacts}
                        numberInNavbar={numberInNavbar}
                        sectionId={sectionId}
                        disabled={disabled}
                        id={id || _id}
                        key={_id}

                        sectionsArr={sectionsLinkArr}
                        sectionsNumberInNavbar={sectionsNumberInNavbar}
                    />;
        });
        };
        setNavbarList(mapFormToRender());
    }, [navbarData]);
    
    const handleAddItem = () => {
        const form = createNewFormItem();
    
        const updated = navbarList.map((i) => i);
        updated.push(form);
        setNavbarList(updated);
    };

    


    // const navbarList = navbarData.map(({ textContent, contacts, footerLocation, headerLocation, _id, id, sectionId, numberInNavbar }, index) =>
    //     <AdminNavarItem
    //         className="admin__navbar"
    //         textContent={textContent}
    //         headerLocation={headerLocation}
    //         footerLocation={footerLocation}
    //         contacts={contacts}
    //         sectionsArr={sectionsLinkArr}
    //         sectionId={sectionId}
    //         numberInNavbar={numberInNavbar}
    //         sectionsNumberInNavbar={sectionsNumberInNavbar}
    //         id={id || _id}
    //         key={index}
    //     />
    // )
    
    return (
        <div className={mainClassName}>
            <SectionHeading className={`${mainClassName}__main-header`} text="Пункты меню" />
            <div className={`${mainClassName}__menu`}>{navbarList}</div>
            <Button className={`${mainClassName}__add-btn`} text="+" onClick={handleAddItem} />
        </div>
    );
};

export default AdminNavbar;