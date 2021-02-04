import React from "react";
import { Field, Form, Formik } from "formik";
import AdminFormField from "../../AdminFormField/AdminFormField";
import * as yup from "yup";
import axios from "axios";
import { toastr } from "react-redux-toastr";

const inviteSchema = yup.object().shape({
  email: yup.string("Введите текст").email("Invalid email"),
});

const InviteForm = () => {
  const handleSubmit = async (values) => {
    const { email } = values;

    const res = await axios
      .post("/api/invites/", { email })
      .catch((err) => toastr.error(err.message));

    if (res.status === 200) {
      toastr.success("Success", res.data.message);
    } else {
      toastr.warning("Warning", "Something went wrong");
    }
  };

  return (
    <Formik
      initialValues={{ email: "" }}
      validationSchema={inviteSchema}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={handleSubmit}
    >
      {({ errors }) => (
        <Form className="admin-stages__form-item">
          <AdminFormField
            labelClassName="admin-stages__form-label"
            fieldClassName="admin-stages__form-input"
            errorClassName="admin-stages__form-error"
            type="text"
            name="email"
            errors={errors}
            labelName="Email для приглашения"
          />
          <Field
            type="submit"
            name="submit"
            className="admin-stages__submit-btn"
            value="Отправить приглашение"
          />
        </Form>
      )}
    </Formik>
  );
};

export default InviteForm;
