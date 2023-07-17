import React from "react";
import './formInput.css';

const FormInput = ({ ...inputprops }) => {
  return (
    <div className="input-container">
      <input {...inputprops} />
    </div>
  );
};

export default FormInput;
