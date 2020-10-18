import React from "react";

const TextField = React.memo(
  ({
    doChange,
    error,
    name,
    value,
    type,
    required,
    placeholder,
    validMessages
  }) => {
    const getErrorMsg = (valid) => (
      <span className="input__error">{validMessages[valid - 1]}</span>
    );

    if (type === "textarea") {
      return (
        <div className="textarea__wrapper">
          <textarea
            onChange={(e) => doChange(e.target.value)}
            placeholder={placeholder}
            value={value}
          />
          {required && getErrorMsg(error)}
        </div>
      );
    }
    return (
      <div className="input__wrapper">
        <input
          onChange={(e) => doChange(e.target.value)}
          name={name}
          value={value}
          type={type}
          placeholder={placeholder}
        />
        {required && getErrorMsg(error)}
      </div>
    );
  }
);

export default TextField;
