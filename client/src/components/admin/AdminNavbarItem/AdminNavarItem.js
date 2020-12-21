import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import AdminFormField from "../AdminFormField/AdminFormField";
import Button from "../../generalComponents/Button/Button";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";

import * as yup from "yup";
import { toastr } from "react-redux-toastr";
import axios from "axios";
import { useDispatch } from "react-redux";
import "./AdminNavbarItem.scss";
import { addNewItem } from "../../../store/navbar/actions";
import { filterNavbarData } from "../../../store/navbar/operations";


const navbarSchema = yup.object().shape({
    textContent: yup
        .string()
        .typeError("Введите текст")
        .min(2, "Слишком короткое название!")
        .max(50, "Слишком длинное название!")
        .required("Обязательное поле"),
    headerLocation: yup
        .string()
        .typeError("Выберите одно из свойств")
        .required("Обязательное поле"),
    footerLocation: yup
        .string()
        .typeError("Выберите одно из свойств")
        .required("Обязательное поле"),
    sectionId: yup
        .string()
        .typeError("Выберите одно из свойств")
        
});

const AdminNavarItem = ({
    className,
    textContent,
    textContentPlaceholder,
    headerLocation,
    headerLocationPlaceholder,
    footerLocation,
    footerLocationPlaceholder,
    id,
    contacts,
    sectionId,
    sectionIdPlaceholder,
    sectionsArr,
    numberInNavbar,
    sectionsNumberInNavbar,
    disabled,
    isNew
}) => {
    const dispatch = useDispatch();
    const [isDeleted, setIsDeleted] = useState(false);
    const [number, setNumber] = useState(numberInNavbar);
    const [numberArr, setNumberArr] = useState(sectionsNumberInNavbar);
    // const [formTextContent, setFormTextContent] = useState(textContent);
    // const [headerLocation, setHeaderLocation] = useState(headerLocation);
    // const [footerLocation, setFooterLocation] = useState(footerLocation);
    // const [sectionId, setSectionId] = useState(sectionId);
    const initialValues = contacts ? { textContent, contacts, headerLocation, footerLocation, number, sectionId } : { textContent, headerLocation, footerLocation, number, sectionId }
    // console.log(initialValues)


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
    const headerDefaultValue = options("меню").filter(option => headerLocation ? option.value === headerLocation : null);
    const footerDefaultValue = options("футере").filter(option => footerLocation ? option.value === footerLocation : null);
    const sectionName = sectionsArr.filter(name => name.value === sectionId);
    const itemNumber = sectionsNumberInNavbar.filter(name => name.value === numberInNavbar);


    const handleDeleteFromDB = async (e) => {
        e.preventDefault();
        const deleted = await axios
            .delete(`/api/navbar//${id}`)
            .catch((err) => {
            toastr.error(err.message);
        });
    
        if (deleted.status === 200) {
            toastr.success("Успешно", `Пункт "${textContent}" удалён из базы данных`);
            dispatch(filterNavbarData(id));
        } else {
            toastr.warning("Хм...", "Что-то пошло не так");
        }
    };
    const handleDeleteNew = (e) => {
        e.preventDefault();
        setIsDeleted(true);
        toastr.success("Успешно", "Айтем удалён до внесения в базу данных");
    };
    const handleUpdate = async (values) => {
        console.log(values)
        const updatedItem = await axios
            .put(`/api/navbar/${id}`, values)
            .catch((err) => {
            toastr.error(err.message);
        });
    
        if (updatedItem.status === 200) {
            toastr.success(
                "Успешно",
                `Пункт "${values.textContent}" изменён в базе данных`
            );
        } else {
            toastr.warning("Хм...", "Что-то пошло не так");
        }
    };
    const handlePostToDB = async (values) => {
        console.log(values)

        const newItem = await axios
            .post("/api/navbar/", values)
            .catch((err) => {
            toastr.error(err.message);
        });
    
        if (newItem.status === 200) {
            toastr.success("Успешно", `Пункт "${values.textContent}" добавлен в базу данных`);
            dispatch(addNewItem(newItem.data));
        } else {
            toastr.warning("Хм...", "Что-то пошло не так");
        }
    };
    
    if (isDeleted) {
        return null;
    }

    const changeNumber = (obj) => {
        const { label, value } = obj;
        setNumber(value);
        // const {name, value} = e.target;
        // console.log(value)
    }
    const addNumber = (obj) => {
        const { label, value } = obj;
        setNumberArr(...sectionsNumberInNavbar, value);
    }

    

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={navbarSchema}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={isNew ? handlePostToDB : handleUpdate}
        >
            {({ errors }) => (
                <Form className={`${className}__item`}>
                    {disabled ?
                        <label className={`${className}__info ${className}__info_none-active`}>Ceкция неактивна на сайте</label>
                        :
                        contacts ?
                            <label className={`${className}__info ${className}__info_active`}>Данный айтем вызывает открытие модального окна обратной связи</label>
                            :
                            isNew ?
                                <label className={`${className}__info ${className}__info_new-item`}>Новый айтем</label>
                                :
                                <label className={`${className}__info ${className}__info_active`}>Ceкция активна на сайте</label>
                    }

                    <AdminFormField
                        labelClassName={`${className}__label`}
                        fieldClassName={`${className}__input`}
                        errorClassName="admin-stages__form-error"
                        labelName="Название ccылки секции в меню"
                        type="input"
                        name="textContent"
                        placeholder={textContent || textContentPlaceholder}
                        errors={errors}
                    />

                    <label htmlFor="numberInNavbar" className={`${className}__label`}>
                        <span className={`${className}__number-text`}>Порядковый номер пункта в меню*</span>
                        <p className={`${className}__number-hidden`}>Проверьте уникален ли номер пункта, а также его расположение слева или справа от лого</p>
                    </label>
                    <CreatableSelect
                        isClearable
                        className={`${className}__select`}
                        // name="numberInNavbar"
                        defaultValue={itemNumber}
                        onChange={changeNumber}
                        onCreateOption={addNumber}
                        options={numberArr}
                        value={number}
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
                                placeholder={sectionId || sectionIdPlaceholder}
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
                        placeholder={headerLocation || headerLocationPlaceholder}
                        options={options("меню")}
                    />

                    <label className={`${className}__label`}>Расположение в футере(подвале)</label>
                    <Select
                        name="footerLocation"
                        className={`${className}__select`}
                        defaultValue={footerDefaultValue}
                        placeholder={footerLocation || footerLocationPlaceholder}
                        options={options("футере")}
                    />
                    
                    <Field
                        type="submit"
                        name="submit"
                        className={`${className}__submit-btn`}
                        value={isNew ? "Создать новый пункт меню?" : "Подтвердить изменения"}
                    />
                    {!contacts ?
                        <Button
                            className={`${className}__delete-btn`}
                            text="&#10005;"
                            onClick={isNew ? handleDeleteNew : handleDeleteFromDB}
                        />
                        :
                        null
                    }
                </Form>
            )}
        </Formik>
    );
};

export default AdminNavarItem;