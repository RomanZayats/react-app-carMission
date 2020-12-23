import React from "react";

const ChangesConfirmation = ({ className, text }) => {
  return (
    <p className={`${className} admin__form-updated-confirmation`}>
      {text}
    </p>
  );
};

export default ChangesConfirmation;
