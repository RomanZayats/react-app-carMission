import React from "react";
import {Formik, Form, Field} from "formik";
// import './initialValues';
import {initialValues} from "./initialValues";
import "./FeedbackForm.scss"
import {number, object, string} from "yup";
// import {connect} from "react-redux";
// import {loadingFormDataAction} from "../../store/cartForm/cartFormActions";

const FeedbackForm = ({saveFormData, changeAppState}) => {

  const saveFormValues = (formValuesObj) => {
    saveFormData(formValuesObj);
    changeAppState()
  };

  return (
    <Formik
      validationSchema={
        object({
          name: string().required("пожалуйста, введите Ваше имя").min(2, "слишком короткое имя").max(30, "слишком длинное имя"),
          phone: number("номер телефона содержит только цифры").required("пожалуйста, введите номер телефона"),
        })
      }
      initialValues={initialValues}
      onSubmit={(values) => saveFormValues(values)}
    >

      {({errors, touched}) => (
        <Form className='feedback-form'>
          < label className="feedback-form__name-label">
            Имя
            <Field name='name' className='feedback-form__field' />
            {touched.name && errors.name ?
              <span className='error-message'> {errors.name}</span>
              : null}
          </label>

          <label className="feedback-form__phone-label">
            Ваш номер
            <Field name='phone' className='feedback-form__field' />
            {touched.phone && errors.phone ?
              <span className='error-message'> {errors.phone}</span>
              : null}
          </label>

          <label className="feedback-form__button-label">
            <Field name='send-button'
                   type='submit' value='Отправить' className='feedback-form__button'
            />
          </label>

        </Form>
      )}
    </Formik>

  );
};

// const mapStoreToProps = (store) => {
//   return {
//     storeValues: store.formValues
//   }
// };
//
// const mapDispatchToProps = (dispatch) => ({
//   saveFormData: (valuesObject) => dispatch(loadingFormDataAction(valuesObject))
// });

export default FeedbackForm;
// export default connect (mapStoreToProps, mapDispatchToProps) (CartForm);