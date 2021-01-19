import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SectionHeading from "../../generalComponents/SectionHeading/SectionHeading";
import AdminSocialNetwroksItem from "../AdminSocialNetworksItem/AdminSocialNetworksItem";
import Button from "../../generalComponents/Button/Button";
import "./AdminSocialNetworks.scss";
import { getSocialNetworks } from "../../../store/socialNetworks/selectors";


const AdminSocialNetworks = () => {
    const [items, setItems] = useState([]);
    const data = useSelector(getSocialNetworks);
    const mainClassName = "admin-netwroks";
    const nextNum = data.length + 1;

    useEffect(() => {
    
        const socNetList = () => data.map((i, index) => (
            <AdminSocialNetwroksItem
            isEnabled = {i.isEnaled}
            name = {i.name}
            id = {i.id || i._id}
            url = {i.url}
            imgSrc = {i.imgSrc}
            key = {index}

            />
        ))

        setItems(socNetList());
    
    }, [])

    return (
        <div className={mainClassName}>
            <SectionHeading className={`${mainClassName}__main-header`} text="Социальные сети" />
            <div className={`${mainClassName}__menu`}>{items}</div>
            {/* <Button className={`${mainClassName}__add-btn`} text="+" onClick={handleAddItem} /> */}
        </div>
    );
};

export default AdminSocialNetworks;