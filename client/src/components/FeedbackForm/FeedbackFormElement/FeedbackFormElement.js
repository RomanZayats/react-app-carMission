import React from "react";
import { Formik, Form, Field } from "formik";
import { initialValues } from "./initialValues";
import "../Main/FeedbackForm.scss";
import { number, object, string } from "yup";
import { useDispatch, useSelector } from "react-redux"
import hideFeedbackForm from "../functions/hideFeedbackForm";
import postFeedback from "../functions/postFeedbackForm";
import confirmFeedbackForm from "../functions/confirmFeedbackForm";
import { errObjSelector } from "../../../store/selectors/errObjSelector"

const FeedbackFormElement = () => {

    const dispatch = useDispatch();
    const err = useSelector(errObjSelector)

    const postFeedbackAndConfirm = (values, dispatch, err) => {
      postFeedback(values, dispatch);
     if (err) dispatch(hideFeedbackForm)
     else confirmFeedbackForm(dispatch);
    }

    return (

            <Formik
                validationSchema={
                    object({
                        name: string().required("введите Ваше имя").min(2, "слишком короткое имя").max(30, "слишком длинное имя"),
                        phone: number("введите только цифры").required("введите номер телефона")
                    })
                }
                initialValues={initialValues}
                onSubmit={(values) => {
                    postFeedbackAndConfirm(values, dispatch,err)
                }}
            >

                {({ errors, touched }) => (
                    <Form className='feedback-form'>
                        <button className="feedback-form__exit-btn" onClick={() => {
                            hideFeedbackForm(dispatch);
                        }}>&#215;</button>
                        <label className="feedback-form__name-label">
                            Имя
                            <Field name='name' className='feedback-form__field'/>
                            {touched.name && errors.name ?
                                <span className='error-message'> {errors.name}</span>
                                : null}
                        </label>

                        <label className="feedback-form__phone-label">
                            Ваш номер
                            <Field name='phone' className='feedback-form__field'/>
                            {touched.phone && errors.phone ?
                                <span className='error-message'> {errors.phone}</span>
                                : null}
                        </label>

                        <label className="feedback-form__button-label">
                            <Field name='send-button'
                                   type='submit' value='Отправить' className='feedback-form__conf-button'
                            />
                        </label>
                    </Form>
                )}
            </Formik>

    );
};

export default FeedbackFormElement;
