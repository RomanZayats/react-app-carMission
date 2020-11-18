import React, { useState } from "react";
import PropTypes from "prop-types";
// import Button from "../Button/Button";
import "./ErrorModal.scss";

const ErrorModal = ({ error }) => {
  const [isErrorModal, setIsErrorModal] = useState(true);

  const closeErrorModal = (event) => {
    if (event.target === event.currentTarget) setIsErrorModal(!isErrorModal);
  };

  return (
    isErrorModal && (
      <div
        data-testid="modal"
        className="error-modal"
        onClick={(event) => closeErrorModal(event)}
      >
        <div className="error-modal__window">
          <div className="error-modal__heading">
            <p className="error-modal__heading-text">{`an error ${error.name} occurred`}</p>
          </div>
          <p className="error-modal__text">{error.message}</p>
          <button
            className="error-modal__btn"
            onClick={(event) => closeErrorModal(event)}
          >
            Ok
          </button>
        </div>
      </div>
    )
  );
};

ErrorModal.propTypes = {
  error: PropTypes.object.isRequired,
};

export default ErrorModal;
