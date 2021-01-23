import React from "react";
import Select from "react-select";

const AdminNavbarSelect = ({
    onChange, options, value, className, placeholder, name, errors, touched
}) => {
    const defaultValue = (options, value) => {
        return options ? options.find(option => option.value === value) : "";
    }

    return (
      <>
        <Select
            className={className}
            value={defaultValue(options, value)}
            placeholder={placeholder}
            onChange={value => {onChange(value)}}
            options={options}
            name={name}
            id={name}
        />
        {errors && touched &&
          (<div style={{ color: "red" }}>
            {/* {errors} */}
          </div>)
        }
      </>
    );
};

export default AdminNavbarSelect;