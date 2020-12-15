import React from 'react';
import { Formik } from 'formik';
import AdminFormField from '../AdminFormField/AdminFormField';

const AdminNavarItem = ({
    className, textContent, headerLocation, footerLocation, disabled, _id
}) => {
    return (
        <Formik
        // initialValues={{ imgPath, title }}
        // validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={onSubmit}
        > 
            {({ errors, touched }) => (
                <Form className={className}>
                    <AdminFormField
                        className="admin__form-label"
                        type="input"
                        name="section-name"
                        errors={errors}
                        labelName="Название секции в навбаре"
                    />

                    <AdminFormField
                        as="select"
                        className="admin__form-label"
                        type="input"
                        name="headerLocation"
                        errors={errors}
                        labelName="Положение в меню"
                    >
                        <option value="left-side">Слева от лого</option>
                        <option value="right-side">Справа от лого</option>
                        <option value="non-active">Неактивно в меню</option>
                    </AdminFormField>

                    <AdminFormField
                        as="select"
                        className="admin__form-label"
                        type="input"
                        name="footerLocation"
                        errors={errors}
                        labelName="Положение в футере"
                    >
                        <option value="left-side">Слева от лого</option>
                        <option value="right-side">Справа от лого</option>
                        <option value="non-active">Неактивно в футере</option>
                    </AdminFormField>


                    <div className="admin__buttons-box">
                        <Button
                            className="admin__delete-btn"
                            text="Delete item"
                            onClick={(event) => {
                                event.preventDefault();
                            }}
                        />
                        <Field
                            type="submit"
                            disabled={isUpdated}
                            name="submit"
                            className="admin__submit-btn"
                            value="Submit changes"
                        />
                        {isUpdated && <UpdateConfirmation />}
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default AdminNavarItem;