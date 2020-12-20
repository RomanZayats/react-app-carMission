import React from "react";
import { Formik, Form, Field } from "formik";
import AdminFormField from "../AdminFormField/AdminFormField";
import Button from "../../generalComponents/Button/Button";
import Select from "react-select";

const AdminNavarItem = ({
    className, textContent, headerLocation, footerLocation, _id, contacts, sectionId, sectionsArr, numberInNavbar, sectionsNumberInNavbar
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
            initialValues={{ textContent, _id, contacts, sectionName, itemNumber }}
            // validationSchema={validationSchema}
            validateOnChange={false}
            validateOnBlur={false}
            // onSubmit={onSubmit}
        >
            {({ errors, touched }) => (
                <Form className={`${className}-item`}>
                    <AdminFormField
                        className={`admin__form-label ${`${className}-label`}`}
                        type="input"
                        name="textContent"
                        errors={errors}
                        labelName="Название ccылки секции в меню"
                        fieldClassName={`${className}-field`}
                    />

                    {contacts ?
                        <>
                            <AdminFormField
                                className={`admin__form-label ${`${className}-label`}`}
                                type="input"
                                name="contacts"
                                errors={errors}
                                labelName="Контактные данные"
                                fieldClassName={`${className}-field`}
                            />
                            {/* <p className="admin__navbar-contacts">Знаком "/" разделяются места переносa текста на новою строку</p> */}
                        </>
                        : null
                    }

                    {!contacts ?
                        <>
                            <label className={`${className}-label`}>К какой секции относится</label>
                            <Select
                                className={`${className}-select`}
                                defaultValue={sectionName}
                                options={sectionsArr}
                            />
                        </>
                        : null
                    }

                    <label className={`${className}-label`}>Расположение в меню</label>
                    <Select
                        className={`${className}-select`}
                        defaultValue={headerDefaultValue}
                        options={options("меню")}
                    />

                    <label className={`${className}-label`}>Расположение в футере(подвале)</label>
                    <Select
                        className={`${className}-select`}
                        defaultValue={footerDefaultValue}
                        options={options("футере")}
                    />
                    
                    <label htmlFor="itemNumber" className={`${className}-label`}>Порядковый номер секции</label>
                    {/* <p className="admin__navbar-number">В случае изменения, проверьте расположение секции слева или справа, а так же на уникальность ее номера!</p> */}
                    <Select
                        name="itemNumber"
                        className={`${className}-select`}
                        defaultValue={itemNumber}
                        options={sectionsNumberInNavbar}
                    />

                    {/* <label className={`${className}-label`}>Отображение секции на сайте</label>
                    <Select
                        className={`${className}-select`}
                        defaultValue={isDisabled}
                        options={options("активна")}
                    /> */}

                    <div className="admin__buttons-box admin__navbar-buttons">
                        <Button
                            className="admin__delete-btn"
                            text="Delete item"
                            onClick={(event) => {
                                event.preventDefault();
                            }}
                        />
                        <Field
                            type="submit"
                            // disabled={isUpdated}
                            name="submit"
                            className="admin__submit-btn"
                            value="Submit changes"
                        />
                        {/* {isUpdated && <UpdateConfirmation />} */}
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default AdminNavarItem;