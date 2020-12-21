import React from "react";
import { Formik, Form, Field } from "formik";
import AdminFormField from "../AdminFormField/AdminFormField";
import Button from "../../generalComponents/Button/Button";
import Select from "react-select";
import * as yup from "yup";
import { toastr } from "react-redux-toastr";
import axios from "axios";
import { useDispatch } from "react-redux";
import "./AdminNavbarItem.scss";


const navbarSchema = yup.object().shape({
    textContent: yup
        .string()
        .typeError("Введите текст")
        .strict(true)
        .required("Обязательное поле"),
    contacts: yup
        .string()
        .typeError("Введите текст")
        .strict(true)
});

const AdminNavarItem = ({
    className, textContent, headerLocation, footerLocation, _id, contacts, sectionId, sectionsArr, numberInNavbar, sectionsNumberInNavbar, disabled
}) => {
    const options = (name) => (
        name === "активна"
            ?
                [
                    { value: "true", label: "Секция неактивна на сайте" },
                    { value: "false", label: "Секция активна на сайте" }
                ]
            :
                [
                    { value: "left-side", label: "Слева от Лого" },
                    { value: "right-side", label: "Справа от Лого" },
                    { value: "non-active", label: `Неактивно в ${name}` }
                ]
    )

    const headerDefaultValue = options("меню").filter(option => option.value === headerLocation);
    const footerDefaultValue = options("футере").filter(option => option.value === footerLocation);
    const sectionName = sectionsArr.filter(name => name.value === sectionId);
    const itemNumber = sectionsNumberInNavbar.filter(name => name.value === numberInNavbar);


    return (
        <Formik
            initialValues={{ textContent, contacts, headerLocation, footerLocation, numberInNavbar }}
            validationSchema={navbarSchema}
            validateOnChange={false}
            validateOnBlur={false}
            // onSubmit={onSubmit}
        >
            {({ errors, touched }) => (
                <Form className={`${className}__item`}>
                    {disabled ?
                        <label htmlFor="itemNumber" className={`${className}__info ${className}__info_none-active`}>Ceкция неактивна на сайте</label>
                        :
                        <label htmlFor="itemNumber" className={`${className}__info ${className}__info_active`}>Ceкция активна на сайте</label>
                    }

                    <AdminFormField
                        labelClassName={`${className}__label`}
                        fieldClassName={`${className}__input`}
                        errorClassName="admin-stages__form-error"
                        labelName="Название ccылки секции в меню"
                        type="input"
                        name="textContent"
                        errors={errors}
                    />
                    <label htmlFor="itemNumber" className={`${className}__label`}>
                        <span className={`${className}__number-text`}>Порядковый номер пункта в меню*</span>
                        <p className={`${className}__number-hidden`}>Проверьте уникален ли номер пункта, а также его расположение слева или справа от лого</p>
                    </label>
                    <Select
                        name="numberInNavbar"
                        className={`${className}__select`}
                        defaultValue={itemNumber}
                        options={sectionsNumberInNavbar}
                    />


                    {contacts ?
                        <>
                            <p className={`${className}__contacts-hidden`}>Знаком "/" разделяются места переносa текста на новою строку</p>
                            <AdminFormField
                                labelClassName={`${className}__label`}
                                fieldClassName={`${className}__input`}
                                errorClassName="admin-stages__form-error"
                                labelName="Контактные данные*"
                                type="input"
                                name="contacts"
                                errors={errors}
                            />
                        </>
                        : null
                    }

                    {!contacts ?
                        <>
                            <label className={`${className}__label`}>К какой секции относится</label>
                            <Select
                                name="sectionId"
                                className={`${className}__select`}
                                defaultValue={sectionName}
                                options={sectionsArr}
                            />
                        </>
                        : null
                    }

                    <label className={`${className}__label`}>Расположение в меню</label>
                    <Select
                        name="headerLocation"
                        className={`${className}__select`}
                        defaultValue={headerDefaultValue}
                        options={options("меню")}
                    />

                    <label className={`${className}__label`}>Расположение в футере(подвале)</label>
                    <Select
                        name="footerLocation"
                        className={`${className}__select`}
                        defaultValue={footerDefaultValue}
                        options={options("футере")}
                    />
                    
                    <Field
                        type="submit"
                        name="submit"
                        className={`${className}__submit-btn`}
                        // value={isNew ? "Создать новый пункт меню?" : "Подтвердить изменения"}
                    />
                    <Button
                        className={`${className}__delete-btn`}
                        text="&#10005;"
                        // onClick={isNew ? handleDeleteNew : handleDeleteFromDB}
                    />
                </Form>
            )}
        </Formik>
    );
};

export default AdminNavarItem;