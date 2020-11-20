import React, { useState } from "react";
import "./Checkbox.scss";

const Checkbox = ({ name, setValue }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setValue(name, isChecked);
  };

  return (
    <div className="checkbox">
      <input
        type="checkbox"
        checked={isChecked}
        className="checkbox__native"
        name={name}
        onChange={handleCheckboxChange}
      />
      <div className="checkbox__custom" />
    </div>
  );
};

export default Checkbox;
