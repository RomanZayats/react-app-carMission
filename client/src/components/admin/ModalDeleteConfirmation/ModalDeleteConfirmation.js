import React from "react";
import Button from "../../generalComponents/Button/Button";

const ModalDeleteConfirmation = () => {
  return (
    <div>
      <div>
        <Button text="&#215;" className="" onClick={() => {}} />
        <div className="content">
          <p>content</p>
        </div>
        <div className="btn-wrapper">
          <Button text="Да" className="" onClick={() => {}} />
          <Button text="Нет" className="" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default ModalDeleteConfirmation;
