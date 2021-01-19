import React from "react";
import { Formik } from "formik";

const AdminSocialNetworksItem = ({
    isEnabled, name, id, url, imgSrc, key, isNew
}) => {

    const postItemToDB = () => {

    };

    const updateItem = () => {
        
    };


    return (
        <Formik
            // initialValues={}
            // validationSchema={}
            validateOnBlur={false}
            validateOnChange={false}
            onSubmit={isNew ? postItemToDB : updateItem}
        >



        </Formik>
    );
};

export default AdminSocialNetworksItem;