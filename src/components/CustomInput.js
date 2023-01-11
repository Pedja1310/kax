import React from "react";

const CustomInput = ({
  formData,
  type,
  name,
  placeholder,
  handleChange,
  label,
  rows,
}) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      {type === "textarea" ? (
        <textarea
          value={formData.message}
          name="message"
          className="custom-textarea"
          rows="6"
          placeholder="More explanation"
          onChange={handleChange}
        ></textarea>
      ) : (
        <input
          value={formData.name}
          type={type}
          name={name}
          className="custom-input"
          placeholder={placeholder}
          onChange={handleChange}
        />
      )}
      <span id={`${name}_error`} className="field_error"></span>
    </div>
  );
};

export default CustomInput;
