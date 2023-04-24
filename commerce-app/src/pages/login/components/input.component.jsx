import React from "react";

const FormInputField = ({label,...otherProps}) => {
  return (
    <>
      <label>{label}</label>
      <input
      {
        ...otherProps
      }
      />
    </>
  );
};

export default FormInputField;
