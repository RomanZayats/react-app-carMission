import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import AdminFormField from "../../AdminFormField/AdminFormField";
import axios from "axios";
import { useDispatch } from "react-redux";
import { validationSchema } from "../ValidationSchema";
import Button from "../../../generalComponents/Button/Button";
import "./FormItemReviewCarousel.scss"
import { toastr } from "react-redux-toastr";
import { addNewReview } from "../../../../store/ReviewCarousel/actions";
import { filterReviews } from "../../../../store/ReviewCarousel/operations";

const FormItemReviewCarousel = ({ obj, isNew }) => {
const { customerPhoto, customerName, carInfo, reviewText, _id: id } = obj;

  const dispatch = useDispatch();
  const [isUpdated, setIsUpdated] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDeleteFromDB = async (e) => {
    e.preventDefault();

    const deleted = await axios
      .delete(`/api/reviews/delete/${id}`)
      .catch((err) => {
        toastr.error(err.message);
      });

    if (deleted.status === 200) {
      toastr.success("Успешно", `Отзыв с id "${id}" удалён в базе данных`);
      dispatch(filterReviews(id));
    } else {
      toastr.warning("Хм...", "Что-то пошло не так");
    }
  };

  const handleDeleteNew = (e) => {
    e.preventDefault();
    setIsDeleted(true);
    toastr.success("Успешно", "Отзыв удалён до внесения в базу данных");
  };

  const handleUpdate = async (values) => {
    const updatedObj = {
      ...obj,
      ...values,
    };
    const updatedReview = await axios
      .put(`/api/reviews/${id}`, updatedObj)
      .catch((err) => {
        toastr.error(err.message);
      });

    if (updatedReview.status === 200) {
      setIsUpdated(true);
      toastr.success(
        "Успешно",
        `Отзыв с id "${id}" изменён в базе данных`
      );
    } else {
      toastr.warning("Хм...", "Что-то пошло не так");
    }
  };

  const handleAddToDB = async (values) => {
    const newReview = await axios
      .post("/api/reviews/", values)
      .catch((err) => {
        toastr.error(err.message);
      });

    if (newReview.status === 200) {
      toastr.success("Успешно", "Отзыв добавлен в базу данных");
      dispatch(addNewReview(newReview.data));
    } else {
      toastr.warning("Хм...", "Что-то пошло не так");
    }
  };

  if (isDeleted) {
    return null;
  }

  return (
    <Formik
      initialValues={{ customerPhoto, customerName, carInfo, reviewText }}
      validationSchema={validationSchema}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={isNew ? handleAddToDB : handleUpdate}
    >
      {({ errors, touched, submitting }) => (
        <Form className="admin-reviews__form-item">
          <AdminFormField
            labelClassName="admin-reviews__form-label"
            fieldClassName="admin-reviews__form-input"
            errorClassName="admin-reviews__form-error"
            type="input"
            name="customerPhoto"
            errors={errors}
            labelName="Путь к фото"
          />
          <AdminFormField
            labelClassName="admin-reviews__form-label"
            fieldClassName="admin-reviews__form-input"
            errorClassName="admin-reviews__form-error"
            type="text"
            name="customerName"
            errors={errors}
            labelName="Имя покупателя"
          />
          <AdminFormField
            labelClassName="admin-reviews__form-label"
            fieldClassName="admin-reviews__form-input"
            errorClassName="admin-reviews__form-error"
            type="text"
            name="carInfo"
            errors={errors}
            labelName="Марка, модель авто"
          />
          <AdminFormField
            labelClassName="admin-reviews__form-label"
            fieldClassName="admin-reviews__form-input"
            errorClassName="admin-reviews__form-error"
            type="textarea"
            name="reviewText"
            errors={errors}
            labelName="Отзыв"
          />

          <Field
            type="submit"
            name="submit"
            className="admin-reviews_submit-btn"
            disabled={submitting}
            value={isNew ? "Создать отзыв" : "Подтвердить изменения"}
          />
          <Button
            className="admin-reviews__delete-btn"
            text="&#10005;"
            onClick={isNew ? handleDeleteNew : handleDeleteFromDB}
          />
        </Form>
      )}
    </Formik>
  );
};

export default FormItemReviewCarousel;

